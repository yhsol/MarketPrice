import React, { useState, useEffect, useRef } from "react";
import {
  useExaApi,
  useGasPriceApi,
  useEtherScanApi,
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

export const BrnApi = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { data }
        } = await useExaApi.brnApi();
        setResults(data);
        // console.log(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const EveApi = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetchData() {
        const {
          data: { data }
        } = await useExaApi.eveApi();
        setResults(data);
        // console.log(data);
      }
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error };
};

export const FetchGasPrice = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { safeLow: result }
        } = await useGasPriceApi.gasPrice();
        setResults(result);
        // console.log(result.safeLow);
      };
      fetchData();
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

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { result }
        } = await useEtherBalanceApi.ehterBalanceApi();
        setResults(result);
        // console.log(result.safeLow);
      };
      fetchData();
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
  const [priceloading, setLoading] = useState(true);
  const [priceerror, setError] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const {
          data: { result }
        } = await useEtherPriceApi.ehterPriceApi();
        setPriceResults(result);
        // console.log(result.safeLow);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError("Can't find infomation!");
    } finally {
      setLoading(false);
    }
  }, []);
  // console.log(results);

  return { priceResults, priceloading, priceerror };
};
