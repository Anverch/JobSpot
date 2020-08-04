import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/Pages/Signin/index";
import Register from "./components/Pages/Signup/index";
import Dashboard from "./pages/Dashboard";
import "semantic-ui-css/semantic.min.css";

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
      <div>
        <Switch>
          <Route exact path="/home">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;