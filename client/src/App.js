import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./pages/Signin/index";
import Register from "./pages/Signup/index";
import Dashboard from "./pages/Dashboard/Dashboard";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="landing-image">
          <Route exact path="/" component={SignIn} />
          <Route exact path="/index" component={Register} />
          <Route exact path="/home" component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
