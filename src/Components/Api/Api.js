import axios from "axios";

const exaApi = axios.create({
  baseURL: "https://api.idax.pro/api/v2/signalr",
  method: "post",
  crossDomain: true,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json, text/plain, */*",
    "accept-language": "en-us",
    Host: "api.idax.pro",
    cookie: "__cfduid=d9367f839d03103cf348b8ecd2414a1691556081540",
    "accept-encoding": "gzip, deflate",
    "content-length": "25",
    Connection: "keep-alive",
    "cache-control": "no-cache"
  },
  data: '{"pairName":"BRN_ETH"}\r\n'
});

export const useExaApi = {
  brnApi: () =>
    exaApi.post("/getTradeByPair", {
      pairName: "ETH_BTC"
    }),
  eveApi: () =>
    exaApi.post("/getTradeByPair", {
      pairName: "EVE_USDT"
    })
};

const gasPriceApi = axios.create({
  baseURL: "https://www.etherchain.org/api",
  method: "GET",
  crossDomain: true
});

export const useGasPriceApi = {
  gasPrice: () => gasPriceApi.get("/gasPriceOracle")
};

const etherScanApi = axios.create({
  baseURL: "https://api.etherscan.io",
  method: "GET",
  crossDomain: true
});

export const useEtherBalanceApi = {
  ehterBalanceApi: () =>
    etherScanApi.get(
      "/api?module=account&action=balance&address=0xd0791e4E384aDec5F3C5fb5f4D0C17Ac8Cb47EDE&tag=latest&apikey=ZV5Z6XBZ3GTM91K5JKBZDYUKWJTU7S194V"
    )
};

export const useEtherPriceApi = {
  ehterPriceApi: () => etherScanApi.get("/api?module=stats&action=ethprice")
};
