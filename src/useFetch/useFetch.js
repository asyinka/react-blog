import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [pageData, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();
    //maynot be neccessary, it handles error that occurs when users swapped very fast btw two different links (one with a fetch)
    setTimeout(() => {
      fetch(url, { signal: abortFetch.signal })
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
          if (err.name === "AbortError") {
            setError("Fetch process failed");
            console.log("Fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortFetch.abort();
  }, [url]);

  return { pageData, isPending, error };
};

export default useFetch;
