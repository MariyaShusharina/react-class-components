import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.tsx';

describe('Nav component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.debug();

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });

  it('has ', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    vi.mock('reacr-router', () => ({
      ...vi.importActual('react-router'),
    }));

    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);

    waitFor(() => {
      const aboutContent = screen.getByText('The App created');
      expect(aboutContent).toBeInTheDocument();
    });

    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);

    waitFor(() => {
      const resultHeading = screen.getByText('Results:');
      expect(resultHeading).toBeInTheDocument();
    });
  });
});
