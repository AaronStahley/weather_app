import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCurrentWeather } from "../actions/weatherActions";

class CurrentWeather extends Component {
  componentWillMount() {
    this.props.fetchCurrentWeather(33.4483, -112.074);
  }

  render() {
    const data = this.props.currentWeatherData;
    return (
      <div>
        <h1>Current Weather Data</h1>
        <hr />
        <p>Name: {data.name}</p>
        <p>Temp: {data.temp}</p>
        <p>Temp_Min: {data.temp_min}</p>
        <p>Temp_Max: {data.temp_max}</p>
        <p>Humidity: {data.humidity}</p>
        <p>Conditions: {data.conditions}</p>
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  fetchCurrentWeather: PropTypes.func.isRequired,
  currentWeatherData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  currentWeatherData: state.currentWeather.currentWeather
});

export default connect(
  mapStateToProps,
  { fetchCurrentWeather }
)(CurrentWeather);
