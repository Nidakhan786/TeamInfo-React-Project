import React, { useEffect, useState } from "react";
import styles from "../css/newsposts.module.css";
import { ImNewspaper } from "react-icons/im";
import NewsDisplay from "./newsdisplay";
import NewsDetail from "./newsdetail";
const NewsPosts = ({ news, loading }) => {
  const [newsdisplay, setNews] = useState({
    newsHeading: "",
    newsDescription: "",
  });
  useEffect(() => {
    if (news.length >= 0) {
      setNews({
        newsHeading: news.newsheading,
        newsDescription: news.newsdescription,
      });
    }
  }, []);
  // } else {

  // }
  return (
    <div className="newssections">
      <ul className={styles.newsposts}>
        {news.map((newsval) => (
          <li
            value={news[0]}
            onClick={() => {
              setNews({
                newsHeading: newsval.newsHeading,
                newsDescription: newsval.newsDescription,
              });
            }}
          >
            <ImNewspaper className={styles.imgicon} />
            <h3>{newsval.newsHeading}</h3>
            <p>{newsval.newsDescription}</p>
          </li>
        ))}
      </ul>
      <NewsDetail
        newsheading={newsdisplay.newsHeading}
        newsdescription={newsdisplay.newsDescription}
      />
    </div>
  );
};

export default NewsPosts;
