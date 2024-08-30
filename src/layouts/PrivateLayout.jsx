import React, { useEffect } from 'react'
import { useUserContext } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'
import AsideContainer from '../shared/private/asideBar/AsideContainer'

import '../styles/private/adminMode.css'


const PrivateLayout = () => {

  const { user } = useUserContext()



  return (
    <div className='flex'>
        <AsideContainer />
        {user && user.idUser === 'admin123' ? 
        <section className='bg-adminBgContrast dark:bg-[#404040] transition-all duration-300 flex-1'>
            <Outlet />
        </section>  : <Navigate to={'/'} />}
    </div>
  )
}

export default PrivateLayout
