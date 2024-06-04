import { categoryProducts } from '../../../../data/categoryProducts'
import CategoryFilter from './CategoryFilter'

const FilterContainer = ( { categoryActive, changeFilter } ) => {


  return (
    <div className='flex flex-col'>
      {
        categoryProducts.map( category => 
          <CategoryFilter 
            category={ category } 
            key={ category }  
            categoryActive= { categoryActive }
            changeFilter={ changeFilter } 
          /> )
      }
    </div>
  )
}

export default FilterContainer
