import React, { useContext } from 'react'
import ProductContext from '../../Contexts/products'
import { Link } from 'react-router-dom'
function Cart(props) {
    let { img, title, price, count, } = props.products
    const productContext = useContext(ProductContext)
    let removeCart = () => {
        productContext.dispatch({ type: 'remove_cart', payload: { id: props.products.id } })
    }
    let idHandler = () => {
        productContext.dispatch({ type: 'id_handler', payload: { id: props.products.id } })
    }
    let increment = () => {
        productContext.dispatch({ type: 'increment', payload: { id: props.products.id } })
    }
    let decrement = () => {
        productContext.dispatch({ type: 'decrement', payload: { id: props.products.id } })
    }
    return (
        <div className="container-fluid">
            <div className="row col-12 d-flex justify-content-between shadow pt-3 mb-3" id="now">
                <div className="col-3 ">
                    <img className="card-img img-fluid w-100" src={img} alt="" />
                </div>
                <div className="col-9 d-flex row ">
                    <div className="">
                        <Link onClick={idHandler} to="/details" className="text-decoration-none" >
                            <h4>{title}</h4>
                        </Link>
                    </div>
                    <div className="">
                        <h5 className="text-muted mt-5 "> Price : <span >{price}</span> $ </h5>
                    </div>
                    <div className="mt-3 mb-2">
                        <button className="badge text-primary border-0  p-2 bg-white"
                            style={{ fontSize: "1.2rem" }}
                            onClick={count <= 1 ? removeCart : decrement}
                        >-</button>
                        <span className="h4 text-primary"> {count} </span>

                        <button className="badge text-primary border-0  p-2 bg-white"
                            style={{ fontSize: "1.2rem" }}
                            onClick={increment} >+</button>
                        <button className="btn btn-sm btn-danger ml-5"
                            onClick={removeCart}
                        >
                            Remove
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
