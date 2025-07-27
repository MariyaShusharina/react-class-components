interface ResultsProps {
  state: number;
  updateMain: () => void;
}

interface Card {
  id: number;
  title: string;
  source: string;
}

import { type JSX, useState, useEffect } from 'react';
import NothingMessage from './message-components/nothing-message.tsx';
import './results-section.css';

export default function Results(props: ResultsProps) {
  const [stateChanged /*, changeState*/] = useState(0);

  let cards: Card[] = [];

  useEffect(() => {
    if (stateChanged !== 0) {
      localStorage.setItem(
        'PokeNeedsUpdateMariyaShusharina',
        JSON.stringify('false')
      );
    }
  }, [stateChanged]);

  let shouldUpdate: boolean = !!localStorage.PokeNeedsUpdateMariyaShusharina;

  let list: JSX.Element[] | undefined = undefined;

  if (localStorage.PokeResultMariyaShusharina) {
    cards = JSON.parse(
      localStorage.getItem('PokeResultMariyaShusharina') as string
    );

    if (cards.length > 0) {
      list = cards.map((item) => {
        return (
          <div key={item.id} className="card">
            <p className="card-title">{item.title}</p>
            <img
              src={item.source}
              alt={item.title}
              className="pokemon-pic"
            ></img>
          </div>
        );
      });

      shouldUpdate = true;
    } else {
      localStorage.setItem('PokeNeedsUpdateMariyaShusharina', 'false');
      props.updateMain();
      throw Error('No pokemons found! Try another name and refresh!');
    }
  } else {
    shouldUpdate = true;
  }

  return (
    <section className="results-section">
      <h2>Results:</h2>
      <div className="results-container">
        {shouldUpdate && cards.length > 0 ? (
          <div className="cards-container">{list}</div>
        ) : (
          <NothingMessage />
        )}
      </div>
    </section>
  );
}
