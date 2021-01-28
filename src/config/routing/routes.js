import views from "../../components/views";
import { Switch, Route } from "react-router-dom";
import SignupForm from "../../components/signupForm";
import Dashboard from "../../components/dashboard";
import Technology from "../../components/technology";
import TeamMember from "../../components/teammember";
import AddTechnologyForm from "../../components/technologyForm";
import Navbar from "../../components/NavBar";
import AddProjectForm from "../../components/projectForm";
import Project from "../../components/project";
import Login from "../../components/Login";
import NewsDisplay from "../../components/newsdisplay";
import Profile from "../../components/profile";

function Routes() {
  return (
    <Switch>
      {localStorage.getItem("login") ? (
        <>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/technology" component={Technology} />
          <Route path="/teammember" component={TeamMember} />
          <Route path="/addtechnology" component={AddTechnologyForm} />
          <Route path="/addproject" component={AddProjectForm} />
          <Route path="/project" component={Project} />
          <Route path="/newsdisplay" component={NewsDisplay} />
          <Route path="/profile" component={Profile} />{" "}
        </>
      ) : (
        <>
          {" "}
          <Route path="/" exact component={SignupForm} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupForm} />{" "}
        </>
      )}
    </Switch>
  );
}

export default Routes;
