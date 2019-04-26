import React from "react";
import { HeaderTitle, ItemValue, ItemSubTitle, ItemSub } from "../Style";
import { FetchEveApi } from "../Api/UseApi";

const EVE = () => {
  const { results, loading, error } = FetchEveApi();

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
