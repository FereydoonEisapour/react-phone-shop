import React, { useContext, useEffect } from "react";
import MainProducts from "./../Components/Product/MainProducts";
import ProductContext from "./../Contexts/products";
import { storeProducts } from "../data/data";
const Home = () => {
  const productContext = useContext(ProductContext);
  useEffect(() => {
    productContext.dispatch({ type: "init_product", payload: storeProducts });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <MainProducts />;
};

export default Home;
