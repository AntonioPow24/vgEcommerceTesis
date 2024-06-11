import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router'
import UserContextProvider from './context/UserContext'
import ProductsContextProvider from './context/ProductContext'
import LoginContextProvider from './context/LoginContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <LoginContextProvider>

      <ProductsContextProvider>

        <UserContextProvider>

          <RouterProvider router={router} />
          
        </UserContextProvider>

      </ProductsContextProvider>
      
    </LoginContextProvider>

  </React.StrictMode>,
)
