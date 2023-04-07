import { useState } from "react";

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

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
