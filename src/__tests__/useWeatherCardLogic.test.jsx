import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WeatherDataContext } from '../context/weatherDataContext';
import { useWeatherCardLogic } from '../hook/useWeatherCardLogic';

// Small test component that exposes hook values for assertions
const TestComponent = ({ data }) => {
  const { refresh, convertTemp, farenheit, background } = useWeatherCardLogic(data);
  return (
    <div>
      <span data-testid="bg">{background}</span>
      <span data-testid="unit">{farenheit ? 'F' : 'C'}</span>
      <button onClick={convertTemp}>toggle</button>
      <button onClick={refresh}>refresh</button>
    </div>
  );
};

test('useWeatherCardLogic toggles temperature and sets background', () => {
  const sampleData = { weather: [{ main: 'Clear' }], main: { temp: 25 } };
  const state = { dark: false };

  render(
    <WeatherDataContext.Provider value={{ state }}>
      <TestComponent data={sampleData} state={state} />
    </WeatherDataContext.Provider>
  );

  const unit = screen.getByTestId('unit');
  expect(unit).toHaveTextContent('C');

  fireEvent.click(screen.getByText('toggle'));
  expect(unit).toHaveTextContent('F');
});
