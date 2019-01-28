import React, { Component } from "react";

class ContentCard extends Component {
  render() {
    return (
      <div class="content-card">
        <div class="content-wrapper">
          <div class="red-bar" />
          <p class="fund-text">
            <span>Only 3 days left</span> to fund this project
          </p>
          <p class="donor-text">
            Join the 42 other donors who have already supported this project.
            Every dollar helps.
          </p>
          <div class="amount">
            <input type="text" placeholder="$" />
            <button>Give Now</button>
          </div>
          <a href="#">Why give $50?</a>
        </div>
      </div>
    );
  }
}

export default ContentCard;
