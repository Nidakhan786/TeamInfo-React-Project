import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/project.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProjectInfo from "./projectmodal";

/**
 * Component Displaying all the projects
 */
const Project = () => {
  const history = useHistory();
  const authentication = JSON.parse(localStorage.getItem("login"));
  const [project, setProject] = useState([]);
  useEffect(() => {
    if (authentication === undefined || authentication === null) {
      history.push("/login");
    } else {
      const data = axios
        .get("http://localhost:8000/projects", {
          headers: {
            "x-access-token": authentication.store,
          },
        })
        .then((res) => {
          console.log(res);
          setProject(res.data);
        });
    }
  }, []);
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
