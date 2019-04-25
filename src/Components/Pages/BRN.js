import React, { useState } from "react";
import { HeaderTitle, ItemValue, ItemSubTitle, ItemSub } from "../Style";
import { BrnApi, useInterval } from "../Api/UseApi";

const BRN = () => {
  const { results, loading, error } = BrnApi();
  const [delay, setDelay] = useState(1000);

  // BrnApi();

  // useInterval(() => console.log("brn"), !loading ? delay : null);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <HeaderTitle>
            BRN<ItemSub>LATEST PRICE(ETH)</ItemSub>
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

export default BRN;
