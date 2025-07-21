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
  hasResultError: boolean;
  resultError: string;
  hasTestError: boolean;
  testError: string;
}

import { Component /* , type ReactNode */ } from 'react';
import ErrorBoundary from '../error-boundary/error-boundary.tsx';
import Results from './results-section/results-section.tsx';
import './main-component.css';

export default class Main extends Component {
  state: State = {
    stateChanged: 0,
    hasSearchError: false,
    searchError: 'NoSearchError',
    hasResultError: false,
    resultError: 'NoResultError',
    hasTestError: false,
    testError: 'NoTestError',
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
      // this.state.searchError = 'Search query is empty!';
      // throw Error('Search query is empty!');
    }

    this.updateFunc();
  };

  updateFunc() {
    this.setState({
      stateChanged: this.state.stateChanged + 1,
    });
  }

  throwAnError = () => {
    this.setState({
      hasTestError: true,
      testError: 'Test error',
    });

    if (this.state.hasTestError) {
      console.log(this.state.hasTestError.toString());
      console.log(this.state.testError);
      throw Error(this.state.testError);
    }
  };

  componentDidMount(): void {
    localStorage.setItem('PokemonQueryMariyaShusharina', '');
    this.search();
  }

  render() {
    return (
      <main>
        <section className="search-section">
          <ErrorBoundary
            key={this.state.searchError}
            fallback={
              <>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Your input..."
                  onChange={this.storeQuery}
                ></input>
                <button onClick={this.filterPokemons}>Search</button>
              </>
            }
          >
            <input
              type="search"
              className="search-field"
              placeholder="Your input..."
              onChange={this.storeQuery}
            ></input>
            <button onClick={this.filterPokemons}>Search</button>
          </ErrorBoundary>
        </section>
        <ErrorBoundary key={this.state.resultError}>
          <Results key={this.state.stateChanged} />
        </ErrorBoundary>
        <ErrorBoundary key={this.state.testError}>
          <div className="error-btn-container">
            <button className="error-btn" onClick={this.throwAnError}>
              Throw an Error
            </button>
          </div>
        </ErrorBoundary>
      </main>
    );
  }
}
