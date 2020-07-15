import React, { Component } from "react";
import $ from "jquery";
import Bookings from "./Booking.json";
import "./css/Booking.css";
class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostContent: "",
    };
  }
  OnBooking = (e) => {
    console.log(e.target.id);
  };
  render() {
    return (
      <div className="row">
        <div className="col-9 AllBook">
          {Bookings.map((book, id) => {
            return (
              <img
                key={id}
                id={id}
                src={book.src}
                className=""
                onClick={this.OnBooking}
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Booking;
