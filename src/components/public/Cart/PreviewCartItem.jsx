import './previewCart.css'

import { itemSubTotal, priceBefore } from '../../../utils/cart/subTotalCartCalculate'

import Button from '../../../shared/Button'
import { useCartContext } from '../../../context/CartContext'



const PreviewCartItem = ({classComponent , itemCart}) => {

  const { id, titleName, img, price, quantity, discount }= itemCart


  // Destructuracion del CartContext
  const { increaseProductCount, decreaseProductCount, deleteProduct } = useCartContext()





  // Estilos para el maquetado
  const flexAllCenter = 'flex items-center justify-center'
  const quantityButton = 'px-3 transition-all duration-300 text-text-blueClient hover:text-text-white hover:bg-text-blueClient'




  return (
    <article className={`${classComponent} flex gap-5 previewCartItem`}>

      <div className={`${flexAllCenter} max-w-[70px] w-full`}>
        <img src={img} alt="" className='w-full  object-fill'/>
      </div>

      <div className="flex flex-col flex-1 justify-between py-[2px] gap-3">
        <div className="flex items-start justify-between">
          <div className='flex flex-col '>

            <span className='text-textDark text-[14px] font-medium'>{ titleName }</span>
            <span className='text-text-blueClient text-[12px]'>Este producto tiene descuento del {discount}%</span>
          </div>
          <Button 
            classButton={`${flexAllCenter}`}
            clickEvent={() => deleteProduct(id)}
          >
            <i className="fa-solid fa-trash text-logOut mt-1"></i>
          </Button>

        </div>

        <div className="flex items-center justify-between ">

          <div className="flex border border-[#c2c2c2]">

            <Button 
              classButton={`${flexAllCenter} ${quantityButton}`} 
              clickEvent={() => decreaseProductCount(id)} 
            >
              <i className=" fa-solid fa-minus"></i>
            </Button>

            <span className='text-textDark px-3 border-l border-r border-[#c2c2c2]'>{quantity}</span>

            <Button 
              classButton={`${flexAllCenter} ${quantityButton}`}
              clickEvent={() => increaseProductCount(id)}
            >
              <i className=" fa-solid fa-plus"></i>
            </Button>

          </div>

          <div className="flex gap-2">
            <span className='text-text-blueClient font-medium text-[18px]'>S/{itemSubTotal(itemCart).toFixed(2)}</span>
            <span className='text-gray-500  text-[18px] line-through'>S/{priceBefore(price,quantity).toFixed(2)}</span>
          </div>
        </div>

      </div>





    </article>
  )
}

export default PreviewCartItem
