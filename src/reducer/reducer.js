export const weatherReducer = (state, action) => {
    switch (action.type) {
      case 'SET_CITY':
        return { ...state, city: action.payload };
      case 'SET_WEATHER_DATA':
        return { ...state, weatherData: action.payload };
      case 'SET_ERROR':
        return {...state,error:action.payload};
      case 'SET_LAT':
        return {...state,lat:action.payload};
      case 'SET_LON':
        return {...state,lon:action.payload};
      default:
        return state;
    }
};