import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data.products;
};
