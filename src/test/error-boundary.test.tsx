import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/error-boundary/error-boundary.tsx';

describe('ErrorBoundary component', () => {
  it('renders correctly', () => {
    render(
      <ErrorBoundary
        updateMain={() => {
          return;
        }}
      >
        <div>Some Content</div>
      </ErrorBoundary>
    );
    screen.debug();
  });
});
