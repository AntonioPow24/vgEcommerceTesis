import { Navigate, Outlet } from 'react-router-dom'

import Footer from '../shared/public/Footer/Footer'
import NavBar from '../shared/public/NavBar/NavBar'


import CartContextProvider from '../context/CartContext'
import { useUserContext } from '../context/UserContext'

const PublicLayout = () => {

  const {user} = useUserContext()

  return (

    <CartContextProvider>

      <div>

        <NavBar />
          {user && user.idUser === 'admin123'? <Navigate to={'/admin'}/> : <Outlet /> } 
        <Footer />

      </div>

    </CartContextProvider>
  )
}

export default PublicLayout
