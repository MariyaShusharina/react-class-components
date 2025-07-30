import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ErrorButton from '../components/pages/home-page/results-section/error-button/error-button.tsx';
import ErrorBoundary from '../components/error-boundary/error-boundary.tsx';

describe('Error Button component', () => {
  it('renders correctly', () => {
    render(
      <ErrorBoundary
        updateMain={() => {
          return;
        }}
      >
        <ErrorButton />
      </ErrorBoundary>
    );
    screen.debug();
    const elem = screen.getByText('Throw an Error');
    expect(elem).toBeInTheDocument();
  });

  it('Boundary works with coded error', async () => {
    const ThrowError = () => {
      throw Error('Error had been thrown!');
    };

    render(
      <ErrorBoundary
        updateMain={() => {
          return;
        }}
      >
        <ThrowError />
        <ErrorButton />
      </ErrorBoundary>
    );

    const spy = vi.spyOn(console, 'error');
    spy.mockImplementation(() => {});

    const boundaryContent = screen.getByText('Refresh');
    expect(boundaryContent).toBeInTheDocument();

    spy.mockRestore();
  });

  it('Boundary works with Button error', async () => {
    render(
      <ErrorBoundary
        updateMain={() => {
          return;
        }}
      >
        <ErrorButton />
      </ErrorBoundary>
    );

    const testErrorBtn = screen.getByText('Throw an Error');
    fireEvent.click(testErrorBtn);

    waitFor(() => {
      const boundaryContent = screen.getByText('Refresh');
      expect(boundaryContent).toBeInTheDocument();
    });
  });
});
