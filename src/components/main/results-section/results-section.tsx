import NothingMessage from './message-components/nothing-message.tsx';
import './results-section.css';

export default function Results() {
  return (
    <section className="results-section">
      <h2>Results:</h2>
      <div className="results-container">
        <NothingMessage />
      </div>
      <div className="error-btn-container">
        <button className="search-btn">Throw an Error</button>
      </div>
    </section>
  );
}
