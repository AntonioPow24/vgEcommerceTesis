import { Outlet } from 'react-router-dom'

import Footer from '../shared/public/Footer/Footer'
import NavBar from '../shared/public/NavBar/NavBar'


import CartContextProvider from '../context/CartContext'

const PublicLayout = () => {
  return (

    <CartContextProvider>

      <div>

        <NavBar />
          <Outlet />
        <Footer />

      </div>

    </CartContextProvider>
  )
}

export default PublicLayout
