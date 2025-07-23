import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorButton from '../components/main/results-section/error-button/error-button.tsx';

describe('Error Button component', () => {
  it('renders correctly', () => {
    render(<ErrorButton />);
    screen.debug();
    const elem = screen.getByText('Throw an Error');
    expect(elem).toBeDefined();
  });
});
