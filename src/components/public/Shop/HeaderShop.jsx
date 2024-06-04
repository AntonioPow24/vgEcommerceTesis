import React from 'react'

const HeaderShop = ({ category }) => {
  return (
    <header className='h-[600px] relative 580:h-[400px]'>
        <div className='banner w-full h-full brightness-[90%] px-[10%] flex items-center'>
            <div className="flex items-center justify-center gap-[10%] w-full laptop:pt-[70px] 580:flex-col 580:gap-5">
                <img 
                    className='849:w-[120px]'
                    src="/images/shop/cartBanner.png" 
                />
                <span className='text-7xl uppercase text-text-white 849:text-4xl 580:text-center'>{ category }</span>
            </div>
        </div>
    </header>
  )
}

export default HeaderShop
