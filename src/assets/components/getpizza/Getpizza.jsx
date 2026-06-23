import React, { useEffect, useState } from "react";
import axios from 'axios';
import Loader from "../loader/Loader";

export default function Getpizza() {
  const [posts, setPosts] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://forkify-api.jonas.io/api/v2/recipes?search=pizza",
      );
      console.log(response.data);
      setPosts(data.data.recipes);
    } catch (error) {
      setError("error , try ...");
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoader) {
    return <Loader/>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
}
