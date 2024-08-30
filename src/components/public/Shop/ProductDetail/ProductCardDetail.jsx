import React, { useEffect, useState } from 'react'
import { calculateStars } from '../../../../utils/shop/calculateStars'
import Button from '../../../../shared/Button'
import { useCartContext } from '../../../../context/CartContext'
import { discountPrice } from '../../../../utils/cart/subTotalCartCalculate'

const ProductCardDetail = ({ product }) => {

    const {id, titleName, reviews, description, currentStock, price, discount, category, img } = product

    const { openCart, addProductToCart }= useCartContext()

    const [starsReview, setStarsReview] = useState( calculateStars( reviews ) )


    // const [quantityAdd, setQuantityAdd] = useState(1)

        // Funcion Agregar al Carrito
    const handleAddToCart = () => {
      addProductToCart( product )

      openCart()
    }


  return (
    <article>
      <div className="flex  flex-col gap-[14px] w-[340px] h-[446px] bg-[#5862BEDE] py-[16px] px-[22px] rounded-[12px] cardDetail ">

        <div className="flex justify-start">
            <span className='text-[#F9F9F9A8] text-[18px]'>Vidrieria Garatea</span>
        </div>

        <div className=" flex flex-col gap-[10px]">
            <h2 className='text-text-white text-3xl tablet:text-2xl'>{titleName}</h2>
            <div className="flex items-center gap-3">

                <div className="flex gap-1">
                    {Array.from({ length: starsReview }, (_, index) => (
                        <i className="fa-solid fa-star text-xl text-[#171717B3]" key={index} ></i>
                    ))}
                </div>
                <span className='text-textDark'>{ reviews } reviews</span>
            </div>
        </div>

        <div className="">
            <p className='text-textWhiteTransparent text-[14px]'>
                { description }
            </p>
        </div>

        <div className="flex justify-between mt-1 ">
            {/* <div className="flex flex-col gap-[6px]">
              <span className='text-[#2E3469] text-xl'>Cantidad</span>
              <div className="flex">
                <div className="flex justify-between items-center">
                  <i class="fa-solid fa-plus text-xl text-textWhiteTransparent"></i>
                </div>
              </div>
            </div> */}

              <div className="flex justify-between flex-col">
                <span className='text-[#2E3469] text-xl'>Precio</span>
                <span className='text-[30px] text-textWhiteTransparent'>S/{ discountPrice( product ) }</span>
              </div>

              <div className="flex justify-between flex-col">
                <span className='text-[#2E3469] text-xl'>Stock</span>

                <span className='text-[30px] text-textWhiteTransparent'>{ currentStock }</span>
              </div>
        </div>

        <Button
          classButton={'bg-appBgWhite py-[4px] rounded-[6px] mt-auto transition-all duration-300 hover:translate-y-[-2px] relative flex items-center justify-center overflow-hidden buttonProductCartAdd'}
          clickEvent={ handleAddToCart }
        >
          <span className='text-[18px]'>Agregar al carrito</span>
          <i className="fa-solid fa-cart-shopping absolute text-textDark right-[-25px] text-xl"></i>
        </Button>

      </div>
    </article>
  )
}

export default ProductCardDetail
