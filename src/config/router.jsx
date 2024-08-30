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
import ConfigurationProfile from "../pages/ConfigurationProfile";


import Dashboard from '../pages/private/Dashboard'
import ProductsAdmin from '../pages/private/ProductsAdmin'
import RequestsAdmin from '../pages/private/RequestsAdmin'
import ReportsAdmin from '../pages/private/ReportsAdmin'
import ProjectsAdmin from '../pages/private/ProjectsAdmin'
import UsersAdmin from '../pages/private/UsersAdmin'

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
                path:'/shopping',
                element: <MyShopping />,
            },
            {
                path:'/configuration',
                element: <ConfigurationProfile/>,
            },
        ]
    },

    {
        path:'/admin',
        element: <PrivateLayout />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },
            {
                path:'productsAdmin',
                element: <ProductsAdmin />
            },
            {
                path:'requestsAdmin',
                element: <RequestsAdmin />
            },
            {
                path:'reportsAdmin',
                element: <ReportsAdmin />
            },
            {
                path:'projectsAdmin',
                element: <ProjectsAdmin />
            },
            {
                path:'usersAdmin',
                element: <UsersAdmin />
            },
        ]
    }

])