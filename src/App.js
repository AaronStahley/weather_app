import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  //Calling api keys from .env file.
  console.log(process.env.REACT_APP_OPENWEATHERMAPS_API);
  console.log(process.env.REACT_APP_GOOGLEPLACES_API);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header" />
      </div>
    </Provider>
  );
}

export default App;
