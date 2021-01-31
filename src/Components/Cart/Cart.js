import React, { useContext } from 'react'
import CartList from './CartList'
import CartTotal from './CartTotol'
import ProductContext from '../../Contexts/products'
function Cart() {
    const productContext = useContext(ProductContext)
    let inCartsProducts = productContext.tempProducts.filter(item=>item.inCart === true)
    return (
        <div className="container-fluid col-12  ">
            <div className="row  p-4 d-flex justify-content-center">
                <div className=" col-12 col-md-8   ">
                    <CartList />
                </div>
                <div className="col-12 col-md-4">
                    {inCartsProducts.length === 0 ?
                        ''
                        : <CartTotal />
                    }
                </div>
            </div>
        </div>
    )
}
export default Cart
