import React from 'react'
import { usePasswordChange } from '../../../../hooks/userHooks/usePasswordChange'

import Button from '../../../../shared/Button'
import InputConfig from './InputConfig'
import LineMessage from '../../../../shared/LineMessage'
import PasswordCondition from './PasswordCondition'
import LoadingSpinner from '../../../../shared/LoadingSpinner'

const PasswordChangeForm = () => {

    const {
        enteredCurrentPassword,
        newPassword,
        conditions,
        loading,
        error,
        handleCurrentPasswordChange,
        handleNewPasswordChange,
        changePassword,
        successChange,
    } = usePasswordChange()

  return (

    <>
        <div className='flex gap-[94px]'>
            <InputConfig 
                label={ 'Contraseña actual:' }  
                name={ 'currentPassword' } 
                type={ 'password' } 
                value={ enteredCurrentPassword } 
                onChange={ handleCurrentPasswordChange } 
            />

            <InputConfig 
                label={ 'Nueva contraseña:' }  
                name={ 'newPassword' } 
                type={ 'text' } 
                value={ newPassword } 
                onChange={ handleNewPasswordChange } 
            />

        </div>

        { error &&  <LineMessage message={ error } type={'error'} style={'text-center'} /> }
        { successChange &&  <LineMessage message={ 'Cambio de contraseña exitoso' } style={'text-center'} /> }

        <ul className='flex gap-[25px]'>
            <PasswordCondition condition={conditions.hasUpperCase} label="1 mayúscula" />
            <PasswordCondition condition={conditions.hasLowerCase} label="1 minúscula" />
            <PasswordCondition condition={conditions.hasNumber} label="1 número" />
            <PasswordCondition condition={conditions.hasMinLength} label="1 min. 8 caracteres" />
            <PasswordCondition condition={conditions.hasNoSpaces} label="Ningún espacio" />
        </ul>

        <div className="flex justify-center">
            <Button
                classButton={'bg-skyBlueApp hover:bg-[#5dc7e7] py-[12px] rounded-[10px] px-[10px] flex gap-3 items-center mt-6 transition-all duration-300 w-[265px] h-[55px] justify-center'}
                clickEvent={ changePassword }
            >
                        {
            loading ? 
              <>
                <span className='text-xl font-medium text-textDark'>Cambiando contraseña</span>
                <LoadingSpinner sizeSpinner={'20'} />
              </>
            :
              <>
                <span className='text-xl font-medium text-textDark'>Cambiar contraseña</span>
                <i className="fa-solid fa-repeat text-textDark text-xl pt-1"></i>
              </>
          }      
            </Button>
        </div>

    </>

  )
}

export default PasswordChangeForm
