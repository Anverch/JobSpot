import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import SignupForm from "./pages/Signup/index";
import Dashboard from "./pages/Dashboard";
import JobsView from "./pages/JobsView";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  useUserContext,
  UserProvider,
  useUserModel,
} from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const { user, setUser } = useUserContext();
  if (user.name === "") {
    API.getUserData().then(({ data }) => {
      if (data) {
        setUser(data);
      }
    });
  }

  return (
    <div className="app">
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

      <div className="push"></div>
      <Footer className="footer" />
    </div>
  );
}

const AppWrapper = () => {
  const userModel = useUserModel();
  return (
    <UserProvider value={userModel}>
      <App />
    </UserProvider>
  );
};

export default AppWrapper;
