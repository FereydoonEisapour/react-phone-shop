import React, { useContext } from 'react'
import ProductContext from '../../Contexts/products'
function CartTotol() {
    const productContext = useContext(ProductContext)
    let allInCarts=  productContext.tempProducts.filter(item=>item.inCart === true)
    let Total=0           
    allInCarts.forEach(function(item){
     return   Total+=item.total
    })
    return (
        <div className="shadow offset-1 col-10 text-center">
            <h4 className="p-4 text-muted "> Subtotal : <span className=" text-primary"> {Total}</span> $</h4>
            <button className="btn btn-primary w-75 m-4">Checkout</button>
        </div>
    )
}
export default CartTotol
