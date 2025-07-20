import { Component } from 'react';

export default class ErrorButton extends Component {
  state = {
    hasError: false,
  };

  throwAnError() {
    console.log(this.state.hasError);
    this.setState({
      hasError: true,
    });
    throw Error('Test Error.');
  }

  render() {
    console.log(this.state.hasError);
    return (
      <div className="error-btn-container" key={this.state.hasError.toString()}>
        <button className="error-btn" onClick={this.throwAnError}>
          Throw an Error
        </button>
      </div>
    );
  }
}
