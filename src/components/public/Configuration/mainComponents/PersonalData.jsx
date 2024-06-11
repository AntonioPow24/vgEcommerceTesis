import React, { useState } from 'react'
import { useUserContext } from '../../../../context/UserContext'
import InputConfig from './InputConfig'
import Button from '../../../../shared/Button'
import useUserUpdate from '../../../../hooks/userHooks/useUserUpdate'
import LineMessage from '../../../../shared/LineMessage'
import LoadingSpinner from '../../../../shared/LoadingSpinner'

const PersonalData = () => {


  const { user, updateUser, loading, error } = useUserUpdate()
  const [updateUserState, setUpdateUserState] = useState( user )
  


  const inputArray = [
    {
      id:'userName',
      label:'Nombre:',
      type:'text',
      name: 'userName',
      style: ''
    },
    {
      id:'lastName',
      label:'Apellidos:',
      type:'text',
      name: 'lastName',
      style: ''
    },
    {
      id:'address',
      label:'Dirección:',
      type:'text',
      name: 'address',
      style: ''
    },
    {
      id:'phoneNumber',
      label:'Celular:',
      type:'number',
      name: 'phoneNumber',
      style: ''
    },
    {
      id:'email',
      label:'Correo electrónico:',
      type:'text',
      name: 'email',
      style: ''
    },
  ]


  // Functions

  const onChangeUpdateuser = (e) => {
    const { value, name } = e.target
    setUpdateUserState( prev => ({...prev, [name]: value}) )
  }


  const saveUpdateUser = () => {
    updateUser( updateUserState )
  }



  return (
    <section className='flex flex-col gap-[20px] mb-5 pr-[200px] 1570:pr-[5%]'>

      <div className="flex justify-start mb-[10px]">
        <h3 className='text-text-white text-4xl 1070:text-2xl'>Datos personales</h3>
      </div>

      <div className="flex flex-wrap gap-[70px] justify-between">

        { inputArray.map( input => 

          <InputConfig  
            {...input} 
            value={ updateUserState[input.name] }
            key={ input.id }
            onChange={ onChangeUpdateuser }
          /> 
        )}

      </div>

      <div className="flex justify-center ">
        <Button
          classButton={'bg-skyBlueApp hover:bg-[#5dc7e7] py-[12px] rounded-[10px] px-[10px] flex gap-4 items-center mt-6 transition-all duration-300 w-[245px] h-[55px] justify-center'}
          clickEvent={ saveUpdateUser }
        >
          {
            loading ? 
              <>
                <span className='text-xl font-medium text-textDark'>Guardando cambios </span>
                <LoadingSpinner sizeSpinner={'20'} />
              </>
            :
              <>
                <span className='text-xl font-medium text-textDark'>Guardar cambios</span>
                <i className="fa-solid fa-floppy-disk text-textDark text-xl pt-1"></i>
              </>
          }
        </Button>
      </div>

      { error && <LineMessage message={ 'hola a todos' } type={'error'} style={'text-center'} />}
    </section>

  )
}

export default PersonalData
