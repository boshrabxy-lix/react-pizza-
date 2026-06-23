import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, SetError] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data.recipes);
      console.log(response.data.data.recipes);
    } catch (error) {
      console.log(error);
      SetError("err");
    } finally {
      setIsLoader(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, isLoader, error };
}
