import React from "react";
import { Header } from "semantic-ui-react";

const styles = {
  headerColor: {
    float: "left",
    color: "#ff9f29",
    fontFamily: ["Londrina Solid", "cursive"],
    fontSize: 55,
    fontWeight: "bold",
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  headerPosition: {
    position: "absolute",
    top: "calc(50% - 35px)",
    left: "calc(50% - 255px)",
    zIndex: 2,
  },
  spanColor: {
    color: "white",
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
};
const LoginHeader = () => (
  <Header className="headerColor" style={styles.headerColor}>
    <div className="headerPosition" style={styles.headerPosition}>
      Job
      <span className="spanColor " style={styles.spanColor}>
        Spot
      </span>
    </div>
  </Header>
);
export default LoginHeader;
