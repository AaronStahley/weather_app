import {
  FETCH_CURRENT_WEATHER,
  FETCH_FORECASTED_WEATHER,
  UPDATE_DATA
} from "./types";

export const fetchCurrentWeather = (lat, lon) => dispatch => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&mode=JSON&APPID=${
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
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&mode=JSON&APPID=${
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

//Updates the lon and lat for the place selected.
export const updateData = data => dispatch => {
  dispatch({
    type: UPDATE_DATA,
    payload: data
  });
};
