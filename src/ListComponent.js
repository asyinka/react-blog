const BlogList = ({ blogs, title, year, handleDelete }) => {
  //props can be replaced with the actual parameters instead. When destructuring order matters
  return (
    <div className="blog-list">
      <h1> {title} </h1>
      <p> {year} blogs </p>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> Written by: {blog.author}</p>
          <button onClick={(id) => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
