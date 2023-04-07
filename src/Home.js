import { useState } from "react";
import BlogList from "./ListComponent";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Welcome page",
      body: "lorem ipsolum do...",
      author: "Patrick",
      id: 1,
    },
    {
      title: "Lists component in React",
      body: "lorem ipsolum do...",
      author: "Shakespeare",
      id: 2,
    },
    {
      title: "Presidential party",
      body: "lorem ipsolum do...",
      author: "Jane",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="ALL BLOGS"
        year={2022}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
