import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error404Page from '../components/pages/error-404-page/error-404-component.tsx';

describe('Error 404 page component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Error404Page />
      </MemoryRouter>
    );
    screen.debug();
    const elem = screen.getByRole('heading');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('Error 404!');
  });

  it('navigates to Home page', () => {
    render(
      <MemoryRouter>
        <Error404Page />
      </MemoryRouter>
    );

    vi.mock('reacr-router', () => ({
      ...vi.importActual('react-router'),
    }));

    const backBtn = screen.getByText('Back to Home page');
    fireEvent.click(backBtn);

    waitFor(() => {
      const resultHeading = screen.getByText('Results:');
      expect(resultHeading).toBeInTheDocument();
    });
  });
});
