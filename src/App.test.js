import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  // App shows 'Weather App' in multiple places; assert at least one occurrence
  const matches = screen.getAllByText(/weather app/i);
  expect(matches.length).toBeGreaterThan(0);
});
