interface ErrorBoundaryElement {
  children: ReactNode;
}

import { Component, type ReactNode } from 'react';
import ErrorMessage from './error-message.tsx';
import '../results-section.css';
import type { ErrorInfo } from 'react-dom/client';

export default class ErrorBoundary extends Component<ErrorBoundaryElement> {
  state = { isError: false };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return `Error: ${error}/n More Info: ${errorInfo}`;
  }

  static getDerivedStateFromError(/* error: Error */) {
    return { isError: true };
  }

  render() {
    if (this.state.isError) {
      return <ErrorMessage />;
    } else {
      return this.props.children;
    }
  }
}
