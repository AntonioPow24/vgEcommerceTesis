import FilterContainer from './FilterContainer'
import SearchProduct from './SearchProduct'

const AsideShop = ( { categoryActive, changeFilter } ) => {
  return (
    <aside className=' py-[26px] flex flex-col gap-[40px] bg-[#232323]'>
      
        <SearchProduct />

        <FilterContainer  categoryActive={ categoryActive }  changeFilter={ changeFilter }/>

    </aside>
  )
}

export default AsideShop
