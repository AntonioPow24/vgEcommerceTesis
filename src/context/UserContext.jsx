import { createContext, useContext, useState } from "react"

const UserContext = createContext()


const UserContextProvider = ({ children }) => {

    const {user, setUser} = useState( null )


    return (
        <UserContext.Provider value={ {user, setUser} }>
            { children }
        </UserContext.Provider>
    )
}
export default UserContextProvider


export const useUserContext = () => useContext( UserContext )