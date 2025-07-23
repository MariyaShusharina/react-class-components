import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from '../components/main/main-component.tsx';

describe('Main component', () => {
  it('renders correctly', () => {
    render(<Main />);
    screen.debug();

    const btn = screen.getByText('Search');
    expect(btn).toBeInTheDocument();
    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();

    const results = screen.getByText('Results:');
    expect(results).toBeInTheDocument();

    const nothingMessage = screen.getByText('Nothing to see here yet...');
    expect(nothingMessage).toBeInTheDocument();

    const errorBtn = screen.getByText('Throw an Error');
    expect(errorBtn).toBeInTheDocument();
  });

  it('has set localStorage', () => {
    render(<Main />);

    const storage = localStorage.getItem('PokemonAPIMariyaShusharina');
    expect(storage).toBeDefined();
  });
});
