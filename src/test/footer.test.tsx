import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/footer.tsx';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);
    screen.debug();
    const year = screen.getByText('2025');
    expect(year).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty('href', 'https://github.com/MariyaShusharina/');
    expect(link).toHaveProperty('rel', 'noreferrer');
  });
});
