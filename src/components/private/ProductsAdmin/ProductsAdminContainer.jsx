import { useState } from "react"
import useSearchProduct from "../../../hooks/featuresHooks/useSearchProduct"
import ProductsMain from "./MainContent/ProductsMain"
import ProductsFeatures from "./ProductsFeatures"

const ProductsAdminContainer = () => {

  const [categoryFilter, setCategoryFilter] = useState('todos')
  const [statusFilter, setStatusFilter] = useState(true)

  const changeCategory = ( newCategory ) => setCategoryFilter( newCategory )
  const changeStatus = ( newStatus ) => setStatusFilter( newStatus === 'habilitado'? true : false )

  const { query, handleSearch, filteredProducts } = useSearchProduct( categoryFilter, statusFilter )

  return (
    <section className="px-[24px] pt-[24px] flex flex-col gap-[22px] flex-1">
      <ProductsFeatures query={ query } handleSearch={ handleSearch } />

      <ProductsMain  
        filteredProducts={ filteredProducts } 
        categoryFilter={ categoryFilter } 
        statusFilter={ statusFilter } 
        changeCategory={ changeCategory }
        changeStatus={ changeStatus } 
      />
    </section>
  )
}

export default ProductsAdminContainer
