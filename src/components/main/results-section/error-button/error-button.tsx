interface SmallState {
  stateChanged: number;
}

import { Component } from 'react';
import '../../main-component.css';

export default class ErrorButton extends Component {
  state: SmallState = {
    stateChanged: 0,
  };

  componentDidUpdate(): void {
    if (this.state.stateChanged !== 0) {
      this.setState({ stateChanged: 0 });
      throw Error('Test Error!');
    }
  }

  render() {
    return (
      <div className="error-btn-container">
        <button
          className="error-btn"
          onClick={() => {
            this.setState({ stateChanged: this.state.stateChanged + 1 });
          }}
        >
          Throw an Error
        </button>
      </div>
    );
  }
}
