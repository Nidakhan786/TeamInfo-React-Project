import React from "react";
import { useField } from "formik";
import styles from "../css/textInput.module.css";

/**
 * Input Field Used in forms
 */
const TextInput = (props) => {
  const [field, meta] = useField(props.name);
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input className={styles.inputfield} {...field} {...props} />
      {meta.error && meta.touched && (
        <p className={styles.errormsg}>{meta.error}*</p>
      )}
    </div>
  );
};

export default TextInput;
