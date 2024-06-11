import React, { useState } from 'react'
import FilterConfig from './FilterConfig'

import DeleteSession from './mainComponents/DeleteSession'
import PersonalData from './mainComponents/PersonalData'
import Privacity from './mainComponents/Privacity'



const filterConfigArray = [
    { title: 'Datos personales' , filter: 'personalData'},
    { title: 'Privacidad de la cuenta' , filter: 'privacity'},
    { title: 'Eliminar sesión' , filter: 'deleteSession'},
]

const ConfigMainContainer = () => {

    const [ filterConfig, setFilterConfig ] = useState('personalData')
    

    // Functions
    const changeFilter = ( filter ) => {
        setFilterConfig( filter )
    }

  return (
    <main className='pl-[120px]  py-[45px] flex bg-appBgBlack gap-[56px] 1070:flex-col 1070:pl-[2%] 1070:pr-[2%] 1070:gap-[35px]'>
        <FilterConfig filterActive={ filterConfig } filterArray={ filterConfigArray } changeFilter={ changeFilter } />

        {
            filterConfig === 'personalData' ? 
                <PersonalData />
            : filterConfig === 'privacity' ? 
                <Privacity />
            : 
                <DeleteSession />    
        }
    </main>
  )
}

export default ConfigMainContainer
