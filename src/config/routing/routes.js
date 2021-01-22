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

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignupForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/technology" component={Technology} />
      <Route path="/teammember" component={TeamMember} />
      <Route path="/addtechnology" component={AddTechnologyForm} />
      <Route path="/addproject" component={AddProjectForm} />
      <Route path="/project" component={Project} />
      <Route path="/login" component={Login} />
      <Route path="/newsdisplay" component={NewsDisplay} />
    </Switch>
  );
}

export default Routes;
