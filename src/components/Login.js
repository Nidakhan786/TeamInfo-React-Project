import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import auth from "../assets/auth.svg";
import styles from "../css/login.module.css";
import { generateErrorToast } from "../utils/toast";
import "antd/lib/message/style/index.css";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const history = useHistory();
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [userdetail, setUserDetail] = useState({
    email: "",
    password: "",
    auth: false,
    store: null,
  });
  const onnChangeHandler = (e) => {
    setUserDetail({ ...userdetail, [e.target.name]: e.target.value });
  };
  function Validation(values) {
    let emailError = "";
    let passwordError = "";

    if (!values.email) {
      emailError = "**Email required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      emailError = "Email address is not valid";
    }

    if (!values.password) {
      passwordError = "**Password required";
    } else if (values.password.length < 6) {
      passwordError = "Password needs to be 6 charactors or more";
    }
    if (emailError || passwordError) {
      setErrors({ emailError, passwordError });
      return false;
    }
    return true;
  }

  const storeCollectore = () => {
    let stores = JSON.parse(localStorage.getItem("login"));
    if (stores && stores.login) {
      setUserDetail(((userdetail.auth = true), (userdetail.store = stores)));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const isValid = Validation(userdetail);
    console.log(errors);
    if (isValid) {
      setErrors({});
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
          generateErrorToast("You are not Registered");
          setUserDetail(initialState);
        });
    } else {
      console.log("not valid");
    }
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
          {errors.emailError && (
            <p className={styles.errormsg}>{errors.emailError}</p>
          )}
          <label>Password</label>
          <input
            type="password"
            className={styles.logininputfield}
            placeholder="Enter your password"
            value={userdetail.password}
            name="password"
            onChange={onnChangeHandler}
          />
          {errors.passwordError && (
            <p className={styles.errormsg}>{errors.passwordError}</p>
          )}
          <button type="submit" onClick={handleSubmit}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
