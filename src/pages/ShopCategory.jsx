import { useNavigate, useParams } from 'react-router-dom'
import HeaderShop from '../components/public/Shop/HeaderShop';
import '../components/public/Shop/shop.css'
import AsideShop from '../components/public/Shop/asideShop/AsideShop';
import ProductsContainer from '../components/public/Shop/productsContainer/ProductsContainer';
import { useEffect, useState } from 'react';


const ShopCategory = () => {

  const { category } = useParams()

  const navigate = useNavigate()

  const [categoryActive, setCategoryActive] = useState( category )

  useEffect( () => {
    setCategoryActive( category )
  },[ category ])

    
    
    
    const categories = {
      'siliconas':'Siliconas',
      'cerraduras y chapas':'Cerraduras y Chapas', 
      'cintas':'Cintas', 
      'accesorios de aluminio':'Accesorios de Aluminio',
      'puertas': 'Puertas',
      'artículos de ferretería': 'Artículos de Ferretería',
      'accesorios de acero': 'Accesorios de Acero'
    }
    
    // const categoryTitle = categories[category] || 'Categoria Desconocida'
    
    
    const changeFilter = ( category ) => {
      setCategoryActive( category )

      navigate( `/tienda/${category}` )
    }


  return (
    <section>
        
        <HeaderShop category={ category } />

        <main className='flex bg-appBgBlack bigTablet:flex-col'>
            <AsideShop categoryActive={ categoryActive } changeFilter={ changeFilter } />

            <ProductsContainer categoryActive={ categoryActive } />
        </main>

    </section>
  )
}

export default ShopCategory
