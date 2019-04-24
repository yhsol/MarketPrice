import React, { useState, useEffect } from "react";
import { useExaApi } from "../Api";

const EVE = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const {
          data: { data }
        } = await useExaApi.eveApi();
        setResults(data);
        // console.log(data);
      }
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h2>EVE</h2>
          <div>
            {results &&
              results.length > 0 &&
              results.map((result, index) => (
                <div key={index}>{result.price}</div>
              ))}
          </div>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default EVE;
