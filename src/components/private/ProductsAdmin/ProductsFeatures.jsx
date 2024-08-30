import Button from '../../../shared/Button'
import ProductSearch from '../../../shared/features/ProductSearch'


const ProductsFeatures = ({ query, handleSearch }) => {

  const searchStyle = "flex gap-3 items-center rounded-[6px] max-w-[542px] w-full h-[42px] bg-adminBgWhite px-[10px] dark:bg-appBgBlack transition-all duration-300"

  return (
    <div className='h-[42px] flex items-center justify-between '>
      <ProductSearch containerStyle={ searchStyle } query={ query } handleSearch={ handleSearch } />

      <div className="flex h-full gap-[30px] items-center flex-1 justify-end">

        <Button
            classButton={'rounded-[6px] bg-adminBgWhite h-full max-w-[203px] w-full hover:bg-[#fafafa] transition-all duration-300'}
        >
            <span className='text-dashboardPurpleBg text-xl'>Nueva categoría</span>
        </Button>

        <Button
            classButton={'rounded-[6px] bg-dashboardPurpleBg h-full max-w-[203px] w-full hover:bg-[#7b56e0] transition-all duration-300'}
        >
            <span className='text-text-white text-xl'>Nuevo producto</span>
        </Button>

      </div>
    </div>
  )
}

export default ProductsFeatures
