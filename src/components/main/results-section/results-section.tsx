interface SmallState {
  stateChanged: number;
}

interface ResultsProps {
  state: number;
  updateMain: () => void;
}

interface Card {
  id: number;
  title: string;
  source: string;
}

import { Component, type JSX } from 'react';
import NothingMessage from './message-components/nothing-message.tsx';
import './results-section.css';

export default class Results extends Component<ResultsProps, SmallState> {
  state = {
    stateChanged: 0,
  };

  cards: Card[] = [];

  localQuery: string = localStorage.getItem(
    'PokemonQueryMariyaShusharina'
  ) as string;

  componentDidUpdate(): void {
    localStorage.setItem(
      'PokeNeedsUpdateMariyaShusharina',
      JSON.stringify('false')
    );
  }

  render() {
    let shouldUpdate: boolean = !!localStorage.PokeNeedsUpdateMariyaShusharina;

    let list: JSX.Element[] | undefined = undefined;

    if (localStorage.PokeResultMariyaShusharina) {
      this.cards = JSON.parse(
        localStorage.getItem('PokeResultMariyaShusharina') as string
      );

      if (this.cards.length > 0) {
        list = this.cards.map((item) => {
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
        this.props.updateMain();
        throw Error('No pokemons found! Try another name and refresh!');
      }
    } else {
      shouldUpdate = true;
    }

    return (
      <section className="results-section">
        <h2>Results:</h2>
        <div className="results-container">
          {shouldUpdate && this.cards.length > 0 ? (
            <div className="cards-container">{list}</div>
          ) : (
            <NothingMessage />
          )}
        </div>
      </section>
    );
  }
}
