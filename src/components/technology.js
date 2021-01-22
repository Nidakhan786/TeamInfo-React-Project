import React, { useEffect, useState } from "react";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import * as GrIcons from "react-icons/gr";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Technology = () => {
 
  const history = useHistory();
  const [tech, setTech] = useState([]);
  useEffect(() => {
    const data = axios.get(" http://localhost:8000/technology/").then((res) => {
      console.log(res);
      setTech(res.data);
    });
  }, []);

  return (
    <div className="list">
      <GrIcons.GrAdd  onClick ={()=>{history.push("/addtechnology")}}/>
      <div>
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_lln7m43m.json"
          style={{ height: "400px", width: "400px", left: 0}}
        />
      </div>
      <ul>
        {tech.map((techs) => (
          <li key={techs._id}>Technology Name: {techs.techname}</li>
        ))}
      </ul>

    );
 
    </div>
  );
};

export default Technology;
