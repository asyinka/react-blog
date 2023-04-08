import { useState, useEffect } from "react";
import BlogList from "./ListComponent";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((resp) => {
          if (!resp.ok) {
            throw Error(
              "Something Bad Happened!!! Could not fetch resource..."
            );
          }
          return resp.json();
        })
        .then((actResp) => {
          setBlogs(actResp);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="ALL BLOGS" year={2022} />}
    </div>
  );
};

export default Home;
