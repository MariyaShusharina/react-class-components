import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/error-boundary/error-boundary.tsx';

describe('ErrorBoundary component', () => {
  const ThrowError = () => {
    throw Error('Error had been thrown!');
  };

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

    const content = screen.getByText('Some Content');
    expect(content).toBeInTheDocument();
  });

  it('throws Error', () => {
    render(
      <ErrorBoundary
        updateMain={() => {
          return;
        }}
      >
        <ThrowError />
        <div>Some Content</div>
      </ErrorBoundary>
    );
    screen.debug();

    const spy = vi.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    const boundaryContent = screen.getByText('Refresh');
    expect(boundaryContent).toBeInTheDocument();

    spy.mockRestore();
  });
});
