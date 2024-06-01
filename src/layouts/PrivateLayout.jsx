import React from 'react'
import { useUserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const PrivateLayout = () => {

  const { user } = useUserContext()
  
  return (
    <div>
        {user && user.name === admin? <Outlet /> : <Navigate to={'/'} />}
    </div>
  )
}

export default PrivateLayout
