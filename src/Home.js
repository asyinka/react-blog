import { useState, useEffect } from "react";
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
    {
      title: "Talking about React",
      body: "lorem ipsolum do...",
      author: "Shakespeare",
      id: 4,
    },
  ]);

  const [clickNo, setClickNo] = useState(0);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log(
      "run this everytime a state is changed and page is rendered.",
      clickNo
    );
  }, [clickNo]);

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="ALL BLOGS"
        year={2022}
        handleDelete={handleDelete}
      />
      <button onClick={() => setClickNo(clickNo + 1)}>Click-Me</button>
      <p>You have clicked {clickNo} times </p>
    </div>
  );
};

export default Home;
