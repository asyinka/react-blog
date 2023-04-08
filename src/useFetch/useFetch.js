import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [pageData, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((resp) => {
          if (!resp.ok) {
            throw Error(
              "Something Bad Happened!!! Could not fetch resource..."
            );
          }
          return resp.json();
        })
        .then((actResp) => {
          setBlogs(actResp);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { pageData, isPending, error };
};

export default useFetch;
