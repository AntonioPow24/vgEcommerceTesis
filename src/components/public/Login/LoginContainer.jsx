import SignInUpForm from './SignInUpForm'
import LoginPanel from './LoginPanel'
import { useState } from 'react'
import Button from '../../../shared/Button'

import './LoginContainer.css'

const LoginContainer = ({ closeLoginContainer }) => {

  const [isSignUpMode , setIsSignUpMode] = useState( false )

  // Objetos para los Forms
  const logInInputs = [
    {
      id:1,
      type:'text',
      placeholder:'Nombre de Usuario',
      iconClass: 'fas fa-user'
    },
    {
      id:2,
      type:'password',
      placeholder:'Contraseña',
      iconClass: 'fa-solid fa-lock'
    },
  ]

  const signUpInputs = [
    {
      id:1,
      type:'text',
      placeholder:'Nombre de Usuario',
      iconClass: 'fas fa-user'
    },
    {
      id:2,
      type:'text',
      placeholder:'Correo de usuario',
      iconClass: 'fas fa-envelope'
    },
    {
      id:3,
      type:'password',
      placeholder:'Contraseña',
      iconClass: 'fa-solid fa-lock'
    },
  ]



  // Funciones

  const changeLoginPanel = () => {
    setIsSignUpMode(!isSignUpMode)
  }


  return (

    <>
      <div 
        // onClick={closeLoginContainer}
        className={`fixed w-screen bg-appBgBlack h-[100dvh] z-[10] overflow-hidden loginContainer ${ isSignUpMode? 'signUpMode' : ''} bigTablet:min-h-[800px] bigTablet:h-[100dvh] `}
      >
        <div className=" bg-appBgWhite">
          
          <div className=" absolute top-[50%] left-[75%] translate-x-[-50%] translate-y-[-50%] w-[50%] grid signInUp z-[5] bigTablet:w-full bigTablet:left-[50%] bigTablet:top-[90%]">

              <SignInUpForm inputs={ logInInputs }  title='Ingresar' btnTitle='Iniciar sesión' />
              <SignInUpForm inputs={ signUpInputs }  title='Crear una cuenta' btnTitle='Registrarme' formType='signUp' />
          </div>

        </div>

        <div className="panels-container absolute w-full h-full top-0 left-0 grid">

            <LoginPanel 
              buttonStyle={`bg-none border-[2px] border-bgAppWhite w-[130px] h-[41px] rounded-[12px] hover:bg-appBgWhite hover:text-textDark`}
              sidePanel='left-panel'
              title='Aun no tienes una cuenta?'
              paragraph='Crea una cuenta y empieza a comprar nuestros productos!'
              buttonTitle='Registrarme'
              srcImg='./images/login/register.svg'
              clickEvent={changeLoginPanel}
            />

            <LoginPanel 
              buttonStyle={`bg-none border-[2px] border-bgAppWhite w-[130px] h-[41px] rounded-[12px] hover:bg-appBgWhite hover:text-textDark`}
              sidePanel='right-panel'
              title='Ya tienes una cuenta?'
              paragraph='Ingresa con tus credenciales y empieza a comprar!'
              buttonTitle='Iniciar Sesion'
              srcImg='./images/login/login.svg'
              clickEvent={changeLoginPanel}
            />



        </div>

      </div>
        <div className="fixed top-4 right-4  z-20 "
          onClick={closeLoginContainer}
        >
          <Button>
            <i className='fa-solid fa-xmark  text-5xl text-text-white bigPhone:text-3xl'></i>
          </Button>
        </div>

    </>
  )
}

export default LoginContainer
