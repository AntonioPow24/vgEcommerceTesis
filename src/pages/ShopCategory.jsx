import React from 'react'
import { useParams } from 'react-router-dom'

const ShopCategory = () => {

    const { category } = useParams()
    console.log(category);

    const categories = {
        'siliconas':'Siliconas',
        'cerraduras y chapas':'Cerraduras y Chapas', 
        'cintas':'Cintas', 
        'accesorios de aluminio':'Accesorios de Aluminio',
        'puertas': 'Puertas',
        'artículos de ferretería': 'Artículos de Ferretería',
        'accesorios de acero': 'Accesorios de Acero'
    }

    const categoryTitle = categories[category] || 'Categoria Desconocida'

  return (
    <div>
        { categoryTitle }
    </div>
  )
}

export default ShopCategory
