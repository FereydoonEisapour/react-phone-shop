import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../Contexts/products";
import CartItem from "./CartItem";
const CartList = () => {
  const productContext = useContext(ProductContext);
  let inCartsProducts = productContext.tempProducts.filter((item) => item.inCart === true);
  return (
    <>
      {inCartsProducts.length === 0 ? (
        <h1 style={{ padding: "100px" }}>
          No Product in Cart , <Link to="/">add Product</Link>
        </h1>
      ) : (
        inCartsProducts.map((products) => (
          <CartItem
            key={products.id}
            img={products.img}
            title={products.title}
            price={products.price}
            count={products.count}
            id={products.id}
          />
        ))
      )}
    </>
  );
};

export default CartList;
