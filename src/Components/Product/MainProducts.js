import React, { } from 'react'
import Products from './Products'
import Sidebar from './Sidebar'
const MainProducts=()=> {
    return (
        <div className="container-fluid p-0 ">
            <div className="row col-12  d-flex justify-content-center ">
                <div className=" col-12 col-md-3  m-1 px-0 ">
                    <Sidebar />
                </div>
                <div className="row  col-12 col-md-9 justify-content-center mt-4">
                    <Products />
                </div>
            </div>
        </div>
    )
}
export default MainProducts
