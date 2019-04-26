import React from "react";
import { HeaderTitle, ItemSubTitle, ItemValueSmall } from "../Style";
import { FetchEtherBalance, FetchEtherPrice } from "../Api/UseApi";
import Web3 from "web3";

const EtherValue = () => {
  const { results, loading, error } = FetchEtherBalance();
  const { priceResults, priceloading, priceerror } = FetchEtherPrice();
  let web3 = window.web3;
  var value = web3.fromWei(results, "ether");
  console.log(value);
  const currentValue = value * priceResults;
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <HeaderTitle>EtherValue</HeaderTitle>
          <ItemSubTitle>balance</ItemSubTitle>
          <ItemValueSmall>{value}</ItemValueSmall>
          <ItemSubTitle>price</ItemSubTitle>
          <ItemValueSmall>{currentValue}</ItemValueSmall>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default EtherValue;
