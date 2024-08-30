import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/ProductContext'
import ProductCardDetail from '../components/public/Shop/ProductDetail/ProductCardDetail'

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
    <section>

      <div className="bg-[#343a75] h-[496px] relative flex justify-center ">

        <section className=' w-full absolute bottom-[-145px] tablet:bottom-[-250px]  h-[450px] flex justify-center gap-10 items-start tablet:flex-col tablet:items-center tablet:gap-5 '>

          <div className="flex items-center justify-center gap-2 cursor-pointer backContainerProductDetail ">
            <i className="fa-solid fa-angle-left pt-1 text-text-white text-[22px]  transition-all duration-300 backProductDetail"></i>
            <span className='text-text-white text-[22px]  transition-all duration-300 backTextProductDetail '>Atras</span>
          </div>

          <ProductCardDetail key={product.id}  product={ product } />

          <div className="flex">
            <img src={ product.img } className='h-[450px] tablet:h-[300px]' />
          </div>
        </section>

      </div>

      <div className="bg-[#5862BE] min-h-[214px] tablet:min-h-[480px]"></div>

    </section>
  )
}

export default ProductDetail
