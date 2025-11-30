import React from 'react';
import { render, screen } from '@testing-library/react';
import MiniCard from '../components/WeatherMiniCard';
import { WeatherDataContext } from '../context/weatherDataContext';

describe('WeatherMiniCard', () => {
  test('renders icon, text and unit when provided', () => {
    const state = { dark: false };
    render(
      <WeatherDataContext.Provider value={{ state }}>
        <MiniCard icon={null} text="Maximum:" cdata={30} unit="°C" />
      </WeatherDataContext.Provider>
    );
    expect(screen.getByText(/Maximum:/i)).toBeInTheDocument();
    expect(screen.getByText(/30/)).toBeInTheDocument();
    expect(screen.getByText(/°C/)).toBeInTheDocument();
  });
});
