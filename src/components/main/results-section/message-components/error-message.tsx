import { Component } from 'react';
import '../results-section.css';

export default class ErrorMessage extends Component {
  render() {
    return (
      <div className="error-message">
        <p>Error!</p>
      </div>
    );
  }
}
