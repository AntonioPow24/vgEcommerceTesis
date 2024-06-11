import { Link } from 'react-router-dom'
import Button from '../../../../shared/Button'
import { useCartContext } from '../../../../context/CartContext'
const ProductCard = ({ product, showToastMessage, openCart }) => {

    const { addProductToCart } = useCartContext()
    
    const { id, img, titleName, price, discount,category } = product


    // Funcion Agregar al Carrito
    const handleAddToCart = () => {
        addProductToCart( product )
        // showToastMessage( `${titleName} ${id}` , 'Producto agregado al carrito' )
        openCart()
    }


  return (
    <article className='bg-productCardBg px-[10px] rounded-[16px] py-[18px] flex flex-col gap-6 productCard relative justify-between items-center overflow-hidden'>
        <Link 
            className="flex flex-col z-[2]"
            to={`/tienda/${category}/${id}`}
        >
            <div className=" flex flex-col justify-center items-center">
                <div className="h-[226px]">
                    <img 
                        className='h-full object-cover'
                        src={ img } 
                    />
                </div>

                <h3 className='text-center font-medium text-textDark'>{titleName}</h3>
            </div>
        </Link>

        <div className="flex flex-col items-center gap-[21px] z-[2]">
            <span className='text-textDark text-center text-2xl font-medium'>S/ {price.toFixed(2)}</span>

            <Button
                classButton={`w-[182px] py-[6px] flex gap-2 items-center justify-center bg-appBgBlack rounded-[12px] hover:bg-[#424242] transition-all duration-300 hover:translate-y-[-3px]`}
                clickEvent={ handleAddToCart }
            >
                <span className=' text-text-white'>Agregar al carrito</span>
                <i className="fa-solid fa-cart-shopping text-text-white"></i>
            </Button>
        </div>

    </article>
  )
}

export default ProductCard
