import { useState, useEffect } from "react";
import BlogList from "./ListComponent";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   fetch("http://localhost:8000/blogs")
    //     .then((resp) => resp.json())
    //     .then((actResp) => setBlogs(actResp));
    //   setIsPending(false);
    // }, 2000);
    fetch("http://localhost:8000/blogs")
      .then((resp) => resp.json())
      .then((actResp) => setBlogs(actResp));
    setIsPending(false);
  }, []);

  return (
    <div className="home">
      {isPending && <div>fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="ALL BLOGS" year={2022} />}
    </div>
  );
};

export default Home;
