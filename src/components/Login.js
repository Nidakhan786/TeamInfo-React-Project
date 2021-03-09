import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import auth from "../assets/auth.svg";
import styles from "../css/login.module.css";
import { generateErrorToast } from "../utils/toast";
import "antd/lib/message/style/index.css";
import { loginSchema } from "../helpers/validationSchema";
import TextInput from "./TextInput";
import ApiPostCall from "../services/apiResponse";
/**
 * Component for Login Screen 
 */
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const history = useHistory();
  const [userdetail, setUserDetail] = useState({
    email: "",
    password: "",
    auth: false,
    store: null,
  });

  const storeCollectore = () => {
    let stores = JSON.parse(localStorage.getItem("login"));
    if (stores && stores.login) {
      setUserDetail(((userdetail.auth = true), (userdetail.store = stores)));
    }
  };
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    // Formik is used for Form
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(value) => {
        setUserDetail(value);
        ApiPostCall("http://localhost:8000/auth/login", value)
          .then((response) => {
            history.push("/dashboard");
            refreshPage();

            console.log(response);
            localStorage.setItem(
              "login",
              JSON.stringify({
                auth: response.data.auth,
                store: response.data.token,
                userid: response.data.userid,
              })
            );
            storeCollectore();

            setUserDetail((userdetail.auth = true));
            console.log("userdetail", userdetail);
          })
          .catch((err) => {
            generateErrorToast("You are not Registered");
            setUserDetail(initialState);
          });
      }}
    >
      {({ handleSubmit }) => {
        return (
          <div className={styles.logincontainer}>
            <div className={styles.loginformcontainer}>
              <h2>LOGIN</h2>
              <img src={auth} />
              <form onSubmit={handleSubmit}>
                <TextInput
                  name="email"
                  placeholder="Enter your Registered Email"
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
