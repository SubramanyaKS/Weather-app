export const weatherReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return { ...state, city: action.payload };
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload };
      case 'SET_ERROR':
        return {...state, error:action.payload};
      case 'SET_LAT':
        return {...state, latitude:action.payload};
      case 'SET_LON':
        return {...state, longitude:action.payload};
      case 'SET_DARK':
        return {...state, dark:action.payload};
      case 'SET_LIGHT':
        return {...state, dark:action.payload};
      case 'SET_LOADING':
        return {...state, loading:action.payload};
      default:
        return state;
    }
};