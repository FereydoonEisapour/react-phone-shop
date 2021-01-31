import React, { useContext } from 'react'
import Product from './Product'
import ProductContext from './../../Contexts/products'


function Products() {
    const productContext = useContext(ProductContext)
    return (
        <>
            {productContext.tempProducts.length === 0 ? <h1 style={{ padding: '200px' }}>No items matched </h1> :
                productContext.tempProducts.map(product => < Product product={product} key={product.id} />)}

        </>
    )
}

export default Products
