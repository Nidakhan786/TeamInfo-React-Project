import styles from "../css/card.module.css";
import { FaUserCircle } from "react-icons/fa";

const CardComp = (prop) => {
  console.log(prop);
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
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
