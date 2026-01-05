import React from 'react'
import ProductsPageBar from './ProductsPageBar'
import GridViewProducts from './GridViewProducts'

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center">
        <ProductsPageBar/>
        <GridViewProducts/>
    </div>
  )
}

export default ProductsPage