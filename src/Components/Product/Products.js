import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "./../../Contexts/products";

const Products = () => {
  const productContext = useContext(ProductContext);
  return (
    <>
      {productContext.tempProducts.length === 0 ? (
        <h1 style={{ padding: "200px" }}>No items matched </h1>
      ) : (
        productContext.tempProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
          />
        ))
      )}
    </>
  );
};

export default Products;
