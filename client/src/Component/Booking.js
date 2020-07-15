import React, { Component } from "react";
import $ from "jquery";
import Booking from "./Booking.json";
import "./css/Booking.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostContent: "",
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-9"></div>
        <div className="col-2"></div>
      </div>
    );
  }
}

export default Home;
