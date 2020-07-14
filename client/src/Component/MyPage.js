import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/Mypage.css";
class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      MyName: "Nguyen The Vinh",
      MyAvatar:
        "https://znews-photo.zadn.vn/w660/Uploaded/bcivtqvp/2020_06_10/yasuo.jpg",
      MyPostCost: 149,
      MyFollowers: 99,
      MyFollowings: 123,
      MyBeginContent:
        "Jane Doe Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️😒😒",
      MyPosts: [
        // Post Arr
        {
          ImageContent: "", // Main Img
          Likes: 56, // Number of Like
          Comments: [
            // arr Comment
            {
              ImageAvatar: "", // I
              CommentContent: "",
            },
          ],
        },
      ],
    };
  }
  ChangeAvatar = () => {};
  componentDidMount() {}
  render() {
    return (
      <div>
        <header>
          <div class="container">
            <div class="profile">
              <div class="profile-image">
                <img
                  src={this.state.MyAvatar}
                  alt=""
                  style={{ width: 200 + "px", height: 200 + "px" }}
                  onClick={this.ChangeAvatar}
                />
              </div>

              <div class="profile-user-settings">
                <h1 class="profile-user-name">{this.state.MyName}</h1>

                <button class="btn profile-edit-btn">Edit Profile</button>

                <button
                  class="btn profile-settings-btn"
                  aria-label="profile settings"
                >
                  <i class="fas fa-cog" aria-hidden="true"></i>
                </button>
              </div>

              <div class="profile-stats">
                <ul>
                  <li>
                    <span class="profile-stat-count">
                      {this.state.MyPostCost}
                    </span>{" "}
                    posts
                  </li>
                  <li>
                    <span class="profile-stat-count">
                      {this.state.MyFollowers}
                    </span>{" "}
                    followers
                  </li>
                  <li>
                    <span class="profile-stat-count">
                      {this.state.MyFollowings}
                    </span>{" "}
                    following
                  </li>
                </ul>
              </div>

              <div class="profile-bio">
                <p>
                  <span class="profile-real-name">Jane Doe</span>{" "}
                  {this.state.MyBeginContent}
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MyPage;
