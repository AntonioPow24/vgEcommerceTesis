import './home.css'
import { calculatePrice} from '../../../utils/cart/subTotalCartCalculate'
import Button from '../../../shared/Button'


const MarketingCard = ({dataProduct}) => {

  // Destructurar el dataProduct

  const {id,titleName,img,price, discount} = dataProduct


  // Estilos para el maquetado

  const containerStyle='marketingCard pl-[16px] pr-[20px] py-3 flex max-w-[420px] h-[228px] rounded-[16px] '

  const buttonStyle= 'bg-text-blueClient px-[16px] py-[7px] text-base text-text-white rounded-[6px] flex gap-3 items-center justify-center hover:bg-[#606bd1] transition-all duration-300'

  return (
    <article className={`${containerStyle}`}>
      <div className="flex max-w-[140px] min-w-[50px]">
        <img className='object-cover' src={img} alt={`imagen de ${titleName}`} />
      </div>

      <div className="flex flex-col justify-between py-2">
        <div className='mt-6 flex flex-col gap-4 bigPhone:mt-0 '>
          <h3 className='text-textDark  text-[17px] text-center font-bold bigPhone:text-[14px]'>{titleName}</h3>

          <div className="flex gap-3 items-center justify-center">

            <span className='text-2xl bigPhone:text-xl'>{`S/ ${calculatePrice(dataProduct).toFixed(2)}`}</span>

            <div className="flex items-center justify-center bg-red-400 rounded-full w-10 h-10">

              <span className=' text-[12px] text-text-white font-bold'>{`-${discount}%`}</span>

            </div>
          </div>
        </div>

        <Button classButton={`${buttonStyle}`}>
          <span>Agregar al carrito</span>
          <i className="fa-solid fa-cart-shopping mt-[2px]"></i>
        </Button>

      </div>
    </article>
  )
}

export default MarketingCard
