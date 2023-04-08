import { useState, useEffect } from "react";
import BlogList from "./ListComponent";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((resp) => resp.json())
      .then((actRes) => setBlogs(actRes));
  }, []);

  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="ALL BLOGS"
          year={2022}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
