import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import SignIn from "./components/Pages/Signin/index";
import Register from "./components/Pages/Signup/index";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/index" component={Register} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;