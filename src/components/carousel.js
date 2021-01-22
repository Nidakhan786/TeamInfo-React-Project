import { Carousel } from "antd";
import { useEffect, useState } from "react";
import styles from "../css/carousel.module.css";

const CarouselComp = (prop) => {
  const [newsdata, setNews] = useState([]);
  const { newsdata: newsfromprops } = prop;
  useEffect(() => {
    setNews(newsfromprops);
  }, [newsfromprops]);
  return (
    <div>
      <Carousel autoplay>
        {newsdata.map((news) => {
          return (
            <div className={styles.news}>
              <div className={styles.newstext}>
                <div className={styles.newsheading}>{news.newsHeading}</div>
                <div className={styles.newsdesc}>{news.newsDescription}</div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
