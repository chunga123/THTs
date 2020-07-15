import React, { Component } from "react";
import $ from "jquery";
import data from "../data.json";
import "./css/Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostContent: "",
    };
  }
  SubmitPost = () => {
    this.setState({
      PostContent: $("#ContentPost").val(),
    });
    this.props.SubmitPost();
  };
  OnClickContentPost = () => {};
  OnPost = (event) => this.props.OnPost(event);
  componentDidMount() {
    document.getElementById("ContentPost").placeholder = localStorage.tooken
      ? data[localStorage.tooken].name + ".What are you thinking..."
      : "Sign In ...mark";
  }
  FakeBtn = () => document.getElementById("real-file").click();
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1"></div>
          <div class="col-8">
            <div
              class="wrap-input100 validate-input m-b-36"
              data-validate="Username is required"
            >
              <input
                id="ContentPost"
                class="input100"
                type="text"
                name=""
                placeholder=""
              />
              <span class="focus-input100"></span>
            </div>

            <div class="form-group">
              <input
                type="file"
                class="btn btn-success"
                id="real-file"
                name=""
                placeholder=""
                onChange={this.OnPost}
                hidden="hidden"
              />
              <button type="button" id="custom-button" onClick={this.FakeBtn}>
                CHOOSE A FILE
              </button>
              <button
                type="button"
                name=""
                id=""
                class="btn btn-light PostButton"
                onClick={this.SubmitPost}
              >
                SUBMIT
              </button>
            </div>
            <p className="TextContent">{this.state.PostContent}</p>
          </div>

          <div class="col-3" id="ListUser">
            <ul>
              {data.map((info, id) => {
                return (
                  <li className="InfoList" key={id}>
                    {info.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
