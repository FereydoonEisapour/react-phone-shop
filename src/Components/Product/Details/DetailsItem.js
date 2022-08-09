import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./../../../Contexts/products";
import PropTypes from "prop-types";
const DetailsItem = ({ img, title, price, company, info, inCart, id }) => {
  const productContext = useContext(ProductContext);
  const addToCart = () => {
    productContext.dispatch({ type: "add_to_cart", payload: { id: id } });
  };
  return (
    <div className="container">
      <div className="deatails row  m-3 shadow">
        <div className="left col-12 col-sm-12 col-md-5 col-lg-5">
          <img className="img-fluid w-auto" src={img} alt="" />
        </div>
        <div className="right  col-12 col-sm-12 col-md-7 col-lg-7 mt-4 p-3">
          <div className="h2">
            <h1>{title}</h1>
          </div>
          <div className="h5">
            Made By : <span className="h4">{company}</span>
          </div>
          <div className=" h4 d-sm-none d-none d-md-block">
            info :
            <div className="mb-2 p-1 w-100 d-sm-none d-none d-md-block">
              <p className=" w-75 h6 ">{info}</p>
            </div>
          </div>
          <div className="my-3">
            <h4>Price :{price} $</h4>{" "}
          </div>
          <div>
            <Link to="/cartroute">
              <button
                onClick={addToCart}
                disabled={inCart ? "disabled" : ""}
                className="btn btn-primary mr-2"
              >
                {!inCart ? "Add To Cart" : "in Cart"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
DetailsItem.prototype = {
  id: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  company: PropTypes.string,
  info: PropTypes.string,
  inCart: PropTypes.bool,
};
export default DetailsItem;
