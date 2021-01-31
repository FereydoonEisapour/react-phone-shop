import React, { useContext, useEffect } from 'react'
import MainProducts from './../Components/Product/MainProducts'
import ProductContext from './../Contexts/products'

import { storeProducts } from './../data'
function Home() {
    const productContext = useContext(ProductContext)
    useEffect(() => {
        productContext.dispatch({ type: 'init_product', payload: storeProducts })
    }, [])
    return (
        <>
            <MainProducts />
        </>
    )
}

export default Home
