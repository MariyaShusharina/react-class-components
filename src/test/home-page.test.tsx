import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../components/pages/home-page/home-page-component.tsx';

describe('Home component', () => {
  it('renders correctly', () => {
    render(<Home />);
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
    render(<Home />);

    const storage = localStorage.getItem('PokemonAPIMariyaShusharina');
    expect(storage).toBeDefined();
  });

  it('proceed filtering', () => {
    render(<Home />);

    const mockData = {
      results: [
        {
          name: 'pikachu',
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
        {
          name: 'charizard',
          url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        },
      ],
    };

    localStorage.setItem(
      'PokemonAPIMariyaShusharina',
      JSON.stringify(mockData)
    );
    localStorage.setItem('PokemonQueryMariyaShusharina', 'pikachu');

    const searchBtn = screen.getByText('Search');
    fireEvent.click(searchBtn);

    waitFor(() => {
      expect(localStorage.getItem).toHaveBeenCalled();
    });
  });
});
