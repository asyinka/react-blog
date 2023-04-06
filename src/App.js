import "./App.css";

function App() {
  let myTitle = `This is my first React App project`;
  let likes = 50;
  let myArr = ["CSS, ", "HTML, ", "JavaScript, ", "React..."];
  const ggLink = "https://www.google.com";

  //Reac doesnt accept Bolean and objects as variables

  return (
    <div className="App">
      <div className="content">
        <h1> {myTitle} </h1>
        <p> This project has gotten {likes} likes</p>
        <p>In the bag are {myArr} and now React!!! loading</p>
        <p>
          This is {1} Math evaluation {Math.random() * 10} in JSX{" "}
        </p>
        <a href={ggLink} target="_blank" rel="noreferrer">
          Google Site &#10084;
        </a>
        {/* //when adding link as variable remove the apostrophes */}
      </div>
    </div>
  );
}

export default App;
