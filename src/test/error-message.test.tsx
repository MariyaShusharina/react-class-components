import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '../components/pages/home-page/results-section/message-components/error-message.tsx';

describe('Error Message component', () => {
  it('renders correctly', () => {
    render(<ErrorMessage />);
    screen.debug();
    const elem = screen.getByText('Error!');
    expect(elem).toBeInTheDocument();
  });
});
