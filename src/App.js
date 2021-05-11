import SignupForm from "./components/signupForm";
import TeamMember from "./components/teammember";
import Technology from "./components/technology";
import Navbar from "./components/NavBar";
import React from "react";
import Dashboard from "./components/dashboard";
import Routes from "./config/routing/routes";
import { MdPermDeviceInformation } from "react-icons/md";
import { useHistory, NavLink, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
