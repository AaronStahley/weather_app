import { combineReducers } from "redux";

import weatherReducer from "./weatherReducer";

export default combineReducers({
  currentWeather: weatherReducer
});
