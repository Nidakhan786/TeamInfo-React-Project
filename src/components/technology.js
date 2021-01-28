import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ModalForm from "./modal";
import { Player } from "@lottiefiles/react-lottie-player";

import { generateErrorToast, generateSuccessToast } from "../utils/toast/index";
import { useHistory } from "react-router-dom";
import styles from "../css/technologies.module.css";
const Technology = () => {
  let modalRef = useRef();
  const history = useHistory();
  const [techdisplay, settechdisplay] = useState({
    techname: "",
    usedfor: "",
  });
  const authentication = JSON.parse(localStorage.getItem("login"));
  const [tech, setTech] = useState([]);
  useEffect(() => {
    if (authentication === undefined || authentication === null) {
      history.push("/login");
    } else {
      const data = axios
        .get(" http://localhost:8000/technology/", {
          headers: {
            "x-access-token": authentication.store,
          },
        })
        .then((res) => {
          console.log(res);
          setTech(res.data);
        });
    }
  });
  const showModal = () => {
    modalRef.current.openModal();
  };
  const closeModal = () => {
    modalRef.current.onCancel();
  };
  const onnChangeHandler = (e) => {
    settechdisplay({ ...techdisplay, [e.target.name]: e.target.value });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/technology", techdisplay)
      .then((res) => {
        generateSuccessToast("Technology Added Sucessfully");
        closeModal();
        settechdisplay({});
      })
      .catch((err) => {
        generateErrorToast(err.message);
      });
  };
  return (
    <div className={styles.project}>
      <div className={styles.projlist}>
        <h2>Technologies</h2>
        <button className={styles.projectbutton} onClick={showModal}>
          Add Technology
        </button>
      </div>
      <ModalForm ref={modalRef}>
        <h1>Add Technology</h1>
        <form>
          <input
            name="techname"
            placeholder="Technology Name"
            className={styles.inputfield}
            value={techdisplay.techname}
            onChange={onnChangeHandler}
          />
          <input
            placeholder="What is it used for ?"
            className={styles.inputfield}
            name="usedfor"
            value={techdisplay.usedfor}
            onChange={onnChangeHandler}
          ></input>
          <button onClick={handleCancel}>Add Technology</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </ModalForm>
      <div className={styles.contain}>
        {tech.map((techs) => (
          <div className={styles.contain}>
            <div className={styles.cardcontainer}>
              <div className={styles.circle}>
                <h3>{techs.techname}</h3>
              </div>
              <div className={styles.content}>
                <p>
                  <b>Used For</b>
                </p>
                <p>{techs.usedfor}</p>
                <p>
                  <b>Projects</b>
                </p>
                {techs.projects.map((proj) => (
                  <ul>
                    <li>{proj.projectName}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
