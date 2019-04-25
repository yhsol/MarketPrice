import React, { useState } from "react";
import { HeaderTitle, ItemValue, ItemSubTitle } from "../Style";
import { useInterval, FetchGasPrice } from "../Api/UseApi";

const GasPrice = () => {
  const { results, loading, error } = FetchGasPrice();
  const [delay, setDelay] = useState(1000);

  // FetchGasPrice();

  useInterval(() => FetchGasPrice, !loading ? delay : null);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <HeaderTitle>GasPrice</HeaderTitle>
          <ItemSubTitle>{`Fast (< 1 min to confirm)`}</ItemSubTitle>
          <ItemValue>{results && results.length > 0 && results}</ItemValue>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default GasPrice;
