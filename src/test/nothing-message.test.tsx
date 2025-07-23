import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NothingMessage from '../components/main/results-section/message-components/nothing-message.tsx';

describe('NothingMessage component', () => {
  it('renders correctly', () => {
    render(<NothingMessage />);
    screen.debug();
    const elem = screen.getByRole('paragraph');
    expect(elem).toBeDefined();
  });
});
