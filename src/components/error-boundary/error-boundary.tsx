interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
}

interface ErrorBoundaryElement {
  key?: Key;
  children: ReactNode;
  fallback?: JSX.Element;
  updateMain: () => void;
}

import { Component, type JSX, type Key, type ReactNode } from 'react';
import './error-boundary.css';

export default class ErrorBoundary extends Component<
  ErrorBoundaryElement,
  ErrorBoundaryState
> {
  state = {
    hasError: false,
    error: 'Something went wrong!',
  };

  static getDerivedStateFromError(error: Error) {
    console.log(`getDerivedStateFromError: ${error}`);
    return {
      hasError: true,
      error: error.toString(),
    };
  }

  componentDidCatch(error: Error) {
    console.log(`componentDidCatch: ${error}`);
    return {
      hasError: true,
      error: error.toString(),
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <>{this.props.fallback}</>
          <div className="error-message">
            <p>{this.state.error}</p>
            <button
              className="try-again-btn"
              onClick={() => {
                this.setState({ hasError: false });
                this.props.updateMain();
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
