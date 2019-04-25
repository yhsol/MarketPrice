import React, { useState, useEffect } from "react";
import { HeaderTitle, ItemValue, ItemSubTitle, ItemSub } from "../Style";
import { useInterval, EveApi } from "../Api/UseApi";

const EVE = () => {
  const { results, loading, error } = EveApi();
  const [delay, setDelay] = useState(1000);

  // EveApi();

  useInterval(() => EveApi, !loading ? delay : null);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <HeaderTitle>
            EVE<ItemSub>LATEST PRICE(ETH)</ItemSub>
          </HeaderTitle>
          <ItemValue>
            {results && results.length > 0 && results[0].price}
          </ItemValue>

          <ItemSubTitle>
            {results && results.length > 0 && results[0].time}
          </ItemSubTitle>
          <div>{error && error}</div>
        </div>
      )}
    </>
  );
};

export default EVE;
