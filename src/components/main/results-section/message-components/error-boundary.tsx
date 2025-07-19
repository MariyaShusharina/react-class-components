interface ErrorBoundaryElement {
  fallback: JSX.Element;
  children: JSX.Element;
}

import { Component, type JSX } from 'react';
import '../results-section.css';

export default class ErrorBoundary extends Component<ErrorBoundaryElement> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(/* error: Error */) {
    return this.state.isError;
  }

  render() {
    if (this.state.isError) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}
