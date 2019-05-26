import { FETCH_CURRENT_WEATHER, FETCH_FORECASTED_WEATHER } from "./types";

export const fetchCurrentWeather = (lat, lon) => dispatch => {
  console.log("fetching current weather data");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&mode=JSON&APPID=${
      process.env.REACT_APP_OPENWEATHERMAPS_API
    }`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CURRENT_WEATHER,
        payload: data
      })
    );
};

export const fetchForecastedWeather = (lat, lon) => dispatch => {
  console.log("fetching forecasted weather data");
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&mode=JSON&APPID=${
      process.env.REACT_APP_OPENWEATHERMAPS_API
    }`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_FORECASTED_WEATHER,
        payload: data
      })
    );
};
