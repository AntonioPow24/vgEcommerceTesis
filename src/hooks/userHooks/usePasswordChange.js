import { useState } from "react"
import { useUserContext } from "../../context/UserContext"

export const usePasswordChange = () => {

    const { getCurrentPassword } = useUserContext()

    const [enteredCurrentPassword, setEnteredCurrentPassword] = useState( '' )
    const [newPassword, setNewPassword] = useState( '' )
  
    const [loading, setLoading] = useState( false )
    const [error, setError] = useState( '' )

    const [successChange, setSuccessChange] = useState(false)
    const [conditions, setConditions] = useState({
      hasUpperCase: null,
      hasLowerCase: null,
      hasNumber: null,
      hasMinLength: null,
      hasNoSpaces: null,
    })

    // FUNCIONES


    // Validar contraseña
    const validatePassword = ( password ) => {
        const newConditions = {
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasMinLength: password.length >= 8,
            hasNoSpaces: !/\s/.test(password),
          };
          setConditions(newConditions);
          return newConditions;
    }


    // Onchange CurrentPassword INPUT
    const handleCurrentPasswordChange = ( e ) => {
        setEnteredCurrentPassword( e.target.value )
    }


    // Onchange NewPassword INPUT
    const handleNewPasswordChange = ( e ) => {
        const password = e.target.value

        setNewPassword( password )
        validatePassword( password )
    }

    // Validacion del Formulario
    const isFormValid = Object.values(conditions).every(Boolean) && enteredCurrentPassword === getCurrentPassword()

    // ChangePassword
    const changePassword = async () => {

        const currentPassword = getCurrentPassword()

        if( enteredCurrentPassword !== currentPassword ){
            setError( 'La contraseña actual es incorrecta' )
            setSuccessChange( false )
            return
        }

        setError( '' )

        if( isFormValid ){
            setLoading(true);
            try {
              // Simulación de la solicitud de cambio de contraseña
              await new Promise((resolve) => setTimeout(resolve, 1000));
              console.log('Contraseña cambiada exitosamente');

              setSuccessChange( true )

              resetForm()

            } catch (err) {
              setError('Hubo un error al cambiar la contraseña');
            } finally {
              setLoading(false);
            }
        }

    }

    const resetForm = () => {
      setEnteredCurrentPassword('')
      setNewPassword('')

      setTimeout( () => setSuccessChange( false ), 1500 )

      setConditions({
        hasUpperCase: null,
        hasLowerCase: null,
        hasNumber: null,
        hasMinLength: null,
        hasNoSpaces: null,
      })

    }

    
    return {
        enteredCurrentPassword,
        newPassword,
        conditions,
        loading,
        error,
        handleCurrentPasswordChange,
        handleNewPasswordChange,
        changePassword,
        isFormValid,
        successChange,
    }

}