import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useHistory, NavLink, BrowserRouter, Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import Dashboard from "./dashboard";
import { MdPermDeviceInformation } from "react-icons/md";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Navbar = () => {
  const history = useHistory();
  const contentStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 0,
    height: "610px",
  };
  return (
    <div className={styles.header}>
      <Link to="/dashboard" className={styles.logo}>
        <MdPermDeviceInformation />
        <span className={styles.mfinfo}>MF INFO</span>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/project" className={styles.item}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/teammember" className={styles.item}>
              Team Members
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/newsdisplay" className={styles.item}>
              News
            </Link>
          </li>
          <li>
            <Link to="/technology" className={styles.item}>
              Techno Experts
            </Link>
          </li>
          <li>
            <Link to="/project" className={styles.item}>
              Innovations
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.item}>
              Sign In
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/signup" className={styles.item}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
