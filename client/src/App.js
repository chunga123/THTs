import React, { Component } from "react";
import logo from "./logo.svg";
import "./Component/css/TaskBar.css";
import TaskBar from "./Component/TaskBar";
import Home from "./Component/Home";
import Messages from "./Component/Messages";
import MyPage from "./Component/MyPage";
import io from "socket.io-client";
import SignIn from "./Component/Account/SignIn/SignIn";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data.json";
import $ from "jquery";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TaskBarOpen: false,
      PostFile: null,
      ArrImg: [],
      TextContent: "",
      Users: [],
    };
  }
  readURL = (input) => {
    // document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById("bannerImg").src = e.target.result;
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  stringToHTML = (str) => {
    var dom = document.createElement("div");
    dom.innerHTML = str;
    return dom.childNodes[0];
  };

  componentDidMount = () => {
    this.setState({ Users: data });
    if (this.state.TaskBarOpen == false) $(".TaskA").hide();
  };

  OnPostFile = (e) => this.setState({ PostFile: e.target });
  OnSign = (gmail, pass) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].gmail == gmail && data[i].pass) {
        this.setState({ TaskBarOpen: true });
      }
    }
  };
  OnSubmitPost = () => {
    if (this.state.PostFile && this.state.PostFile.files[0]) {
      //this.readURL(this.state.PostFile);

      console.log(this.state.PostFile);
      let check = this.state.PostFile;
      let check1 = check.outerHTML;
      localStorage.setItem("img", check1);
      let check2 = this.stringToHTML(check1);
      // console.log(check2);

      this.readURL(this.state.PostFile);
    } else alert("CHOOSE YOUR FILE...");
    //if ($("#ContentPost")) $("#TextContent").html($("#ContentPost").val());
  };

  render() {
    if (this.state.TaskBarOpen == true) {
      $(".TaskA").show();
    } else if (this.state.TaskBarOpen == false) $(".TaskA").hide();
    return (
      <BrowserRouter>
        <div>
          <ul className="TaskA">
            <li className="Task" id="fake">
              <Link to="/"></Link>
            </li>

            <li className="Task">
              <Link to="/Home">Home</Link>
            </li>

            <li className="Task">
              <Link to="/Messages">Messages</Link>
            </li>

            <li className="Task">
              <Link to="/MyPage">Your Page</Link>
            </li>

            <h1 id="tittle">Vlance</h1>
          </ul>

          <hr />
          <div className="main-route-place">
            <Route
              exact
              path="/"
              component={() => <SignIn OnSignI={this.OnSign} />}
            />

            <Route path="/MyPage" component={MyPage} />
            <Route
              path="/Home"
              component={() => (
                <Home SubmitPost={this.OnSubmitPost} OnPost={this.OnPostFile} />
              )}
            />
            <Route path="/Messages" component={Messages} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
