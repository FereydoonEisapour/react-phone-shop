import React, { useContext } from 'react'
import ProductContext from '../../Contexts/products'
function Sidebar() {
    const productContext = useContext(ProductContext)
    let sortByPriceDown = () => {
        productContext.dispatch({ type: 'sort_by_price_down', payload: '' })
    }
    let sortByPriceUp = () => {
        productContext.dispatch({ type: 'sort_by_price_up', payload: '' })
    }
    let AllProducts = (e) => {
        productContext.dispatch({ type: 'AllProducts', payload: e.target.value })
    }
    return (
        <div className="sidebar  container col-12 col-md-12  " id="sidebar">
            <div className="sidebar__content shadow   m-2 d-flex row justify-content-center" >
                <div className="mt-2">
                    Price
                <button className=" btn btn-primary w-100 mt-2" onClick={sortByPriceDown}> Down</button>
                    <button className=" btn btn-primary w-100 mt-2 " onClick={sortByPriceUp}> Up</button>
                </div>
                <div className="container mt-3  ">
                    <span>Brand  </span>
                    <div className="row  px-lg-3" onChange={AllProducts}>
                        <label className="d-flex justify-content-between py-1   w-100 mt-2 ">ALL
                    <input value="" type="radio" name="product" />
                        </label>
                        <label className="d-flex justify-content-between py-1   w-100">APPLE
                    <input value="APPLE" type="radio" name="product" />
                        </label>
                        <label className="d-flex justify-content-between py-1   w-100">GOOGLE
                    <input value="GOOGLE" type="radio" name="product" />
                        </label>
                        <label className="d-flex justify-content-between py-1   w-100">HUAWEI
                    <input value="HUAWEI" type="radio" name="product" />
                        </label>
                        <label className="d-flex justify-content-between py-1   w-100">SAMSUNG
                    <input value="SAMSUNG" type="radio" name="product" />
                        </label>
                        <label className="d-flex justify-content-between py-1   w-100">ONEPLUS
                    <input value="ONEPLUS" type="radio" name="product" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar

