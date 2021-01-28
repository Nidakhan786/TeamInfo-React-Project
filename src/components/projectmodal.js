import React from "react";
import { useRef } from "react";
import styles from "../css/project.module.css";
import { AiOutlineClose } from "react-icons/ai";
import ModalForm from "./modal";
const ProjectInfo = (props) => {
  let modalRef = useRef();
  const showModal = () => {
    modalRef.current.openModal();
  };
  const cancelModal = () => {
    modalRef.current.onCancel();
  };

  const startdate = new Date(props.startdate).toDateString();
  const enddate = new Date(props.enddate).toDateString();

  return (
    <div>
      <div className={styles.contain}>
        <div className={styles.cardcontainer}>
          <div className={styles.circle}>
            <h3>{props.projectname}</h3>
          </div>
          <div className={styles.content}>
            <p>{props.projectdescription}</p>
            <button onClick={showModal}>Read More</button>
            <ModalForm ref={modalRef} heading="Profile View">
              <AiOutlineClose className={styles.close} onClick={cancelModal} />
              <div className={styles.teamprofcardcontainer}>
                <h2>{props.projectname}</h2>
                <p>{props.projectdescription}</p>
                <ul>
                  <li className={styles.listitems}>
                    <b>Technologies:</b>{" "}
                    {props.technologies.map((tech) => (
                      <ul>
                        <li>{tech.techname}</li>
                      </ul>
                    ))}
                  </li>
                  <li className={styles.listitems}>
                    <b>Team Members:</b>{" "}
                    {props.teammembers.map((member) => (
                      <ul>
                        <li>{member.first_name}</li>
                      </ul>
                    ))}
                  </li>
                  <li className={styles.listitems}>
                    <b>Project Managers:</b>
                    {props.projectmanagers.map((manager) => (
                      <ul>
                        <li>{manager.first_name}</li>
                      </ul>
                    ))}
                  </li>
                  <li className={styles.listitems}>
                    <b>Project's Start Date:</b> {startdate}
                  </li>
                  {props.enddate ? (
                    <li className={styles.listitems}>
                      <b>Project's End Date:</b> {enddate}
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </ModalForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
