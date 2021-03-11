import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import signup from "../assets/signup.svg";
import ApiPostCall from "../services/apiResponse";
import styles from "../css/signup.module.css";
import TextInput from "./TextInput";
import { formSchema } from "../helpers/validationSchema";
import { generateSuccessToast, generateErrorToast } from "../utils/toast";
/**
 * Component displaying the Signup Form
 */
const SignupForm = () => {
  const history = useHistory();
  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    emp_id: "",
    role: "",
  };
  const [userdetail, setUserDetail] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    emp_id: "",
    role: "",
  });
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        emp_id: "",
        role: "",
      }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        // ApiPostCall("http://localhost:8000/signup/", values);
        setUserDetail(values);
        ApiPostCall("http://localhost:8000/signup", values)
          .then((response) => {
            generateSuccessToast(
              "You've Succesfully registered Please Login to Continue"
            );
            resetForm(initialState);

            history.push("/login");
          })
          .catch((err) => {
            generateErrorToast("Unable to Register");
            resetForm(initialState);
          });
        console.log(values);
      }}
    >
      {({
        handleSubmit,

        /* and other goodies */
      }) => {
        return (
          <div className={styles.signupcontainer}>
            <img src={signup} />

            <div className={styles.signupformcontainer}>
              <form onSubmit={handleSubmit}>
                <h2>REGISTRATION</h2>
                <TextInput name="email" placeholder="Enter your Email" />

                <TextInput
                  name="password"
                  placeholder="Enter your Password"
                  type="password"
                />

                <TextInput
                  name="first_name"
                  placeholder="Enter your First Name"
                />

                <TextInput
                  name="last_name"
                  placeholder="Enter your Last Name"
                />
                <TextInput name="emp_id" placeholder="Enter your Employee ID" />
                <TextInput name="role" placeholder="Enter your Role" />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
