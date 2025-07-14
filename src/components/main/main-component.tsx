// import { useState, useEffect } from 'react';
import Results from './results-section/results-section.tsx';
import './main-component.css';

export default function Main() {
  /*
  const search = async (ev: MouseEvent) => {
    if(ev.target instanceof HTMLInputElement) {
      const val: string = ev.target.value;
    };
  };
  */
  const search = () => {};
  return (
    <main>
      <section className="search-section">
        <input
          type="search"
          className="search-field"
          placeholder="Your input..."
        ></input>
        <button className="search-btn" onClick={search}>
          Search
        </button>
      </section>
      <Results />
    </main>
  );
}
