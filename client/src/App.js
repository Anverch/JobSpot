import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/Signin";
import Register from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import JobsView from "./pages/JobsView";
import JobDetail from "./pages/JobDetail";
import CreateJob from "./pages/CreateJob";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { UserProvider } from "./utils/GlobalState";
import { Container } from "semantic-ui-react";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <div className="wrapping">
        <UserProvider>
          <Router>
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
              <Route path="/jobs/">
                <JobDetail />
              </Route>
              <Route path="/create-job">
                <CreateJob />
              </Route>
            </Switch>
            <div className="push"></div>
          </Router>
        </UserProvider>
      </div>
      <Footer className="footer" />
    </div>
  );
}
// function App() {
//   return (
//     <UserProvider>
//       <Router>
//         <div className="app">
//           <Nav />
//           <Switch>
//             <Route exact path="/">
//               <SignIn />
//             </Route>
//             <Route exact path="/index">
//               <Register />
//             </Route>
//             <Route exact path="/home">
//               <Dashboard />
//             </Route>
//             <Route exact path="/view">
//               <JobsView />
//             </Route>
//             <Route path="/jobs/">
//               <JobDetail />
//             </Route>
//             <Route path="/create-job">
//               <CreateJob />
//             </Route>
//           </Switch>

//           <Footer />
//         </div>
//       </Router>
//     </UserProvider>
//   );
// }
export default App;
