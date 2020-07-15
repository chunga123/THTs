import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/Messages.css";
import io from "socket.io-client";
import data from "../data.json";
const socket = io.connect("http://localhost:5000");
let Loop = false;
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      id: "",
      msgs: [],
    };
  }
  onMessageSubmit = (e) => {
    Loop = false;
    e.preventDefault();
    let name = localStorage.tooken ? data[localStorage.tooken].name : "Unknow";
    if (this.state.msg) {
      socket.emit("chat message", {
        msg: this.state.msg,
        name: name,
      });

      this.setState({ msg: "" });
    }
  };

  OnTextChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };
  componentDidMount() {
    socket.on("chat message", (msg) => {
      let Msgs = this.state.msgs;
      Msgs.push({
        name: msg.name,
        msg: msg.msg,
      });
      console.log(msg);
      this.setState({
        msgs: Msgs,
      });
    });
  }
  render() {
    return (
      <div class="form-group">
        <div className="Chat Text">
          {this.state.msgs.map((msg, id) => {
            console.log(msg);
            return (
              <h2 key={id} className="h2">
                {msg.name}: {msg.msg}
              </h2>
            );
          })}
        </div>
        <form>
          <input
            placeholder="Send Messages..."
            className="form-control chatInput"
            onChange={this.OnTextChange}
            value={this.state.msg}
          ></input>

          <input
            className="btn btn-light ChatBtn"
            onClick={this.onMessageSubmit}
            type="submit"
            value="submit"
          />
        </form>
        <div className="Message"></div>
      </div>
    );
  }
}

export default Messages;
