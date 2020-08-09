import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin/index";
import Register from "./pages/Signup/index";
import Dashboard from "./pages/Dashboard/Dashboard";
import JobsView from "./pages/JobsView/JobsView";
import JobDetail from "./pages/JobDetail/JobDetail";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/index">
            <Register />
          </Route>
          <Route exact path="/home">
            <Dashboard />
          </Route>
          <Route exact path="/view">
            <JobsView />
          </Route>
          <Route path="/job/">
            <JobDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
