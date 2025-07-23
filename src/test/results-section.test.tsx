import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Results from '../components/main/results-section/results-section.tsx';

describe('Results component', () => {
  it('renders correctly', () => {
    render(
      <Results
        updateMain={() => {
          return;
        }}
        key={1}
      />
    );
    screen.debug();
    const elem = screen.getByText('Results:');
    expect(elem).toBeDefined();
  });
});
