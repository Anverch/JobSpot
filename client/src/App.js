import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import JobsView from "./pages/JobsView";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import UpdateJob from "./pages/UpdateJob";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  useUserContext,
  UserProvider,
  useUserModel,
} from "./utils/UserContext";
import API from "./utils/API";
import "./styles.css";

function App() {
  const { user, setUser } = useUserContext();

  if (user.name === "") {
    API.getUserData().then(({ data }) => {
      if (data) {
        setUser(data);
      }
    });
  }

  const DefaultContainer = () => (
    <>
      <div className="wrapping">
        <Nav />
        <Route exact path="/home">
          <Dashboard />
        </Route>
        <Route exact path="/view">
          <JobsView />
        </Route>
        <Route path="/jobs">
          <JobDetail />
        </Route>
        <Route path="/create-job">
          <CreateJob />
        </Route>
        <Route path="/update-job">
          <UpdateJob />
        </Route>
        <div className="push"></div>
      </div>
      <Footer className="footer" />
    </>
  );

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/index">
            <Signup />
          </Route>
          <Route>
            <DefaultContainer />
          </Route>
        </Switch>
      </div>
    </Router>
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
