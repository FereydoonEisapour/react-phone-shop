import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./../../Contexts/products";
import { PropTypes } from "prop-types";
const Product = ({ id, img, title, price }) => {
  const productContext = useContext(ProductContext);
  const idHandler = () => {
    productContext.dispatch({ type: "id_handler", payload: { id } });
  };

  return (
    <div className=" card text-center shadow m-2 col-12 " style={{ width: " 18rem" }} id="cart">
      <img className="card-img-top" src={img} alt="" />
      <div className="card-body ">
        <Link onClick={idHandler} to="/details" className="text-decoration-none">
          <h5 className="card-title ">{title}</h5>
        </Link>
        <div className="text-muted">Price : {price}$</div>
      </div>
    </div>
  );
};
Product.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};
export default Product;
