import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComp from "./card";
import styles from "../css/teammember.module.css";
import { useHistory } from "react-router-dom";

const TeamMember = () => {
  const history = useHistory();
  const [members, setMember] = useState([]);
  const authentication = JSON.parse(localStorage.getItem("login"));

  useEffect(() => {
    if (authentication === undefined || authentication === null) {
      history.push("/login");
    } else {
      const data = axios
        .get("http://localhost:8000/users", {
          headers: {
            "x-access-token": authentication.store,
          },
        })
        .then((res) => {
          setMember(res.data);
        });
      console.log(authentication);
    }
  }, []);

  return (
    <div className={styles.teammember}>
      <div className={styles.teammemberlist}>
        <h1 className={styles.heading}>Team Members</h1>
      </div>
      <div className={styles.teammemberscontainer}>
        {members.map((member) => (
          <div key={member._id}>
            <CardComp
              firstname={member.first_name}
              lastname={member.last_name}
              empid={member.emp_id}
              role={member.role}
              id={member._id}
              emailid={member.email}
              technologies={member.technologies}
              projects={member.projects}
            ></CardComp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
