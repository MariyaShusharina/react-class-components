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

import { Component /* , type ReactNode */ } from 'react';
import ErrorBoundary from './results-section/message-components/error-boundary.tsx';
import ErrorButton from './results-section/error-button/error-button.tsx';
import Results from './results-section/results-section.tsx';
import './main-component.css';

export default class Main extends Component {
  state = {
    stateChanged: 0,
  };

  async search() {
    const query: string =
      'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

    const result = await fetch(query);
    const data: JSON = await result.json();

    localStorage.setItem('PokemonAPIMariyaShusharina', JSON.stringify(data));
  }

  storeQuery(ev: React.ChangeEvent) {
    if (ev.target instanceof HTMLInputElement && ev.target.value !== '') {
      const val: string = ev.target.value;

      localStorage.setItem('PokemonQueryMariyaShusharina', val);
    }
  }

  filterPokemons = async (/* ev: React.MouseEvent */) => {
    const localData: DataPokemons = JSON.parse(
      localStorage.PokemonAPIMariyaShusharina
    );

    const localQuery: string = localStorage.PokemonQueryMariyaShusharina;

    if (localQuery !== '') {
      const cardsArr: Card[] = [];

      for (let i: number = 0; i < localData.results.length; i++) {
        if (localData.results[i].name.includes(localQuery)) {
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
    } else {
      throw Error('Search query is empty!');
    }

    this.updateFunc();
  };

  updateFunc() {
    this.setState({ stateChanged: this.state.stateChanged + 1 });
  }

  componentDidMount(): void {
    localStorage.setItem('PokemonQueryMariyaShusharina', '');
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
            onChange={this.storeQuery}
          ></input>
          <button onClick={this.filterPokemons}>Search</button>
        </section>
        <ErrorBoundary>
          <Results key={this.state.stateChanged} />
        </ErrorBoundary>
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      </main>
    );
  }
}
