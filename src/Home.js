import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Blogger");
  const [clicks, setClicks] = useState(288);

  const handleClick = () => {
    setName("John");
    setClicks(clicks + 1);
  };

  return (
    <div>
      <h2>Homepage</h2>
      <p>Welcome {name} </p>
      <p>This page has {clicks} clicks</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
