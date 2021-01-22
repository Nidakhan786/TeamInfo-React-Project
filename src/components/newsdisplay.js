import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/newsdisplay.module.css";
const NewsDisplay = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const data = axios.get("http://localhost:8000/news").then((res) => {
      setNews(res.data);
    });
  }, []);
  return (
    <div className={styles.newscontainer}>
      <div className={styles.newslist}>
        <h2 className={styles.heading}>News</h2>
        <button className={styles.newsbutton}>
          <Link to="/addproject" className={styles.newsbuttonlink}>
            Add News
          </Link>
        </button>
      </div>
      {news.map((newsval) => (
        <div>
          <div className={styles.newscontain}>
            <div className={styles.newcardcontainer}>
              <h3>{newsval.newsHeading}</h3>
              <div>
                <p>{newsval.newsDescription}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsDisplay;
