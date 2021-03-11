import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useHistory, Link } from "react-router-dom";
import styles from "../css/navbar.module.css";
import { MdPermDeviceInformation } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
/**
 * Component to display the Navbar at top
 */
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Navbar = () => {
  const history = useHistory();
  const [profilediv, setdiv] = useState(false);

  const [auth, setauth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("login")) {
      setauth(true);
    }
  });
  const showdiv = () => {
    setdiv(true);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className={styles.header}>
      <Link to="/dashboard" className={styles.logo}>
        <MdPermDeviceInformation />
        <span className={styles.mfinfo}>MF INFO</span>
      </Link>

      <nav className={styles.nav}>
        <ul>
          {localStorage.getItem("login") ? (
            <>
              <li>
                <Link to="/dashboard" className={styles.item}>
                  Home
                </Link>
              </li>
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
              <li
                className={styles.item}
                onClick={() => {
                  setauth(false);
                  localStorage.clear();
                  history.push("/login");
                  refreshPage();
                }}
              >
                Sign Out
              </li>
              <li>
                <Link to="/profile">
                  <CgProfile className={styles.img} onClick={showdiv} />
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
