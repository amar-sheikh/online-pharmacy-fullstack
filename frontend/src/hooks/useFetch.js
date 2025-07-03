import { useEffect, useState } from "react";
import { FetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await FetchDataFromApi(endpoint);
        setData(res);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    makeRequest();
  }, [endpoint]);

  return { data };
};

export default useFetch;
