import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin";
import Register from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import JobsView from "./pages/JobsView";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { JobProvider } from "./utils/JobContext";
import { UserModel, UserProvider } from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const [user, setUser] = useState(
    {
      fullName: "who is ryan",
      email: "whoisryan@btag.com",
      // password: '',
      jobs: [
        {
          companyName: "Google",
          positionTitle: "president",
          salary: 500000000,
          currentstatus: "applied",
          fullBenefits: true,
          location: "remote",
          jobNotes: "sounds pretty good",
        },
      ],
      loggedIn: true,
      handleInputChange: (e) => {
        console.log(`e.target:>>`, e.target);
        const { name, value } = e.target;
        setUser({ [name]: value });
      },
      handleSubmit: (e) => {
        e.preventDefault();
        console.log(`e:>>`, e);
      },
    }
    //(ArticleModel)
  );

  // const [job, setJob] = useState({
  //   companyName: "",
  //   positionTitle: "",
  //   salary: 0,
  //   currentStatus: "interested",
  //   phoneInterview: new Date(Date.now()),
  //   inPersonInterview: new Date(Date.now()),
  //   fullBenefits: false,
  //   location: "",
  //   jobNotes: "",
  // });


  return (
    <Router>
      <div>
        <UserProvider value={{ user }}>
          <Nav />
          <Switch>
            {/* <JobProvider value={{ job }}> */}
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
            <Route path="/create-job">
              <CreateJob />
            </Route>
            {/* </JobProvider> */}

          </Switch>
        </UserProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
