import React, { useState, useEffect } from "react";
import { useGasPriceApi } from "../Api";

const GasPrice = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await useGasPriceApi.gasPrice();
        setResults(data);
        console.log(data.safeLow);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);
  console.log(results);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <h2>GasPrice</h2>
          <div>
            {results &&
              results.length > 0 &&
              results.map((result, index) => (
                <div key={index}>{result.safeLow}</div>
              ))}
          </div>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default GasPrice;
