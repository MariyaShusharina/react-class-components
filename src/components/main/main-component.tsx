interface DataPokemons {
  results: Item[];
}

interface Item {
  name: string;
  url: string;
}

interface Card {
  id: number;
  title: string;
  source: string;
}

import { Component } from 'react';
import ErrorBoundary from './results-section/message-components/error-boundary.tsx';
import Results from './results-section/results-section.tsx';
import './main-component.css';

export default class Main extends Component {
  state = {
    stateChanged: 0,
  };

  search = async () => {
    const query: string =
      'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

    const result = await fetch(query);
    const data: JSON = await result.json();

    localStorage.setItem('PokemonAPIMariyaShusharina', JSON.stringify(data));
  };

  filterPokemons = async (ev: React.ChangeEvent) => {
    const localData: DataPokemons = JSON.parse(
      localStorage.PokemonAPIMariyaShusharina
    );

    if (ev.target instanceof HTMLInputElement && ev.target.value !== '') {
      const val: string = ev.target.value;

      const cardsArr: Card[] = [];

      for (let i: number = 0; i < localData.results.length; i++) {
        if (localData.results[i].name.includes(val)) {
          const pokeId: number = i + 1;
          let pokeName = localData.results[i].name;
          pokeName = pokeName[0].toUpperCase() + pokeName.slice(1);
          const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

          const card: Card = {
            id: i + 1,
            title: pokeName,
            source: imgSrc,
          };

          cardsArr.push(card);
        }
      }

      localStorage.setItem(
        'PokeResultMariyaShusharina',
        JSON.stringify(cardsArr)
      );
      localStorage.setItem(
        'PokeNeedsUpdateMariyaShusharina',
        JSON.stringify('true')
      );
    }

    this.updateFunc();
  };

  updateFunc() {
    this.setState({ stateChanged: this.state.stateChanged + 1 });
  }

  componentDidMount(): void {
    this.search();
  }

  render() {
    return (
      <main>
        <section className="search-section">
          <input
            type="search"
            className="search-field"
            placeholder="Your input..."
            onChange={this.filterPokemons}
          ></input>
        </section>
        <ErrorBoundary>
          <Results key={this.state.stateChanged} />
        </ErrorBoundary>
      </main>
    );
  }
}
