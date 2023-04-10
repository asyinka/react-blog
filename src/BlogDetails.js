import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    pageData: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const historyUse = useHistory();

  const HandleClick = () => {
    if (!blog) {
      return;
    } //this prevents error from occuring when user clicks delete button during the process of fetching

    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => historyUse.push("/"));
  };

  return (
    <article className="blog-details">
      {isPending && <div>Fetching files and data...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <div>
          <h2> {blog.title} </h2>
          <p> Written by: {blog.author} </p>
          <div> {blog.body} </div>
        </div>
      )}
      {blog && <button onClick={HandleClick}>Delete</button>}
    </article>
  );
};

export default BlogDetails;
