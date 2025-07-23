import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Main from '../components/main/main-component.tsx';

describe('Main component', () => {
  it('renders correctly', () => {
    render(<Main />);
    screen.debug();
  });
});
