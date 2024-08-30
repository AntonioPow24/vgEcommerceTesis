import ProductSearch from '../../../../shared/features/ProductSearch'
import FilterContainer from './FilterContainer'

const AsideShop = ( { categoryActive, changeFilter } ) => {

  const searhStyle = 'flex gap-3 items-center rounded-[6px] max-w-[542px] w-full h-[42px] bg-adminBgWhite px-[10px] dark:bg-appBgBlack transition-all duration-300'

  return (
    <aside className=' py-[26px] flex flex-col gap-[40px] bg-[#232323] max-w-[480px] w-full'>
      
      <div className="flex gap-4 px-[16px] items-center bigTablet:justify-center">

        <ProductSearch  containerStyle={ searhStyle } />
      </div>


        <FilterContainer  categoryActive={ categoryActive }  changeFilter={ changeFilter }/>

    </aside>
  )
}

export default AsideShop
