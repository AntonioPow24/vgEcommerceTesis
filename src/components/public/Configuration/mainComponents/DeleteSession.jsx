import React from 'react'
import TitleSectionConfig from '../TitleSectionConfig'
import InputConfig from './InputConfig'
import LineMessage from '../../../../shared/LineMessage'
import Button from '../../../../shared/Button'
import { useAccountDelete } from '../../../../hooks/userHooks/useAccountDelete'
import LoadingSpinner from '../../../../shared/LoadingSpinner'

const DeleteSession = () => {

  const { 
      currentPassword,
      protocolo,
      loading,
      error,
      successChange,
      handleCurrentPasswordChange,
      handleProtocoloChange,
      deleteSession 
  } = useAccountDelete()


  return (
    <section className='flex flex-col gap-[20px] mb-5 pr-[200px] 1570:pr-[5%]'>
      <TitleSectionConfig title={'Eliminar sesión'} />

      <div className="flex flex-col gap-[20px] justify-between">

          <InputConfig 
            label={'Contraseña actual'}
            value={ currentPassword }
            onChange={ handleCurrentPasswordChange }
            type={ 'password' }
          />

          <div className="flex flex-col gap-2">
            <span className='text-xl text-gray-400'>Escribe <span className='text-logOut'>eliminar-sesion</span> para proceder</span>
            <InputConfig 
              value={ protocolo }
              onChange={ handleProtocoloChange }
              type={ 'text' }
            />
          </div>

      </div>

      { error && <LineMessage message={error} type={'error'} /> }
      

      <div className="flex justify-center">
            <Button
                classButton={'bg-skyBlueApp hover:bg-[#5dc7e7] py-[12px] rounded-[10px] px-[10px] flex gap-3 items-center mt-6 transition-all duration-300 w-[265px] h-[55px] justify-center'}
                clickEvent={ deleteSession }
            >
                        {
            loading ? 
              <>
                <span className='text-xl font-medium text-textDark'>Eliminando sesiónn</span>
                <LoadingSpinner sizeSpinner={'20'} />
              </>
            :
              <>
                <span className='text-xl font-medium text-textDark'>Eliminar sesión</span>
                <i className="fa-solid fa-repeat text-textDark text-xl pt-1"></i>
              </>
          }      
            </Button>
        </div>
    </section>
  )
}

export default DeleteSession
