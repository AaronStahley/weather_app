import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECASTED_WEATHER
} from "../actions/types";

const initialState = {
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
    day_01: {
      temp: null,
      temp_min: null,
      temp_max: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      conditions: null
    },
    day_02: {
      temp: null,
      temp_min: null,
      temp_max: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      conditions: null
    },
    day_03: {
      temp: null,
      temp_min: null,
      temp_max: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      conditions: null
    },
    day_04: {
      temp: null,
      temp_min: null,
      temp_max: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      conditions: null
    },
    day_05: {
      temp: null,
      temp_min: null,
      temp_max: null,
      humidity: null,
      pressure: null,
      windSpeed: null,
      conditions: null
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER:
      console.log("FETCH_CURRENT_reducer");
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
      console.log("FETCH_FORECASTED_reducer");
      //Create the forecasted weather objects probably use a loop to fill out object info.
      return {
        ...state,
        forecastedWeather: {
          name: action.payload.city.name,
          day_01: null,
          day_02: null,
          day_03: null,
          day_04: null,
          day_05: null
        }
      };
    default:
      return state;
  }
}
