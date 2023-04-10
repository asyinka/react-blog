import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select Author");

  return (
    <div className="create">
      <h2>Create New Blog</h2>
      <form>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Written by:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Enter...">Select Author</option>
          <option value="Mosh">Mosh</option>
          <option value="Mario">Mario</option>
          <option value="Shakespeare">Shakespeare</option>
        </select>
        <button>Submit Blog</button>
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>'{author}'</p>
    </div>
  );
};

export default Create;
