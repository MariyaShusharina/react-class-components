interface SerachProps {
  filter: () => Promise<void>;
  storeQuery: (ev: React.ChangeEvent<Element>) => void;
}

import { useState, useEffect } from 'react';
import '../home-page.css';

export default function SearchSection(props: SerachProps) {
  const [stateChanged, changeState] = useState(0);

  useEffect(() => {
    if (localStorage.PokemonQueryMariyaShusharina) {
      const localQuery: string = localStorage
        .getItem('PokemonQueryMariyaShusharina')!
        .toString();

      if (localQuery.trim() == '') {
        throw Error('Search query is empty!');
      }
    }
  });

  return (
    <>
      <input
        type="search"
        className="search-field"
        placeholder="Your input..."
        onChange={(ev) => {
          props.storeQuery(ev);
        }}
      ></input>
      <button
        onClick={() => {
          props.filter();
          changeState(stateChanged + 1);
        }}
      >
        Search
      </button>
    </>
  );
}
