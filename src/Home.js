import { useState, useEffect } from "react";
import BlogList from "./ListComponent";
import useFetch from "./useFetch/useFetch";

const Home = () => {
  const {
    pageData: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="ALL BLOGS" year={2022} />}
    </div>
  );
};

export default Home;
