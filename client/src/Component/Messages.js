import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/Messages.css";
import io from "socket.io-client";
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

    if (this.state.msg) {
      socket.emit("chat message", this.state.msg);

      this.setState({ msg: "" });
    }
  };

  OnTextChange = (e) => {
    if (e.keyCode === 13) {
      // Do something
      alert("qwegqweg");
    }
    this.setState({
      msg: e.target.value,
    });
  };
  componentDidMount() {
    socket.on("chat message", (msg) => {
      let Msgs = this.state.msgs;
      Msgs.push({
        id: msg.id,
        msg: msg.msg,
      });

      this.setState({
        msgs: Msgs,
      });

      console.log(this.state.msgs);
    });
  }
  render() {
    return (
      <div class="form-group">
        <div className="Chat Text">
          {this.state.msgs.map((msg, id) => {
            return (
              <h2 key={id} className="h2">
                {msg.id} : {msg.msg}
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
