import React, { useContext } from 'react'
import ProductContext from '../../../Contexts/products'
import DetailsItem from './DetailsItem'
function Details() {
    const productContext = useContext(ProductContext)
    return (
        <div>
            {productContext.tempDetails.map(product => < DetailsItem product={product} key={product.id} />)}
        </div>
    )
}

export default Details
