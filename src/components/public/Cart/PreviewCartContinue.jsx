


import { itemSubTotal } from '../../../utils/cart/subTotalCartCalculate'
import Button from '../../../shared/Button'
import { useNavigate } from 'react-router-dom'
import { useNavigateTo } from '../../../hooks/useNavigateTo'



const PreviewCartContinue = ({dataCart,handleClosePreviewCart}) => {

  // USEROUTER
  const navigate = useNavigate()


  // Variables
  const totalItems = dataCart.length

  const expressionItem = totalItems > 1 ? 'items' : 'item'

  
  //ARREGLO DE LOS PRECIOS CON EL DESCUENTO ACTUALIZADOS
  const pricesArray = dataCart.map( item => itemSubTotal(item))
  
  // SUBTOTAL (SUMA DE LOS PRECIOS EN PRICEARRAY)
  const subTotalPrice = pricesArray.reduce((acumulate , value) => acumulate + value,0)




  //Estilos para el maquetado
  const continueButton = `flex justify-center items-center gap-3 flex-1 rounded-3xl py-3  transition-all duration-300 ${dataCart.length ? 'bg-text-blueClient hover:bg-[#5f6ad3] hover:translate-y-[-2px]' : 'bg-gray-500 cursor-default' } `

  

  // FUNCIONES
  const handleNavigate= (path) =>{

    if(dataCart.length){
      useNavigateTo( navigate, path )
      handleClosePreviewCart()
    }
  }
  
  return (
    <div className={`px-[20px] pt-6 pb-3 flex flex-col gap-4`}>
      <div className="flex justify-between text-textDark text-xl">
        <p className=''>Subtotal ( {dataCart.length} {expressionItem} )</p>

        <span>S/ {subTotalPrice.toFixed(2)}</span> 
      </div>

      <div className="flex">
        <Button classButton={continueButton}  clickEvent={() => handleNavigate('tienda/siliconas')} >
          <span className='text-text-white text-xl font-medium mb-1'>Continuar compra</span>
          <i className=" text-xl fa-solid fa-cart-shopping"></i> 
        </Button>
      </div>
    </div>
  )
}

export default PreviewCartContinue
