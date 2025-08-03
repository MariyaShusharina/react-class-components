import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.tsx';

describe('App component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.debug();
  });
});
