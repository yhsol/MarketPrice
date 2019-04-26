import { useState, useEffect, useRef } from "react";
import {
  useExaApi,
  useGasPriceApi,
  useEtherBalanceApi,
  useEtherPriceApi
} from "./Api";

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export const FetchBrnApi = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useInterval(async () => {
    const {
      data: { data }
    } = await useExaApi.brnApi();
    if (data) setResults(data);
    // console.log(data);
  }, 1000);

  useEffect(() => {
    try {
      setLoading(true);
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const FetchEveApi = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useInterval(async () => {
    const {
      data: { data }
    } = await useExaApi.eveApi();
    if (data) setResults(data);
    // console.log(data);
  }, 1000);

  useEffect(() => {
    try {
      setLoading(true);
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const FetchGasPriceApi = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useInterval(async () => {
    const {
      data: { safeLow: result }
    } = await useGasPriceApi.gasPrice();
    if (result) setResults(result);
    // console.log(result);
  }, 1000);

  useEffect(() => {
    try {
      setLoading(true);
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);
  // console.log(results);

  return { results, loading, error };
};

export const FetchEtherBalance = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useInterval(async () => {
    const {
      data: { result }
    } = await useEtherBalanceApi.ehterBalanceApi();
    if (result) setResults(result);
    // console.log(results);
  }, 1000);

  useEffect(() => {
    try {
      setLoading(true);
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);
  // console.log(results);

  return { results, loading, error };
};

export const FetchEtherPrice = () => {
  const [priceResults, setPriceResults] = useState(null);
  const [priceloading, setPriceLoading] = useState(true);
  const [priceerror, setPriceError] = useState(null);

  useInterval(async () => {
    const {
      data: {
        result: { ethusd: result }
      }
    } = await useEtherPriceApi.ehterPriceApi();
    if (result) setPriceResults(result);
    // console.log(result);
  }, 1000);

  useEffect(() => {
    try {
      setPriceError(true);
    } catch (error) {
      console.error(error);
      setPriceLoading("Can't find infomation!");
    } finally {
      setPriceError(false);
    }
  }, []);
  // console.log(results);

  return { priceResults, priceloading, priceerror };
};

var api = require("etherscan-api").init("ZV5Z6XBZ3GTM91K5JKBZDYUKWJTU7S194V");
var balance = api.account.balance("0xd0791e4E384aDec5F3C5fb5f4D0C17Ac8Cb47EDE");
balance.then(function(balanceData) {
  console.log(balanceData);
});
