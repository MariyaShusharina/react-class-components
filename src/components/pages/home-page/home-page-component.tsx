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

import { useState, useEffect } from 'react';
import ErrorBoundary from '../../error-boundary/error-boundary.tsx';
import Results from './results-section/results-section.tsx';
import SearchSection from './search-section/search-section.tsx';
import './home-page.css';
import ErrorButton from './results-section/error-button/error-button.tsx';

export default function Home() {
  const [stateChanged, changeState] = useState(0);
  const [hasSearchError, setSearchError] = useState(false);
  const [searchError, setSearchErrorMessage] = useState('NoSearchError');

  async function search() {
    const query: string =
      'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';

    const result = await fetch(query);
    const data: JSON = await result.json();

    localStorage.setItem('PokemonAPIMariyaShusharina', JSON.stringify(data));
  }

  const storeQuery = (ev: React.ChangeEvent) => {
    if (ev.target instanceof HTMLInputElement && ev.target.value.trim() != '') {
      const val: string = ev.target.value.trim();

      localStorage.setItem('PokemonQueryMariyaShusharina', val.toString());
    } else {
      localStorage.setItem('PokeNeedsUpdateMariyaShusharina', 'false');
      updateFunc();
    }
  };

  const filterPokemons = async () => {
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
        setSearchError(true);
        setSearchErrorMessage('Search query is empty!');

        if (hasSearchError) {
          console.log(hasSearchError.toString());
          console.log(searchError);
          throw Error(searchError);
        }
      }
    }

    updateFunc();
  };

  const updateFunc = () => {
    changeState(stateChanged + 1);
  };

  useEffect(() => {
    localStorage.setItem('PokemonQueryMariyaShusharina', '');
    search();
  }, []);

  return (
    <main>
      <section className="search-section">
        <ErrorBoundary updateMain={updateFunc}>
          <SearchSection
            filter={filterPokemons}
            storeQuery={(ev) => storeQuery(ev)}
          />
        </ErrorBoundary>
      </section>
      <ErrorBoundary updateMain={updateFunc}>
        <Results state={stateChanged} updateMain={updateFunc} />
      </ErrorBoundary>
      <ErrorBoundary updateMain={updateFunc}>
        <ErrorButton />
      </ErrorBoundary>
    </main>
  );
}
