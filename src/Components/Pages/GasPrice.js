import React from "react";
import { HeaderTitle, ItemValue, ItemSubTitle } from "../Style";
import { FetchGasPriceApi } from "../Api/UseApi";

const GasPrice = () => {
  const { results, loading, error } = FetchGasPriceApi();

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
