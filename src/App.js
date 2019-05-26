import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import NavBar from "./components/NavBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastedWeather from "./components/ForecastedWeather";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <CurrentWeather />
          <ForecastedWeather />
        </header>
      </div>
    </Provider>
  );
}

export default App;
