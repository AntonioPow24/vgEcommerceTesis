import { createContext, useContext, useState } from "react"

const UserContext = createContext()

// Usuario de Prueba
const userTest = {
    idUser: 'use23',
    userName: 'Antonio',
    lastName:'Garcia Romero',
    password:'Antonio2401',
    address:'',
    phoneNumber: undefined,
    email:'garciaromeroantonio@gmail.com',
    useRole:'user',
    requestList:[]
}

const userAdmi = {
    idUser: 'admin123',
    userName: 'admin',
    lastName:'Garcia Romero',
    password:'Antonio2401',
    address:'',
    phoneNumber: undefined,
    email:'garciaromeroantonio@gmail.com',
    useRole:'user',
    requestList:[]
}


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState( userAdmi )


    const getCurrentPassword = () => {
        return user.password
    }


    return (
        <UserContext.Provider value={ {user, setUser, getCurrentPassword} }>
            { children }
        </UserContext.Provider>
    )
}
export default UserContextProvider


export const useUserContext = () => useContext( UserContext )