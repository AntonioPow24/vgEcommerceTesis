import { useState } from "react"
import { useUserContext } from "../../context/UserContext"

export const useAccountDelete = () => {

    const { getCurrentPassword, setUser } = useUserContext()

    const [currentPassword, setCurrentPassword] = useState('')
    const [protocolo, setProtocolo] = useState('')

    const [loading, setLoading] = useState( false )
    const [error, setError] = useState( '' )
    const [successChange, setSuccessChange] = useState(false)


    // FUNCIONES y CONDICIONES

    const isCurrentPassword = ( password ) => password === getCurrentPassword()

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword( e.target.value )
    }

    const handleProtocoloChange = (e) => {
        setProtocolo( e.target.value )
    } 

    const deleteSession = async () => {
        console.log('hola');
        const protocolString = 'eliminar-sesion'

        if( !isCurrentPassword  || protocolo !== protocolString){
            setError( 'Contraseña o confirmación incorrecta' )
            return
        }

        setLoading( true )
        // FUNCION DEL BACK PARA ELIMINAR USUARIO
        try {
            await new Promise((resolve) => {
                setTimeout( resolve, 2000 )
            })

            console.log('La cuenta ha sido eliminada');
            setSuccessChange( true )

            //PRUEBA PARA ELIMINAR USUARIO
            setUser( null )


        } catch (err) {
            setError( err )
        } finally{
            setLoading( false )
        }


    }


    return {
        currentPassword,
        protocolo,
        loading,
        error,
        successChange,
        handleCurrentPasswordChange,
        handleProtocoloChange,
        deleteSession
    }
}