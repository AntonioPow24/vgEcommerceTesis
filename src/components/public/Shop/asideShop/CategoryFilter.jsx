import React from 'react'

const CategoryFilter = ( { category, categoryActive, changeFilter } ) => {
  return (
    <div 
      className={`px-[20px] py-[20px]  border-b border-appBgBlack hover:bg-[#54c0e1a6] categoryFilter ${category === categoryActive ? 'bg-[#54c0e1a6]' : 'bg-[#171717dc]' } transition-all duration-300`}
      onClick={ () => changeFilter( category ) }
    >
        <span 
            className={` capitalize text-xl cursor-pointer categoryFilterSpan transition-all duration-300 ${category === categoryActive ? 'text-textDark' : 'text-text-white'  } `}
        >
            { category }
        </span>
    </div>
  )
}

export default CategoryFilter
