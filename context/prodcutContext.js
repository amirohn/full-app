import {useState, useEffect, createContext} from "react";
import {getProducts} from "../services/api/api";

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      setProducts(await getProducts());
    };
    getApi();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
