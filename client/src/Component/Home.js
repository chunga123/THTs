import React, { Component } from "react";
import $ from "jquery";

import "./css/Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10,
      PostContent: "",
    };
  }
  SubmitPost = () => {
    this.setState({
      PostContent: $("#ContentPost").val(),
    });
    this.props.SubmitPost();
  };
  OnPost = (event) => this.props.OnPost(event);
  componentDidMount() {}
  FakeBtn = () => document.getElementById("real-file").click();
  render() {
    return (
      <div>
        <div className="row">
          <div class="col-3"></div>

          <div class="col-6">
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
              <label for=""></label>
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
            <p id="TextContent">{this.state.PostContent}</p>
            <img src="" id="bannerImg"></img>
          </div>

          <div class="col-3"></div>
        </div>
      </div>
    );
  }
}

export default Home;
