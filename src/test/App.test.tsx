import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App.tsx';

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />);
    screen.debug();
  });
});
