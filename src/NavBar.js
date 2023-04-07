const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Yinks 'React' Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "20px",
          }}
          //inline style takes 2 curly brackets, one to tell JSX of dynamic value input and the other for JS object
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
