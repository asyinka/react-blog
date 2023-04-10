import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Sorry!</h2>
      <p>This page cannot be found</p>
      <Link to="/">Kindly click to go back to the homepage </Link>
    </div>
  );
};

export default NotFound;
