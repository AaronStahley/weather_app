import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchForecastedWeather } from "../actions/weatherActions";

class ForecastedWeather extends Component {
  componentWillMount() {
    this.props.fetchForecastedWeather(35, 139);
  }

  render() {
    const data = this.props.forecastedWeatherData;
    return (
      <div>
        <h1>Forecasted Weather Data</h1>
        <hr />
        <p>Name: {data.name}</p>
      </div>
    );
  }
}

ForecastedWeather.propTypes = {
  fetchForecastedWeather: PropTypes.func.isRequired,
  forecastedWeatherData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forecastedWeatherData: state.forecastedWeather.forecastedWeather
});

export default connect(
  mapStateToProps,
  { fetchForecastedWeather }
)(ForecastedWeather);
