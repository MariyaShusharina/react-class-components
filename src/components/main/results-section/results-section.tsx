interface Card {
  id: number;
  title: string;
  source: string;
}

import { Component, type JSX } from 'react';
import NothingMessage from './message-components/nothing-message.tsx';
import './results-section.css';

export default class Results extends Component {
  cards: Card[] = [];

  async throwAnError() {
    const query: string = 'https://pokeapi.co/api/v2/pokemon/error';

    const result = await fetch(query);
    const errorData = await result;

    console.log(errorData);
  }

  render() {
    let shouldUpdate = localStorage.PokeNeedsUpdateMariyaShusharina;

    let list: JSX.Element[] | undefined = undefined;

    if (localStorage.PokeResultMariyaShusharina) {
      this.cards = JSON.parse(localStorage.PokeResultMariyaShusharina);

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
    } else {
      shouldUpdate = false;
    }

    return (
      <section className="results-section">
        <h2>Results:</h2>
        <div className="results-container">
          {shouldUpdate ? (
            <div className="cards-container">{list}</div>
          ) : (
            <NothingMessage />
          )}
        </div>
        <div className="error-btn-container">
          <button className="error-btn" onClick={this.throwAnError}>
            Throw an Error
          </button>
        </div>
      </section>
    );
  }
}
