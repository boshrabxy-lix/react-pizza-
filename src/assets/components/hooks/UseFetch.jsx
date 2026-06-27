import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function UseFetch(url) {
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, SetError] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data.recipes);
      console.log(response.data.data.recipes);
    } catch (error) {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
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
