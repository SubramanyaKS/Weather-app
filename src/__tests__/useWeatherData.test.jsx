import { render } from '@testing-library/react';
import { WeatherDataContext } from '../context/weatherDataContext';
import { useWeatherData } from '../hook/useWeatherData';
import { act } from 'react-dom/test-utils';

test('useWeatherData hook smoke', async () => {
  // mock global fetch
  const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({ temp: 25 }),
  });

  const mockDispatch = jest.fn();

  const Temp = () => {
    const { fetchWeatherData } = useWeatherData('https://api.test.com');
    
    // trigger the function inside act
    act(() => {
      fetchWeatherData();
    });

    return null;
  };

  render(
    <WeatherDataContext.Provider value={{ dispatch: mockDispatch }}>
      <Temp />
    </WeatherDataContext.Provider>
  );

  // Assertions (minimal smoke check)
  expect(fetchSpy).toHaveBeenCalledTimes(1);
  expect(mockDispatch).toHaveBeenCalled(); // ensures it didn’t crash

  fetchSpy.mockRestore();
});
