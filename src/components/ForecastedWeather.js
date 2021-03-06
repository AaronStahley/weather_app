import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchForecastedWeather } from "../actions/weatherActions";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ForecastedWeather extends Component {
  componentWillMount() {
    this.props.fetchForecastedWeather(
      this.props.locationData.lat,
      this.props.locationData.lon
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locationData !== this.props.locationData) {
      this.props.fetchForecastedWeather(
        nextProps.locationData.lat,
        nextProps.locationData.lon
      );
    }
  }

  formatDate = string => {
    var date = new Date(string);
    switch (date.getDay()) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      default:
        return null;
    }
  };

  render() {
    //Filters data to 5 days of the week.
    const daysArray = this.props.forecastedWeatherData.days.filter(
      (element, index) => {
        return index % 8 === 0;
      }
    );

    const daysData = daysArray.map(data => (
      <div key={data.dt_txt}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="name">
              {this.formatDate(data.dt_txt)}
              &nbsp; &nbsp; &nbsp; &nbsp;
              {data.main.temp}º
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Temp: {data.main.temp}º<br />
              Conditions: {data.weather[0].main}
              <br />
              Conditions Desc: {data.weather[0].description}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />

        {/* <hr />
        <h4>Date: {this.formatDate(data.dt_txt)}</h4>
        <p>Temp: {data.main.temp}º</p>
        <p>Conditions: {data.weather[0].main}</p>
        <p>Conditions Desc: {data.weather[0].description}</p> */}
      </div>
    ));

    return (
      <div>
        <h1>
          Forecasted Weather Data For <br />
          {this.props.forecastedWeatherData.name}
        </h1>
        {daysData}
      </div>
    );
  }
}

ForecastedWeather.propTypes = {
  fetchForecastedWeather: PropTypes.func.isRequired,
  forecastedWeatherData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  forecastedWeatherData: state.forecastedWeather.forecastedWeather,
  locationData: state.updateData.placeData
});

export default connect(
  mapStateToProps,
  { fetchForecastedWeather }
)(ForecastedWeather);
