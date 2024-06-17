import React from 'react'
import HeaderConfig from '../components/public/Configuration/HeaderConfig'
import ConfigMainContainer from '../components/public/Configuration/ConfigMainContainer'
import { useUserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const ConfigurationProfile = () => {

    // Usuario para comprobar si el usuario existe
    const { user } = useUserContext()



  return (
    <section className=''>

      {
        user ? 
          <>
            <HeaderConfig />
      
            <ConfigMainContainer />         
          </>

        :
          <Navigate to={'/'} />
      }



    </section>
  )
}

export default ConfigurationProfile
