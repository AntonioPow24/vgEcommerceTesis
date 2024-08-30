import React from 'react'

const ProductTRCard = ({ id,img, titleName, category, valorization, currentStock, price, discount, status }) => {
  return (
    <tr className='border-y-2  border-[#A3A3A34F] max-h-[64px]'>

        <td className='text-center w-[70px]'>
            <span className='text-base text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>{ id }</span> 
        </td>

        <td className='flex items-center justify-start gap-2'>
            <div className="max-w-[30px] flex items-center">
                <img src={ img } alt="" />
            </div>
            <h3 className='text-base text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>{ titleName }</h3>
        </td>

        <td className='text-center'>
            <span className='text-center capitalize font-medium text-adminTextDark dark:text-adminTextWhite transition-all duration-300'>
                 { category }
            </span>
        </td>

        <td className='text-center'>
            <div className="">
                <p 
                    className='text-adminTextPurple font-bold text-xl flex justify-center items-center gap-2'
                >
                    { valorization } 
                    <i class="fa-solid fa-cart-shopping pt-1"></i>
                </p>
            </div>
        </td>

        <td>
            <div className="">
                <p 
                    className='text-[#e7bc2e] dark:text-[#bea032] transition-all duration-300 font-bold text-xl flex justify-center items-center gap-2'
                >
                    { valorization } 
                    <i class="fa-solid fa-box-open pt-1"></i>
                </p>
            </div>
        </td>

    </tr>
  )
}

export default ProductTRCard
