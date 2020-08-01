import React from "react";
import { BrowserRouter as Router, Route } from "React-router-dom";
import { Switch } from "react-router";
import SignIn from "./components/Pages/Signin/index";
import SignUp from "./components/Pages/Signup/index";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;