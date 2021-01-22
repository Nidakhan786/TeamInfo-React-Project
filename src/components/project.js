import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/project.module.css";
import { Link } from "react-router-dom";
import ProjectDetail from "./projectdetail";
const Project = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const data = axios.get("http://localhost:8000/projects").then((res) => {
      console.log(res);
      setProject(res.data);
    });
  }, []);
  const handleClick = () => {
    <ProjectDetail />;
  };
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
          <div>
            <div className={styles.contain}>
              <div className={styles.cardcontainer}>
                <div className={styles.circle}>
                  <h3>{member.projectName}</h3>
                </div>
                <div className={styles.content}>
                  <p>{member.projectDescription}</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
