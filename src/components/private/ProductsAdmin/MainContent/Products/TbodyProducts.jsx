import React from 'react'
import ProductTRCard from './ProductCard/ProductTRCard'

const TbodyProducts = ({ filteredProducts }) => {
  return (
    <tbody>
      {
        filteredProducts.length > 0 ?

          filteredProducts.map( product => 

            <ProductTRCard {...product} />

          )

        :

        'no hay'
      }
    </tbody>
  )
}

export default TbodyProducts
