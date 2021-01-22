import React from 'react'
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, useFormik } from "formik";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const AddTechnologyForm = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
         techname: "",
          usedfor: "",
        },
        validationSchema: Yup.object({
          techname: Yup.string().required("Required"),
          usedfor: Yup.string().required("Required"),
        
        }),
        onSubmit: (values) => {
          axios
            .post("http://localhost:8000/technology", values)
            .then((res) => {
                alert("Technology added Succesfully")
                history.push("/technology")
            })
            .catch((err) => {
              alert(err);
            });
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
              Technology Name <br />
              <input
                type="text"
                name="techname"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.techname}
              />
            </label>
            <br />
            <label>
              Used For <br />
              <input
                type="text"
                name="usedfor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usedfor}
              />
            </label>
            <br />
            
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
     );
}
 
export default AddTechnologyForm;