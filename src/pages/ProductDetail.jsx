import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/ProductContext'

const ProductDetail = () => {

    const { productId } = useParams()
    const { findProductById }= useProductsContext()

    const [ product, setProduct ] = useState( null )

    useEffect( () => {

      const productFound = findProductById( Number(productId) )
      setProduct( productFound )

    },[ productId, findProductById ])
     

  // Si el producto aún no se ha cargado, mostramos un mensaje de carga
  if (!product) {
     return <div>Cargando...</div>;
  }


  return (
    <div>
      <span>{product.titleName}</span>
    </div>
  )
}

export default ProductDetail
