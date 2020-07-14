import React, { Component } from "react";
import "./css/TaskBar.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class TaskBar extends Component {
  constructor() {
    super();
    this.state = { speed: 10 };
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h2 className="logo">Vlance</h2>

            <nav>
              <ul>
                <li>
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="#">Messages</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default TaskBar;
