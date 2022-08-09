import React, { useContext } from "react";
import ProductContext from "../../../Contexts/products";
import DetailsItem from "./DetailsItem";
const Details = () => {
  const productContext = useContext(ProductContext);
  return (
    <>
      {productContext.tempDetails.map((product) => (
        <DetailsItem
          key={product.id}
          img={product.img}
          title={product.title}
          price={product.price}
          company={product.company}
          info={product.info}
          inCart={product.inCart}
          id={product.id}
        />
      ))}
    </>
  );
};

export default Details;
