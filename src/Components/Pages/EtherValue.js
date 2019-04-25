import React, { useState } from "react";
import { HeaderTitle, ItemValue, ItemSubTitle, ItemValueSmall } from "../Style";
import { useInterval, FetchEtherBalance } from "../Api/UseApi";

const EtherValue = () => {
  const { results, loading, error } = FetchEtherBalance();
  const [delay, setDelay] = useState(1000);

  // FetchGasPrice();

  useInterval(() => FetchEtherBalance, !loading ? delay : null);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <HeaderTitle>EtherValue</HeaderTitle>
          <ItemSubTitle>balance and price</ItemSubTitle>
          <ItemValueSmall>
            {results && results.length > 0 && results}
          </ItemValueSmall>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default EtherValue;
