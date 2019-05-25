import { FETCH_CURRENT_WEATHER } from "../actions/types";

const initialState = {
  currentWeather: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER:
      console.log("reducer");
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
