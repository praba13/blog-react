import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not Fetch the data');
          }
          //return console.log(res);
          return res.json();
        })
        .then((data) => {
          setData(data);
          //console.log(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          if (err.name === 'AbortError') {
            console.log('fetch Aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
