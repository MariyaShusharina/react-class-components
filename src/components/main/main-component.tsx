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

interface State {
  stateChanged: number;
  hasSearchError: boolean;
  searchError: string;
}

import { Component } from 'react';
import ErrorBoundary from '../error-boundary/error-boundary.tsx';
import Results from './results-section/results-section.tsx';
import SearchSection from './search-section/search-section.tsx';
import './main-component.css';
import ErrorButton from './results-section/error-button/error-button.tsx';

export default class Main extends Component {
  state: State = {
    stateChanged: 0,
    hasSearchError: false,
    searchError: 'NoSearchError',
  };

  async search() {
    const query: string =
      'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

    const result = await fetch(query);
    const data: JSON = await result.json();

    localStorage.setItem('PokemonAPIMariyaShusharina', JSON.stringify(data));
  }

  storeQuery = (ev: React.ChangeEvent) => {
    if (ev.target instanceof HTMLInputElement && ev.target.value.trim() != '') {
      const val: string = ev.target.value.trim();

      localStorage.setItem('PokemonQueryMariyaShusharina', val.toString());
    } else {
      localStorage.setItem('PokeNeedsUpdateMariyaShusharina', 'false');
      this.updateFunc();
    }
  };

  filterPokemons = async () => {
    const localData: DataPokemons = JSON.parse(
      localStorage.getItem('PokemonAPIMariyaShusharina') as string
    );

    if (localStorage.PokemonQueryMariyaShusharina) {
      const localQuery: string = localStorage.getItem(
        'PokemonQueryMariyaShusharina'
      ) as string;

      if (localQuery.trim() !== '') {
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
        this.setState({
          hasSearchError: true,
          searchError: 'Search query is empty!',
        });

        if (this.state.hasSearchError) {
          console.log(this.state.hasSearchError.toString());
          console.log(this.state.searchError);
          throw Error(this.state.searchError);
        }
      }
    }

    this.updateFunc();
  };

  updateFunc = () => {
    this.setState({
      stateChanged: this.state.stateChanged + 1,
    });
  };

  componentDidMount(): void {
    localStorage.setItem('PokemonQueryMariyaShusharina', '');
    this.search();
  }

  render() {
    return (
      <main>
        <section className="search-section">
          <ErrorBoundary updateMain={this.updateFunc}>
            <SearchSection
              filter={this.filterPokemons}
              storeQuery={(ev) => this.storeQuery(ev)}
            />
          </ErrorBoundary>
        </section>
        <ErrorBoundary updateMain={this.updateFunc}>
          <Results
            state={this.state.stateChanged}
            updateMain={this.updateFunc}
          />
        </ErrorBoundary>
        <ErrorBoundary updateMain={this.updateFunc}>
          <ErrorButton />
        </ErrorBoundary>
      </main>
    );
  }
}
