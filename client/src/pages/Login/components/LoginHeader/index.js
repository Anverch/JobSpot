import React from "react";
import { Header } from "semantic-ui-react";

const styles = {
  jobSpot: {
    position: "absolute",
    top: "calc(50% - 35px)",
    left: "calc(50% - 255px)",
    zIndex: 2,
    float: "left",
    color: "#ff9f29",
    fontFamily: ["Londrina Solid", "cursive"],
    fontSize: 55,
    fontWeight: "bold",
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  spanColor: {
    color: "white",
  },
  subHeading: {
    position: "absolute",
    top: "calc(50% - -15px)",
    left: "calc(50% - 255px)",
    zIndex: 2,
    float: "left",
    fontFamily: ["Roboto Slab", "serif"],
    color: "black",
  },
};

export default function LoginHeader() {
  return (
    <Header>
      <div style={styles.jobSpot}>
        Job
        <span style={styles.spanColor}>Spot</span>
      </div>
      <div style={styles.subHeading}>
        <h4>Your job search starts here</h4>
      </div>
    </Header>
  );
}
