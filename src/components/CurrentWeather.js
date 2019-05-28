import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchCurrentWeather } from "../actions/weatherActions";

class CurrentWeather extends Component {
  componentWillMount() {
    this.props.fetchCurrentWeather(
      this.props.locationData.lat,
      this.props.locationData.lon
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locationData !== this.props.locationData) {
      this.props.fetchCurrentWeather(
        nextProps.locationData.lat,
        nextProps.locationData.lon
      );
    }
  }

  render() {
    const data = this.props.currentWeatherData;
    return (
      <div>
        <h1>
          Current Weather Data For <br /> {data.name}
        </h1>
        <hr />
        <p>Temp: {data.temp}º</p>
        <p>Temp_Min: {data.temp_min}º</p>
        <p>Temp_Max: {data.temp_max}º</p>
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
  currentWeatherData: state.currentWeather.currentWeather,
  locationData: state.updateData.placeData
});

export default connect(
  mapStateToProps,
  { fetchCurrentWeather }
)(CurrentWeather);
