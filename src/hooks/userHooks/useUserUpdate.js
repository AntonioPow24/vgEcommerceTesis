import { useState } from "react"
import { useUserContext } from "../../context/UserContext"

const useUserUpdate = () => {

    const { user, setUser } = useUserContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const updateUser = async ( updateUser ) => {

        setLoading( true )
        setError( null )

        try{
            //Logica para hacer la solicitud de actualizacion a la API
            //Simulacion con un timeOut suponiendo que la API devuelve un usuario actualizado

            await new Promise( resolve => setTimeout( resolve, 1000 ))

            setUser( updateUser )
        } catch ( err ){
            setError('Error actualizando el Usuario')
        }finally{
            setLoading( false )
        }

    }

    return { user, updateUser, loading, error }
}

export default useUserUpdate