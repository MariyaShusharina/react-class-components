interface ErrorBoundaryElement {
  children: ReactNode;
}

import { Component, type ReactNode } from 'react';
import '../results-section.css';

export default class ErrorBoundary extends Component<ErrorBoundaryElement> {
  /*
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  */
  state = {
    hasError: false,
    error: '',
  };

  static getDerivedStateFromError(error: Error) {
    console.log(`getDerivedStateFromError: ${error}`);
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error) {
    console.log(`componentDidCatch: ${error}`);
    return {
      hasError: true,
      error: error,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <p>{this.state.error.toString()}</p>
          <p>Something went wrong! </p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
