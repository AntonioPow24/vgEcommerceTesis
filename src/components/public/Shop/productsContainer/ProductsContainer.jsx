import { useEffect, useState } from 'react'
import { dataProducts } from '../../../../data/dataProducts'
import { useProductsContext } from '../../../../context/ProductContext'
import ProductCard from './ProductCard'
import ToastNotification from '../ToastNotification'

const ProductsContainer = ({ categoryActive }) => {


  const [ showToast, setShowToast ] = useState( false ) // mostrar toast
  const [ toastMessage, setToastMessage ]= useState( '' ) // mensaje
  const [ typeToast, setTypeToast ] = useState('')

  const { products } = useProductsContext()

  const [filteredProducts, setFilteredProducts] = useState([])



  // AQUI TRAEREMOS LA DATA DEL CONTEXT PARA FILTRARLA DEPENDE LA CATEGORIA ACTIVA
  useEffect( () => {
    // Filtrar los productos por categoriaActiva
    const filtered = products.filter(product => product.category === categoryActive)
    
    setFilteredProducts( filtered )
  }, [ categoryActive, products ])





  // Funcion para mostrar el toast con un mensaje
  const showToastMessage = ( toastMessage, typeToast ) => {
    setTypeToast( typeToast )
    setToastMessage( toastMessage )
    setShowToast( true )
  }

  // Funcion cerrar el Toast
  const handleCloseToast = () => {
    setShowToast(false)
  }


  return (
    <section className='px-[65px] py-[54px] flex-1 580:px-[20px]'>
      
      <div className="containerProducts">
        {
          filteredProducts.map( product => 
            <ProductCard key={ product.id} product={ product }  showToastMessage={ showToastMessage } />
          )
        }
      </div>

      {/* Mostrar el toast dependiendo su estado */}
        {showToast && <ToastNotification message={ toastMessage } type={ typeToast } onClose={ handleCloseToast }  /> }
    </section>
  )
}

export default ProductsContainer
