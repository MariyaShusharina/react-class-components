import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/header/header.tsx';

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    screen.debug();
    const elem = screen.getByRole('heading');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('Search Pokemon!');
  });
});
