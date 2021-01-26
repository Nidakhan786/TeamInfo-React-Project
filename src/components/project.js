import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/project.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ModalForm from "./modal";
import { useRef } from "react";
import ProjectDetail from "./projectdetail";
import ProjectInfo from "./projectmodal";
const Project = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const data = axios.get("http://localhost:8000/projects").then((res) => {
      console.log(res);
      setProject(res.data);
    });
  }, []);
  const showModal = () => {};
  return (
    <div>
      <div className={styles.project}>
        <div className={styles.projlist}>
          <h2>Projects</h2>
          <button className={styles.projectbutton}>
            <Link to="/addproject" className={styles.projectbuttonlink}>
              Add Project
            </Link>
          </button>
        </div>

        {project.map((member) => (
          <ProjectInfo
            projectname={member.projectName}
            projectdescription={member.projectDescription}
            technologies={member.technologies}
            teammembers={member.teamMembers}
            projectmanagers={member.projectManager}
            startdate={member.startDate}
            enddate={member.endDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
