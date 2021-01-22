import React, { useState, useEffect } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { generateErrorToast, generateSuccessToast } from "../utils/toast/index";
const AddProjectForm = () => {
  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
  });
  const [member, setMember] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [projectManagers, setProjectManagers] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [technologiesid, setTechnologiesid] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const teamMember = member.filter(
    (teammem) => teammem.role !== "Project Manager"
  );
  const projectmanager = member.filter(
    (teammem) => teammem.role === "Project Manager"
  );
  useEffect(() => {
    const data = axios.get("http://localhost:8000/users").then((res) => {
      setMember(res.data);
    });
    const tech = axios.get("http://localhost:8000/technology").then((res) => {
      setTechnologies(res.data);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/projects", {
        ...project,
        teamMembers: teamMembers,
        projectManager: projectManagers,
        technologies: technologiesid,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        setProject(res.data);
        setProject({});
        generateSuccessToast("Project Added Sucessfully");
      })
      .catch((err) => {
        generateErrorToast(err.message);
      });
  };
  const onnChangeHandler = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleselect = (values) => {
    console.log(values);
    let result = values.map((a) => a._id);
    setTeamMembers(result);
  };
  const handlepmselect = (values) => {
    console.log(values);
    let result = values.map((a) => a._id);
    setProjectManagers(result);
  };
  const handletechselect = (values) => {
    console.log(values);
    let result = values.map((a) => a._id);
    setTechnologiesid(result);
  };

  return (
    <div className="addProjectform">
      <h1>Add a Project</h1>
      <form className="projectform">
        <div className="formcontainer">
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Enter the project Name"
            className="inputfield"
            name="projectName"
            value={project.projectName}
            onChange={onnChangeHandler}
          ></input>
          <label>Project Description</label>
          <textarea
            type="text"
            placeholder="Enter the project Name"
            className="inputfield"
            value={project.projectDescription}
            onChange={onnChangeHandler}
            name="projectDescription"
          ></textarea>
          <label>Team Members</label>
          <Multiselect
            options={teamMember}
            displayValue="first_name"
            onSelect={handleselect}
          />
          <label>Project Managers</label>
          <Multiselect
            options={projectmanager}
            displayValue="first_name"
            name="projectManager"
            onSelect={handlepmselect}
          />
          <label>Technologies</label>
          <Multiselect
            options={technologies}
            displayValue="techname"
            onSelect={handletechselect}
          />
          <label>Start Date</label>
          <DatePicker
            className="inputfield"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <label>End Date</label>
          <DatePicker
            selected={endDate}
            className="inputfield"
            onChange={(date) => setEndDate(date)}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
