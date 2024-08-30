import React from 'react'

const TheadProducts = () => {
  return (
    <thead className='border-y-2  border-[#A3A3A34F]  sticky top-[-1px] dark:bg-appBgBlack bg-adminBgWhite z-10 transition-all duration-300'>
        <tr className=''>
            <th className='theadProduct text-center w-[70px]'>ID</th>
            <th className='theadProduct text-left w-[500px] pl-2'>Nombre del producto</th>
            <th className='theadProduct w-[200px]'>Categoría</th>
            <th className='text-[18px] text-adminTextPurple w-[150px]'>Valorización</th>
            <th className='theadProduct'>Stock</th>
            <th className='theadProduct'>Precio</th>
            <th className='theadProduct'>Estado</th>
            <th className='theadProduct'>Acciones</th>
        </tr>
    </thead>
  )
}

export default TheadProducts
