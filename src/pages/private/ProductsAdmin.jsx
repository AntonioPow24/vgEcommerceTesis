import React from 'react'
import HeaderBar from '../../shared/private/header/HeaderBar'
import ProductsAdminContainer from '../../components/private/ProductsAdmin/ProductsAdminContainer'

const ProductsAdmin = () => {
  return (
    <section className='max-h-[100dvh] h-full flex flex-col overflow-hidden'>
      <HeaderBar titleSection={'Productos'} quantity={96} />

      <ProductsAdminContainer />

    </section>
  )
}

export default ProductsAdmin
