import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from './../../Contexts/products'

function Product(props) {
    let { img, title, price} = props.product
    const productContext = useContext(ProductContext)
    let idHandler = e => {
        productContext.dispatch({ type: 'id_handler', payload: { id: props.product.id } })
    }

    return (
        <div className=" card text-center shadow m-2 col-12 " style={{ width: " 18rem" }} id="cart" >
            <img className="card-img-top" src={img} alt="" />
            <div className="card-body ">
                <Link onClick={idHandler} to="/details" className="text-decoration-none" >
                    <h5 className="card-title ">{title}</h5>
                </Link>
                <div className="text-muted">
                    Price : {price}$</div>
            </div>
        </div>
    )
}

export default Product
