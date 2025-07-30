import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../components/pages/about-page/about-component.tsx';

describe('About component', () => {
  it('renders correctly', () => {
    render(<About />);
    screen.debug();
    const elem = screen.getByRole('heading');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveTextContent('About');
  });
});
