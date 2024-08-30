import React from 'react'
import TheadProducts from './TheadProducts'
import TbodyProducts from './TbodyProducts'

const ContainerTable = ({ filteredProducts }) => {
  
    return (

    <div className="px-[22px] pb-[22px] overflow-y-auto max-h-[710px]">
        <table className=' w-full overflow-y-auto'>
            <TheadProducts />


            <TbodyProducts filteredProducts={ filteredProducts } />

        </table>
    </div>
  )
}

export default ContainerTable
