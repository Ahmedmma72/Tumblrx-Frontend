import React, { Component } from "react";
import styles from "../Dashboard.module.css";
import axios from "axios";
let checkboxStates = [false, false, false, false];
class Preferences extends Component {

    
  checkBoxClick = (event) => {
    console.log("i am in ");
    let boxes = document.querySelectorAll(".preferences input");
    console.log(boxes);
    let sentData;
    boxes.forEach((element, index) => {
      if (event.target === element) {
        checkboxStates[index] = !checkboxStates[index];
      }
    });
    if (event.target === boxes[0]) {
      console.log("i am in 111 ");
      sentData = {
        bestStuffFirst: checkboxStates[0],
      };
    } else if (event.target === boxes[1]) {
      console.log("i am in 2222");
      sentData = {
        includeStuffInorbit: checkboxStates[1],
      };
    } else if (event.target === boxes[2]) {
      sentData = {
        EnableColorizedTags: checkboxStates[2],
      };
    } else {
      sentData = {
        includeFollowedTagPosts: checkboxStates[3],
      };
    }

    this.props.sendData(sentData);
  };
  componentDidMount = () => {
    axios
      .get("http://localhost:3000/users/1")
      .then((response) => {
        let boxes =  document.querySelectorAll(".preferences input");
        boxes[0].checked =
          response.data.bestStuffFirst;
        checkboxStates[0] = response.data.bestStuffFirst;
        boxes[1].checked =
          response.data.includeStuffInorbit;
        checkboxStates[1] = response.data.includeStuffInorbit;
        boxes[2].checked =
          response.data.EnableColorizedTags;
        checkboxStates[2] = response.data.EnableColorizedTags;
        boxes[3].checked =
          response.data.includeFollowedTagPosts;
        checkboxStates[3] = response.data.includeFollowedTagPosts;
      })
      .catch((err) => {});
  };
  render() {
    return (
      <>
        <div className={`${styles["section"]} preferences`}>
          <div className={styles["title"]}>Preferences</div>
          <div className={styles["section-form"]}>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Best Stuff First
                </div>
                <div className={styles["user-message"]}>
                  This switch puts stuff you'll like at the top of your dash.
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Include stuff in your orbit
                </div>
                <div className={styles["user-message"]}>
                  Posts that your favorite people liked.
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Enable colorized tags
                </div>
                <div className={styles["user-message"]}>
                  Colorize matching tags on the dashboard. Colorized tags add a
                  nice touch to your dashboard but they might be harder to read.
                </div>
              </div>
            </div>

            <div style={{ display: "flex", marginBottom: "30px" }}>
              <input
                type="checkbox"
                style={{ marginTop: "6px", marginRight: "6px" }}
                onClick={this.checkBoxClick}
              />
              <div className={styles["description"]}>
                <div className={styles["section-message"]}>
                  Include followed tag posts
                </div>
                <div className={styles["user-message"]}>
                  Posts from the tags you follow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Preferences;