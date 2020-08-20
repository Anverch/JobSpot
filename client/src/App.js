import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import SignupForm from "./pages/Signup/index";
import Dashboard from "./pages/Dashboard";
import JobsView from "./pages/JobsView";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { UserProvider } from "./utils/GlobalState";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/index">
              <SignupForm />
            </Route>
            <Route exact path="/home">
              <Dashboard />
            </Route>
            <Route exact path="/view">
              <JobsView />
            </Route>
            <Route path="/jobs/">
              <JobDetail />
            </Route>
            <Route path="/create-job">
              <CreateJob />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
      <div className="push"></div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
