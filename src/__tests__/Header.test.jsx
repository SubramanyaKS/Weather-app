import React from 'react';
import { render, screen} from '@testing-library/react';
import Header from '../components/Header';
import { WeatherDataContext } from '../context/weatherDataContext';

test('Header renders brand and toggle exists', () => {
  const state = { dark: false };
  render(
    <WeatherDataContext.Provider value={{ state }}>
      <Header />
    </WeatherDataContext.Provider>
  );

  expect(screen.getByText(/weather app/i)).toBeInTheDocument();

  // Toggle is rendered as role switch by our mock; ensure it exists
  const toggle = screen.getByRole('switch');
  expect(toggle).toBeInTheDocument();
});
