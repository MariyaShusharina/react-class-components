interface ErrorBoundaryElement {
  key?: Key;
  children: ReactNode;
  fallback?: JSX.Element;
}

import { Component, type JSX, type Key, type ReactNode } from 'react';
import '../main/results-section/results-section.css';

export default class ErrorBoundary extends Component<ErrorBoundaryElement> {
  /*
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  */
  static state: { hasError: boolean; error: string };

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
        <div>
          <>{this.props.fallback}</>
          <div className="error-message">
            <p>{this.state.error.toString()}</p>
            <p>Something went wrong! </p>
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
