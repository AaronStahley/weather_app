import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class CurrentWeather extends Component {
  render() {
    return <div />;
  }
}

export default connect(null)(CurrentWeather);
