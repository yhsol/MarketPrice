import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "fb2398f0003757361045d72497fe13c3",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetails: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos,similar"
      }
    }),
  search: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  TVDetails: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos,similar"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

const exaApi = axios.create({
  baseURL: "https://api.idax.pro/api/v2/signalr",
  method: "post",
  crossDomain: true,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json, text/plain, */*",
    "accept-language": "en-us",
    "User-Agent": "PostmanRuntime/7.11.0",
    "Cache-Control": "no-cache",
    "Postman-Token":
      "4b0ae8e5-6fad-4928-a9b0-39d751d68fc6,2c0c4bd6-bd08-45dc-858b-4b98ab0f22a3",
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
  // timeout: 1000,
  // headers: {
  //   "User-Agent": "PostmanRuntime/7.11.0",
  //   Accept: "*/*",
  //   "Cache-Control": "no-cache",
  //   "Postman-Token":
  //     "aa4bec6d-9ba8-4db7-8b7b-facbbe04f895,3dc48a6a-def6-40b2-8e06-c1e1557d874c",
  //   Host: "www.etherchain.org",
  //   "accept-encoding": "gzip, deflate",
  //   Connection: "keep-alive",
  //   "cache-control": "no-cache"
  // }
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
      "/api?module=account&action=balance&address=0xAA5c4244F05c92781C4F259913319d8ba1aCF05E&tag=latest&apikey=ZV5Z6XBZ3GTM91K5JKBZDYUKWJTU7S194V"
    )
};

export const useEtherPriceApi = {
  ehterPriceApi: () => etherScanApi.get("/api?module=stats&action=ethprice")
};
