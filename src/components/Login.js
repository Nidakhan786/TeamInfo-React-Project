import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import auth from "../assets/auth.svg";
import styles from "../css/login.module.css";

const Login = () => {
  const history = useHistory();
  const [userdetail, setUserDetail] = useState({
    email: "",
    password: "",
    auth: false,
    store: null,
  });
  const onnChangeHandler = (e) => {
    setUserDetail({ ...userdetail, [e.target.name]: e.target.value });
  };

  const storeCollectore = () => {
    let stores = JSON.parse(localStorage.getItem("login"));
    if (stores && stores.login) {
      setUserDetail(((userdetail.auth = true), (userdetail.store = stores)));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/login", userdetail)
      .then((response) => {
        console.log(response);
        localStorage.setItem(
          "login",
          JSON.stringify({
            auth: response.data.auth,
            store: response.data.token,
          })
        );
        storeCollectore();
        history.push("/dashboard");
        setUserDetail((userdetail.auth = true));
        console.log("userdetail", userdetail);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={styles.logincontainer}>
      <div className={styles.loginformcontainer}>
        <img src={auth} />
        <form>
          <label>Email</label>
          <input
            className={styles.logininputfield}
            type="text"
            placeholder="Enter your registered email address"
            value={userdetail.email}
            name="email"
            onChange={onnChangeHandler}
          />
          <label>Password</label>
          <input
            type="password"
            className={styles.logininputfield}
            placeholder="Enter your password"
            value={userdetail.password}
            name="password"
            onChange={onnChangeHandler}
          />
          <button type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
