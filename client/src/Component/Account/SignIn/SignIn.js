import React, { Component } from "react";
import "./css/main.css";
import "./css/util.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery";
import data from "../../../data.json";
class SignIn extends Component {
  LoginButtons = () => {
    //if(this.props.TaskBarOpen())$(".TaskA").show();
  };

  constructor(props) {
    super(props);
    this.state = {
      gmail: "",
      pass: "",
      showNoti: null,
    };
  }
  OnSignIn = (e) => {
    e.preventDefault();
    this.props.OnSignI(this.state.gmail, this.state.pass);
  };
  componentDidMount() {
    $("#Success").hide();
    $("#Danger").hide();
  }
  getData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    //console.log(this.state.gmail);
    //console.log(this.state.pass);
    if (this.state.showNoti == true) $("#Success").show(1000);
    else if (this.state.showNoti == false) $("#Danger").show(1000);
    return (
      <div>
        <div class="limiter">
          <div class="container-login100">
            <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
              <form class="login100-form validate-form flex-sb flex-w">
                <span class="login100-form-title p-b-32">Account Login</span>

                <span class="txt1 p-b-11">Username</span>
                <div
                  class="wrap-input100 validate-input m-b-36"
                  data-validate="Username is required"
                >
                  <input
                    id="gmail"
                    class="input100"
                    type="gmail"
                    name="gmail"
                    // value={this.state.gmail}
                    onChange={this.getData}
                  />
                  <span class="focus-input100"></span>
                </div>

                <span class="txt1 p-b-11">Password</span>
                <div
                  class="wrap-input100 validate-input m-b-12"
                  data-validate="Password is required"
                >
                  <span class="btn-show-pass">
                    <i class="fa fa-eye"></i>
                  </span>
                  <input
                    id="pass"
                    class="input100"
                    type="password"
                    name="pass"
                    //value={this.state.pass}
                    onChange={this.getData}
                  />
                  <span class="focus-input100"></span>
                </div>

                <div class="flex-sb-m w-full p-b-48">
                  <div class="contact100-form-checkbox">
                    <input
                      class="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label class="label-checkbox100" for="ckb1">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <a href="#" class="txt3">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div class="container-login100-form-btn">
                  <button
                    class="login100-form-btn LoginButton"
                    onClick={this.OnSignIn}
                  >
                    Login
                  </button>
                  <button class="login100-form-btn">Don't Have Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div id="dropDownSelect1"></div>

        <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="vendor/animsition/js/animsition.min.js"></script>
        <script src="vendor/bootstrap/js/popper.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="vendor/select2/select2.min.js"></script>
        <script src="vendor/daterangepicker/moment.min.js"></script>
        <script src="vendor/daterangepicker/daterangepicker.js"></script>
        <script src="vendor/countdowntime/countdowntime.js"></script>
        <script src="js/main.js"></script>
      </div>
    );
  }
}

$(".LoginButton").click(function () {
  $(".LoginButton").show();
  alert("hello");
});

export default SignIn;
