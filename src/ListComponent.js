const BlogList = (props) => {
  const blogs = props.blogs;
  const year = props.year;
  const title = props.title;

  return (
    <div className="blog-list">
      <h1> {title} </h1>
      <p> {year} blogs </p>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
