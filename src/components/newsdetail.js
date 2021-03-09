import React, { useState } from "react";
import styles from "../css/newsdetail.module.css";
import { ImNewspaper } from "react-icons/im";

/**
 * Component to show the full news on click of a news item
 */
const NewsDetail = (props) => {
  return (
    <div className={styles.newsdisplay}>
      <div className={styles.newsheading}>
        <ImNewspaper className={styles.imgicon} />
        <h1>{props.newsheading}</h1>
      </div>
      <p>{props.newsdescription}</p>
    </div>
  );
};

export default NewsDetail;
