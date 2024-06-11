

import '../../../styles/buttonStyle.css'

import Button from '../../../shared/Button'
import { useNavigateTo } from '../../../hooks/useNavigateTo'
import { useNavigate } from 'react-router-dom'

const PreviewCartEmpty = ({toggleCart}) => {

  const navigate = useNavigate()

  const handleNavigate = (path) =>{
    useNavigateTo ( navigate, path )
    toggleCart()
  }

  return (
    <div className='flex justify-center flex-col text-center py-6 px-[20px] gap-2'>
      <span className='text-2xl text-text-blueClient font-bold'>Tu carrito está vacío!</span>

      <span className='text-[14px] text-textDark'>Agrega productos para poder realizar una compra</span>

      <Button 
        classButton={`bg-text-blueClient text-white mt-6 py-3 rounded-[5px] btnGoShop`}
        clickEvent={() => handleNavigate('/tienda/siliconas')}
      >
        <span className='text-xl'>Comprar ahora</span>

      </Button>

    </div>
  )
}

export default PreviewCartEmpty
