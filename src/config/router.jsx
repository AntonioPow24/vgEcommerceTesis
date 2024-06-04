import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";


import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Services from '../pages/Services'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import MyShopping from "../pages/MyShopping";
import ShopCategory from "../pages/ShopCategory";
import ProductDetail from "../pages/ProductDetail";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <PublicLayout />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path:'/proyectos',
                element: <Projects />
            },
            {
                path:'/servicios',
                element: <Services />
            },
            
            {
                path:'/tienda',
                element: <Shop />,
            },
            {
                path:'/tienda/:category',
                element: <ShopCategory />,
            },
            {
                path:'/tienda/:category/:productId',
                element: <ProductDetail />
            },

            {
                path:'/contacto',
                element: <Contact />
            },
            {
                path:'/misCompras',
                element: <MyShopping />,
            },
        ]
    },

    {
        path:'/admin',
        element: <PrivateLayout />
    }

])