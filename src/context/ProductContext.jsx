import { createContext, useContext, useEffect, useState } from "react";
import { dataProducts } from "../data/dataProducts";

export const ProductsContext = createContext()

const ProductsContextProvider = ( { children } ) => {

    const [products, setProducts] = useState( [] )

    useEffect( () => {
        //  AQUI IRA LO DEL FETCH, EL CUAL SETEARA LOS PRODUCTOS
        setProducts( dataProducts )
    }, [])


    // FALTAN FUNCIONES CRUD PARA LOS PRODUCTOS

    const findProductById = ( productId ) => products.find( product => product.id === productId)

    return (
        <ProductsContext.Provider value={ { products, findProductById } } >
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider

export const useProductsContext = () => useContext( ProductsContext )