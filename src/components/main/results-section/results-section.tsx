interface Card {
  id: number;
  title: string;
  source: string;
}

import { Component } from 'react';
import NothingMessage from './message-components/nothing-message.tsx';
import './results-section.css';

export default class Results extends Component {
  cards: Card[] = JSON.parse(localStorage.PokeResultMariyaShusharina);

  renderCard() {
    return (
      <div className="card">
        <div className="card-title">{this.cards[0].title}</div>
        <img
          src={this.cards[0].source}
          alt={this.cards[0].title}
          className="pokemon-pic"
        ></img>
      </div>
    );
  }

  render() {
    const list = this.cards.map((item) => {
      return (
        <div key={item.id} className="card">
          <p className="card-title">{item.title}</p>
          <img src={item.source} alt={item.title} className="pokemon-pic"></img>
        </div>
      );
    });

    const shouldUpdate = localStorage.PokeNeedsUpdateMariyaShusharina;

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
          <button className="error-btn">Throw an Error</button>
        </div>
      </section>
    );
  }
}
