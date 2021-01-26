import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../css/newsdisplay.module.css";
import { generateErrorToast, generateSuccessToast } from "../utils/toast/index";
import ModalForm from "./modal";
import Pagination from "./pagination";
import NewsPosts from "./newsPosts";
const NewsDisplay = () => {
  let modalRef = useRef();

  const [addnews, setAddNews] = useState({
    newsHeading: "",
    newsDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  useEffect(() => {
    setLoading(true);
    const data = axios.get("http://localhost:8000/news").then((res) => {
      setNews(res.data);
      setLoading(false);
    });
  }, []);
  const showModal = () => {
    modalRef.current.openModal();
  };
  const closeModal = () => {
    modalRef.current.onCancel();
  };

  const onnChangeHandler = (e) => {
    setAddNews({ ...addnews, [e.target.name]: e.target.value });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/news", addnews)
      .then((res) => {
        generateSuccessToast("Project Added Sucessfully");
        closeModal();
        setLoading(false);
      })
      .catch((err) => {
        generateErrorToast(err.message);
      });
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className={styles.newscontainer}>
      <div className={styles.newslist}>
        <h2 className={styles.heading}>News</h2>
        <button className={styles.newsbutton} onClick={showModal}>
          Add News
        </button>
      </div>
      <ModalForm ref={modalRef}>
        <h1>Add News</h1>
        <form>
          <input
            name="newsHeading"
            placeholder="Add a News Heading"
            className={styles.inputfield}
            value={addnews.newsHeading}
            onChange={onnChangeHandler}
          />
          <textarea
            placeholder="Add a news Description"
            className={styles.inputfield}
            name="newsDescription"
            value={addnews.newsDescription}
            onChange={onnChangeHandler}
          ></textarea>
          <button onClick={handleCancel}>Add News</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </ModalForm>

      <NewsPosts news={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
    </div>
  );
};

export default NewsDisplay;
