import React from 'react'

const SearchProduct = () => {
  return (
    <div className="flex gap-4 px-[16px] items-center bigTablet:justify-center">
        <div className="w-[403px]">
            <input 
                type="text"
                placeholder='Busca tu producto'
                className='w-full py-[10px] px-[17px] rounded-full text-[18px] border-none outline-none bg-appBgWhite' 
            />
        </div>

        <div className="pb-2">
            <i className="fa-solid fa-magnifying-glass text-3xl text-text-white rotate-[12deg] hover:text-skyBlueApp transition-all duration-300 cursor-pointer hover:scale-90"></i>
        </div>
    </div>
  )
}

export default SearchProduct
