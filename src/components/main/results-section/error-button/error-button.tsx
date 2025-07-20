import { Component } from 'react';

export default class ErrorButton extends Component {
  throwAnError() {
    throw Error('Test Error.');
  }

  render() {
    return (
      <div className="error-btn-container">
        <button className="error-btn" onClick={this.throwAnError}>
          Throw an Error
        </button>
      </div>
    );
  }
}
