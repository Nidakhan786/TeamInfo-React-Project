import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextInput from "./TextInput";
import { FaUserCircle } from "react-icons/fa";
import styles from "../css/profile.module.css";
import { generateErrorToast, generateSuccessToast } from "../utils/toast/index";
const Profile = () => {
  const history = useHistory();
  const authentication = JSON.parse(localStorage.getItem("login"));
  const userid = authentication.userid;
  const [userdetail, setUserdetail] = useState({});
  const [disabled, handledisabled] = useState(true);

  /**
   * Component Displaying the Profile and Edit the profile
   */
  useEffect(() => {
    if (authentication === undefined || authentication === null) {
      history.push("/login");
    } else {
      const data = axios
        .get("http://localhost:8000/users/" + userid, {
          headers: {
            "x-access-token": authentication.store,
          },
        })
        .then((res) => {
          setUserdetail(res.data);
        })
        .catch((err) => {
          generateErrorToast(err.message);
        });
      console.log(authentication);
    }
  }, []);
  const handleEdit = () => {
    handledisabled(false);
  };
  const handleSave = () => {
    handledisabled(true);
    const data = axios
      .put("http://localhost:8000/users/" + userid, {
        ...userdetail,
      })
      .then((res) => {
        setUserdetail(res);
        generateSuccessToast("Changes Saved Sucessfully");
      });
  };
  const onChangehandler = (e) => {
    setUserdetail({ ...userdetail, [e.target.name]: e.target.value });
    console.log(userdetail);
  };
  return (
    <div className={styles.container}>
      <FaUserCircle className={styles.user} />
      {!disabled && <button onClick={handleSave}>Save</button>}
      {disabled && <button onClick={handleEdit}>Edit Profile</button>}

      <label>First Name</label>
      <input
        placeholder="First Name"
        name="first_name"
        value={userdetail.first_name}
        disabled={disabled}
        className={styles.input}
        onChange={onChangehandler}
      ></input>
      <label>Last Name</label>
      <input
        placeholder="Last Name"
        name="last_name"
        value={userdetail.last_name}
        className={styles.input}
        disabled={disabled}
        onChange={onChangehandler}
      ></input>
      <label>Employee ID</label>
      <input
        placeholder="Employee ID"
        name="emp_id"
        value={userdetail.emp_id}
        className={styles.input}
        onChange={onChangehandler}
        disabled={disabled}
      ></input>
      <label>Role</label>
      <input
        placeholder="Role"
        name="role"
        value={userdetail.role}
        className={styles.input}
        disabled={disabled}
        onChange={onChangehandler}
      ></input>
      <label>Email ID</label>
      <input
        placeholder="Email ID"
        value={userdetail.email}
        name="email"
        className={styles.input}
        disabled={disabled}
        onChange={onChangehandler}
      ></input>
    </div>
  );
};

export default Profile;
