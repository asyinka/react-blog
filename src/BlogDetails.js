import { useParams } from "react-router-dom";
import useFetch from "./useFetch/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    pageData: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

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
    </article>
  );
};

export default BlogDetails;
