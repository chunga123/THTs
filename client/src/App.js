import React, { Component } from "react";
import logo from "./logo.svg";
import "./Component/css/TaskBar.css";
import TaskBar from "./Component/TaskBar";
import Home from "./Component/Home";
import Messages from "./Component/Messages";
import MyPage from "./Component/MyPage";
import io from "socket.io-client";
import Booking from "./Component/Booking";
import "./test";
import SignIn from "./Component/Account/SignIn/SignIn";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data.json";
import $ from "jquery";
let dem = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      TaskBarOpen: false,
      PostFile: null,
      ArrImg: [],
      TextContent: "",
      Users: [],
      like: 0,
    };
  }

  likes = (e) => {
    let id = e.target.id;
    let nowLike = localStorage.Img ? JSON.parse(localStorage.Img) : "-1";

    nowLike[id].like += 1;

    console.log(nowLike);

    localStorage.setItem(
      "Img",
      localStorage.Img ? JSON.stringify(nowLike) : ""
    );
    document.getElementsByClassName("like")[id].innerHTML =
      nowLike[id].like + " 💖";
    //$(".like").html(nowLike[id].like + " 💖");
  };
  cmt = (e) => {
    let value = document.getElementsByClassName("CmtInput")[e].value;
    let text = document.createElement("p");
    let name = localStorage.tooken ? data[localStorage.tooken].name : "unknown";
    text.innerHTML = name + " : " + value;
    text.className = "CmtContents";
    document.getElementsByClassName("HomePost")[e].appendChild(text);
  };
  comment = (e) => {
    let cmt = document.createElement("input");
    let SubCmt = document.createElement("button");

    cmt.className = "CmtInput";
    cmt.placeholder = "Comment...";
    //cmt.id = e.target.id;

    SubCmt.innerHTML = "Comment";
    SubCmt.className = "SubCmt btn btn-light";
    SubCmt.id = e.target.id;

    SubCmt.onclick = () => this.cmt(SubCmt.id);

    document.getElementsByClassName("HomePost")[e.target.id].appendChild(cmt);

    document
      .getElementsByClassName("HomePost")
      [e.target.id].appendChild(SubCmt);
  };
  readURL = (input) => {
    const thisd = this;
    // document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        let arr = thisd.state.ArrImg;
        arr.push({
          img: e.target.result,
          chat: localStorage.NowContent,
          name: localStorage.tooken ? data[localStorage.tooken].name : "Unknow",
          like: 0,
          comment: 0,
        });

        thisd.setState({
          ArrImg: arr,
        });
        console.log(thisd.state.ArrImg);

        localStorage.setItem("Img", JSON.stringify(thisd.state.ArrImg));
        // create elememtn
        JSON.parse(localStorage.getItem("Img")).map((img, id) => {
          let div = document.createElement("div");
          let name = document.createElement("P");
          let text = document.createElement("P");
          let imgd = document.createElement("IMG");
          let like = document.createElement("button");
          let comment = document.createElement("button");

          like.innerHTML = localStorage.Img[id]
            ? JSON.parse(localStorage.Img)[id].like + " 🤍"
            : "0" + " " + "🤍";
          //thisd.setState({ like: img.like });
          div.className = "HomePost";
          comment.innerHTML = "📃";
          like.onclick = thisd.likes;
          comment.onclick = thisd.comment;
          like.id = id;
          comment.id = id;
          like.className = "btn LikeComment like";
          comment.className = "btn LikeComment comment";
          imgd.id = id;
          imgd.className = "bannerImg";
          name.innerHTML = img.name;
          text.innerHTML = img.chat;
          name.className = "TextContent ";
          text.className = "TextContents ";

          document.getElementsByClassName("col-8")[0].appendChild(div);
          document.getElementsByClassName("HomePost")[id].appendChild(name);
          document.getElementsByClassName("HomePost")[id].appendChild(text);
          document.getElementsByClassName("HomePost")[id].appendChild(imgd);
          document.getElementsByClassName("HomePost")[id].appendChild(like);
          document.getElementsByClassName("HomePost")[id].appendChild(comment);
          dem++;
          document.getElementById(id).src = img.img;
        });
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
    if (localStorage.Img)
      this.setState({ ArrImg: JSON.parse(localStorage.Img) });
    this.setState({ Users: data });

    if (localStorage.tooken) this.setState({ TaskBarOpen: true });
    if (this.state.TaskBarOpen == false) $(".TaskA").hide();
  };

  OnPostFile = (e) => this.setState({ PostFile: e.target });
  OnSign = (gmail, pass) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].gmail == gmail && data[i].pass == pass) {
        localStorage.setItem("tooken", i);
        this.setState({ TaskBarOpen: true });
      }
    }
  };
  OnSubmitPost = () => {
    if (this.state.PostFile && this.state.PostFile.files[0]) {
      //this.readURL(this.state.PostFile)
      //console.log(this.state.PostFile);
      this.readURL(this.state.PostFile);
    } else alert("CHOOSE YOUR FILE...");
    if ($("#ContentPost")) {
      localStorage.setItem("NowContent", $("#ContentPost").val());
      this.setState({
        TextContent: $("#ContentPost").val(),
      });
    }
  };
  ggmap = () => {
    window.location = "https://chunga123.github.io/HELLO/hello.html";
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
            {/* <li className="Task">
              <Link to="/Intro">Intro</Link>
            </li> */}
            <li className="Task">
              <Link to="/Home">Home</Link>
            </li>

            <li className="Task">
              <Link to="/Messages">Messages</Link>
            </li>

            <li className="Task">
              <Link to="/MyPage">Your Page</Link>
            </li>

            <li className="Task">
              <Link to="/Booking">Booking</Link>
            </li>
            <li className="Task">
              <Link onClick={this.ggmap}>Find Place</Link>
            </li>

            <h1 id="tittle" className="Task">
              VLANCE
            </h1>
            <div className="InfoUser">
              <img
                id="Ava"
                src={
                  localStorage.tooken ? data[localStorage.tooken].avatar : ""
                }
              ></img>
              <p className="NameUser">
                {localStorage.tooken ? data[localStorage.tooken].name : ""}
              </p>
            </div>
          </ul>

          <hr />
          <div className="main-route-place">
            <Route
              exact
              path="/"
              component={() => <SignIn OnSignI={this.OnSign} />}
            />

            <Route path="/Booking" component={Booking} />
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
