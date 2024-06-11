import { createContext, useContext, useState } from "react";


export const LoginContext = createContext()

const LoginContextProvider = ( { children } ) => {

    const [isLogin, setIsLogin] = useState( false )


    // Funciones
    const openLogin = () => setIsLogin( true )
    const closeLogin = () => setIsLogin( false )
    const toggleLogin = () => setIsLogin( prev => !prev )

    return (
        <LoginContext.Provider value={ { isLogin, openLogin, closeLogin, toggleLogin } } >
            { children }
        </LoginContext.Provider>
    )
}

export default LoginContextProvider

export const useLoginContext = () => useContext( LoginContext )