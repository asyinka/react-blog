const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, Ninjas", e);
  };

  function handleClickAgain(name, e) {
    console.log(`Hello ${name}`, e.view.alert("Welcome to React, Ninja"));
  }

  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("Tate", e)}>
        Click another time
      </button>
    </div>
  );
};

export default Home;
