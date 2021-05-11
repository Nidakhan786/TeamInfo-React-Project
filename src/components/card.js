import styles from "../css/card.module.css";
import { FaUserCircle } from "react-icons/fa";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ModalForm from "./modal";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

const CardComp = (prop) => {
  const history = useHistory();
  let modalRef = useRef();
  const showModal = () => {};
  const cancelModal = () => {
    modalRef.current.onCancel();
  };

  return (
    <div>
      <div className={styles.contain}>
        <div className={styles.teamcardcontainer}>
          <div className={styles.techcircle}>
            <h3>{prop.firstname}</h3>
          </div>
          <div className={styles.imgcontainer}>
            <FaUserCircle className={styles.imgicon} />
          </div>
          <div className={styles.content}>
            <p>{prop.role}</p>
            <button onClick={showModal}>View Profile</button>
            <ModalForm ref={modalRef} heading="Profile View">
              <AiOutlineClose className={styles.close} onClick={cancelModal} />
              <div className={styles.teamprofcardcontainer}>
                <h2>
                  <u>
                    {prop.firstname} {prop.lastname}
                  </u>
                </h2>

                <ul>
                  <li className={styles.listitems}>
                    <b>Role:</b> {prop.role}
                  </li>
                  <li className={styles.listitems}>
                    <b>Email Id:</b> {prop.emailid}
                  </li>
                  <li className={styles.listitems}>
                    <b>Employee Id:</b> {prop.empid}
                  </li>
                  <li className={styles.listitems}>
                    <b>Projects:</b>
                    <ul className={styles.projectlist}>
                      {prop.projects.map((proj) => (
                        <li key={proj._id}>{proj.projectName}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </ModalForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
