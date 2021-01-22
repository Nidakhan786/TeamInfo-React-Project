import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, useFormik } from "formik";
import ApiPostCall from "../services/apiResponse";
const SignupForm = () => {
  //   const [form, setForm] = useState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     password: "",
  //     emp_id: "",
  //   });
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      emp_id: "",
      role: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required"),
      password: Yup.string().required("Required"),
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      emp_id: Yup.number("It should be a Number").required("Required"),
      role: Yup.string("Role is Required"),
    }),
    onSubmit: (values) => {
      ApiPostCall("http://localhost:8000/signup/", values);
    },
  });

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={formik.validationSchema}
      onSubmit={formik.handleSubmit}
    >
      {({
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={formik.handleSubmit}>
          <label>
            Email <br />
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </label>
          <br />
          <label>
            Password <br />
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </label>
          <br />
          <label>
            First Name <br />
            <input
              type="text"
              name="first_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.first_name}
            />
          </label>
          <br />
          <label>
            Last Name <br />
            <input
              type="text"
              name="last_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.last_name}
            />
          </label>
          <br />
          <label>
            Employee ID <br />
            <input
              type="text"
              name="emp_id"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.emp_id}
            />
          </label>
          <br />
          <label>
            Role <br />
            <input
              type="text"
              name="role"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
