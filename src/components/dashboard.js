import React from "react";
import { useHistory } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import News from "./News";
import styles from "../css/dashboard.module.css";
const Dashboard = () => {
  const history = useHistory();
  return (
    <div className={styles.main}>
      <h1 className={styles.dashboardheading}>
        Welcome to Mobile Factory Info Portal!
      </h1>
      <div className={styles.carousel}>
        <News />
      </div>
      <div className={styles.outerbox}>
        <div
          className={styles.boxes}
          onClick={() => {
            history.push("/project");
          }}
        >
          <h1>Projects</h1>
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/private_files/lf30_dgKoB3.json"
            style={{ height: "150px", width: "200px", left: 0 }}
          />
        </div>
        <div
          className={styles.boxes}
          onClick={() => {
            history.push("/technology");
          }}
        >
          <h1>Techno Experts</h1>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_xsnsvpbs.json"
            style={{ height: "150px", width: "200px", left: 0 }}
          />
        </div>
        <div
          className={styles.boxes}
          onClick={() => {
            history.push("/teammember");
          }}
        >
          <h1>Team Members</h1>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_spvnlrri.json"
            style={{ height: "150px", width: "200px", left: 0 }}
          />
        </div>
        <div className={styles.boxes}>
          <h1>Innovations</h1>
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_kvuxqdi0.json"
            style={{ height: "150px", width: "200px", left: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
