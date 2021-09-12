import axios from "axios";
import { useState, useEffect } from "react";

const useProduct = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchDetailData = async () => {
    try {
      const { data } = await axios.get(url);
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading };
};

export default useProduct;
