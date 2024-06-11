import React from 'react'
import Button from '../../../shared/Button'

const FilterConfig = ({ filterActive, filterArray, changeFilter }) => {
  return (
    <aside className='max-w-[285px] w-full pr-[10px]  flex flex-col items-end gap-[5px] border-slate-400 border-r-[1px] 1070:flex-row 1070:max-w-full 1070:pr-0 1070:border-r-0 bigPhone:gap-[2px]'>
        {
            filterArray.map( filter =>
                <Button
                    classButton={ ` hover:bg-projectBg w-full py-[10px] px-[10px] rounded-md transition-all duration-300 ${filterActive === 'deleteSession' && filter.filter === 'deleteSession' && 'bg-projectBg' } flex justify-end items-center 1070:justify-center bigPhone:px-[5px]` }
                    key={ filter.title }
                    clickEvent={ () => changeFilter( filter.filter ) }
                >
                    <span className={`  ${filter.filter === filterActive && filter.filter === 'deleteSession'? 'text-logOut': filter.filter === filterActive ? 'text-text-white' : 'text-gray-500' } ${filter.filter === 'deleteSession' && 'text-logOut'} text-[22px] bigPhone:text-[14px]`}>{ filter.title }</span>
                </Button>
            )
        }

    </aside>
  )
}

export default FilterConfig
