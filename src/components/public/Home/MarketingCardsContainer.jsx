
import { dataProducts } from '../../../data/dataProducts'
import findTopTwoProducts from '../../../utils/findTopTwoProducts'

import Button from '../../../shared/Button'
import MarketingCard from './MarketingCard'

import { useNavigate } from 'react-router-dom'
import { useNavigateTo } from '../../../hooks/useNavigateTo'



const MarketingCardsContainer = () => {

  // USEROUTER
  const navigate = useNavigate()


  // Estilos para el Maquetado
  const containerStyle= 'bg-appBgBlack px-[132px] 685:px-[10px]  flex justify-center  py-[52px] '
  const buttonStyle ='px-[33px] flex items-center justify-center  rounded-[10px] text-xl py-[10px] gap-[12px] w-[210px] transitionn-all duration-300 bigPhone:w-[260px]'



  // Buscaremos 2 Productos que tengan la mayor valorazacion, en caso de empate, se usara el de mayor precio, usaremos la DATAPRODUCTS
  const topTwoProducts = findTopTwoProducts(dataProducts)


  // Funcion para el navigate
  const handleNavigate = (path) =>{
    useNavigateTo(navigate, path)
  }

  return (
    <section className={`${containerStyle} 1570:flex-col-reverse 1570:items-center 1570:gap-12`}>
          <div className="px-[50px] flex gap-[52px] 1570:px-[20px] 1070:flex-col bigTablet:gap-8">
            {
              topTwoProducts && topTwoProducts.map( item => <MarketingCard dataProduct={item} key={item.id}/>)
            }
          </div>


          <div className="flex  1570:items-center flex-col pt-4 gap-6">
            <h3 className='text-text-white text-[35px] tablet:text-center'>
              Conoce todos nuestros <span className='text-skyBlueApp font-medium'>productos!</span>
            </h3>

            <div className="flex gap-[27px] bigPhone:flex-col">

              <Button 
                classButton={`${buttonStyle} bg-skyBlueApp text-textDark hover:bg-[#61d1f3]`}
                clickEvent={() => handleNavigate('/tienda/siliconas')}
              >
                <span>Ir a la tienda</span>
                <i className="fa-solid fa-bag-shopping"></i>
              </Button>



              <Button 
                classButton={`${buttonStyle} bg-text-blueClient text-text-white hover:bg-[#606bd1] `}
              >
                <span>Registrarse</span>
                <i className="fa-solid fa-user-plus"></i>
              </Button>

            </div>

          </div>
    </section>
  )
}

export default MarketingCardsContainer
