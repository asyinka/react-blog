import "./App.css";

function App() {
  let myTitle = `This is my first React App project`;
  let likes = 50;
  let myArr = ["CSS, ", "HTML, ", "JavaScript, ", "React..."];

  //Reac doesnt accept Bolean and objects as variables

  return (
    <div className="App">
      <div className="content">
        <h1> {myTitle} </h1>
        <p> This project has gotten {likes} likes</p>
        <p>In the bag are {myArr} and now React!!! loading</p>
      </div>
    </div>
  );
}

export default App;
