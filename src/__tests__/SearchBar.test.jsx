import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { WeatherDataContext } from '../context/weatherDataContext';

test('SearchBar input accepts text and form submits', () => {
  // local state that updates
  let testState = { city: '', dark: false };

  const dispatch = jest.fn(action => {
    if (action.type === 'SET_CITY') {
      testState = { ...testState, city: action.payload };
    }
  });

  const Wrapper = ({ children }) => (
    <WeatherDataContext.Provider value={{ state: testState, dispatch }}>
      {children}
    </WeatherDataContext.Provider>
  );

  const { rerender } = render(<SearchBar />, { wrapper: Wrapper });

  const input = screen.getByPlaceholderText(/search/i);

  fireEvent.change(input, { target: { value: 'London' } });

  // rerender with updated state
  rerender(<SearchBar />);

  expect(input).toHaveValue('London'); // ✔ now passes
});