import { createContext, useContext, useState } from "react"

const UserContext = createContext()

// Usuario de Prueba
const userTest = {
    idUser: 'use23',
    userName: 'Antonio',
    lastName:'Garcia Romero',
    address:'',
    phoneNumber: undefined,
    email:'garciaromeroantonio@gmail.com',
    useRole:'user',
    requestList:[]
}


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState( null )



    return (
        <UserContext.Provider value={ {user, setUser} }>
            { children }
        </UserContext.Provider>
    )
}
export default UserContextProvider


export const useUserContext = () => useContext( UserContext )