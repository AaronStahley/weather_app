import { FETCH_CURRENT_WEATHER } from "./types";

export const fetchCurrentWeather = () => dispatch => {
  console.log("fetching");

  // OPEN WEATHER MAPS API GOES HERE.
  fetch("")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_CURRENT_WEATHER,
        payload: data
      })
    );
};
