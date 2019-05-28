import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECASTED_WEATHER,
  UPDATE_DATA
} from "../actions/types";

const initialState = {
  placeData: {
    name: null,
    lat: 0,
    lon: 0
  },
  currentWeather: {
    name: null,
    temp: null,
    temp_min: null,
    temp_max: null,
    humidity: null,
    pressure: null,
    windSpeed: null,
    conditions: null
  },
  forecastedWeather: {
    name: null,
    days: []
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: {
          name: action.payload.name,
          temp: action.payload.main.temp,
          temp_min: action.payload.main.temp_min,
          temp_max: action.payload.main.temp_max,
          humidity: action.payload.main.humidity,
          pressure: action.payload.main.pressure,
          windSpeed: action.payload.wind.speed,
          conditions: action.payload.weather[0].main
        }
      };
    case FETCH_FORECASTED_WEATHER:
      //Create the forecasted weather objects probably use a loop to fill out object info.
      return {
        ...state,
        forecastedWeather: {
          name: action.payload.city.name,
          days: action.payload.list
        }
      };
    case UPDATE_DATA:
      return {
        ...state,
        placeData: {
          name: action.payload.name,
          lat: action.payload.lat,
          lon: action.payload.lon
        }
      };
    default:
      return state;
  }
}
