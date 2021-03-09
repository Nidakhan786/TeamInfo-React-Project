import React, { useEffect, useState } from "react";
import axios from "axios";
import CarouselComp from "./carousel";

/**
 * Component to fetch the news data and pass it in Carousel to show on dashboard
 */
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const data = axios.get("http://localhost:8000/news").then((res) => {
      console.log(res);
      setNews(res.data);
    });
  }, []);
  return <CarouselComp newsdata={news} />;
};

export default News;
