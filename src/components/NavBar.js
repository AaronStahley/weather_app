import React, { Component } from "react";
import Script from "react-load-script";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateData } from "../actions/weatherActions";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      lat: null,
      lon: null
    };
  }

  onSubmit = e => {
    e.preventDefault();
  };

  handleScriptLoad = () => {
    var options = { types: ["(cities)"] };

    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autoComplete"),
      options
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    if (address) {
      //Update store with lon lat and name info.
      this.setState(
        {
          name: addressObject.address_components[0].long_name,
          lon: addressObject.geometry.location.lng(),
          lat: addressObject.geometry.location.lat()
        },
        () => {
          const updatedData = {
            name: this.state.name,
            lat: this.state.lat,
            lon: this.state.lon
          };

          this.props.updateData(updatedData);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <br />
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GOOGLEPLACES_API
          }&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <form onSubmit={this.onSubmit}>
          <label>Search: </label>
          <input id="autoComplete" type="text" name="cityName" />
        </form>
        <br />
      </div>
    );
  }
}

NavBar.propTypes = {
  updateData: PropTypes.func.isRequired
};

export default connect(
  null,
  { updateData }
)(NavBar);
