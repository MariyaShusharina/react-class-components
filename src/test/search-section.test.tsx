import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchSection from '../components/main/search-section/search-section.tsx';

describe('Search Section component', () => {
  it('renders correctly', () => {
    render(
      <SearchSection
        filter={async () => {
          return;
        }}
        storeQuery={() => {
          return;
        }}
      />
    );
    screen.debug();

    const btn = screen.getByText('Search');
    expect(btn).toBeInTheDocument();

    const searchBox = screen.getByRole('searchbox');
    expect(searchBox).toBeInTheDocument();
  });
});
