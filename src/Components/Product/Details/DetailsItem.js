import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './../../../Contexts/products'

function DetailsItem(props) {
    let { img, title, price, company, info, inCart } = props.product
    const productContext = useContext(ProductContext)
    let addToCart = () => {
        productContext.dispatch({ type: 'add_to_cart', payload: { id: props.product.id } })
        console.log('add to car');
    }
    return (
        <div className="container">
            <div className="deatails row  m-3 shadow">
                <div className="left col-12 col-sm-12 col-md-5 col-lg-5">
                    <img className="img-fluid w-auto" src={img} alt="" />
                </div>
                <div className="right  col-12 col-sm-12 col-md-7 col-lg-7 mt-4 p-3">
                    <div className="h2"><h1>{title}</h1></div>
                    <div className="h5">  Made By : <span className="h4">{company}</span></div>
                    <div className=" h4 d-sm-none d-none d-md-block"> info :
                    <div className="mb-2 p-1 w-100 d-sm-none d-none d-md-block">
                            <p className=" w-75 h6 ">{info}</p>
                        </div>
                    </div>
                    <div className="my-3"> <h4>Price :{price} $</h4> </div>
                    <div >
                        <Link to="/cartroute">
                            <button
                                onClick={addToCart}
                                disabled={inCart ? "disabled" : ""}
                                className="btn btn-primary mr-2">
                                {!inCart ? "Add To Cart" : "in Cart"}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DetailsItem
