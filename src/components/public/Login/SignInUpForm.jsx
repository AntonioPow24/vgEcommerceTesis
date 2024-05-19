import { Link } from 'react-router-dom'
import Button from '../../../shared/Button'

import './SignInUpForm.css'


const SignInUpForm = ({inputs , title, btnTitle, formType='signIn'}) => {



    // Estilos para el maquetado
    const linkStyle='h-[46px] w-[46px] border border-[#929292] flex justify-center items-center rounded-full  transition-all duration-300 hover:bg-text-blueClient hover:border-text-blueClient'

    const buttonStyle = 'bg-text-blueClient w-[380px] 580:w-full py-3 rounded-[8px] text-text-white text-xl font-medium border-none outline-none hover:bg-[#6571d8] transition-all duration-300'



  return (
    <form  
    className={`flex justify-center items-center flex-col gap-[20px] signForm ${formType} `}

  >
    <h2 className='title text-4xl text-text-white font-bold'>{ title }</h2>

    {
      inputs && 
      
      inputs.map( input => 
        <div 
          className="max-w-[380px] 580:max-w-full w-full h-[55px] bg-formContactBg rounded-[8px] flex px-5 gap-4"
          key={input.id}
        >
          <div className="flex items-center">
            <i className={`${input.iconClass} text-center`}></i>
          </div>
          <input 
            type={input.type}
            placeholder={input.placeholder}
            className='flex-1 bg-transparent outline-none border-none leading-none font-medium text-[18px] text-textDark' 
          />
        </div>
      )
    }



    <Button 
      classButton={buttonStyle}
      type={'submit'}
    >
      { btnTitle }
    </Button>

    <p className="text-text-white bigPhone:text-center"> O <span>{formType === 'signUp'? 'registrate': 'ingresa'}</span> por medio de estas plataformas</p>

    <div className="flex justify-center gap-5">
      <Link href={'#'} className={linkStyle}>
        <i className='fab fa-facebook-f text-text-white text-xl'></i>
      </Link>
      <Link href={'#'} className={linkStyle}>
        <i className='fab fa-google text-text-white text-xl'></i>
      </Link>
    </div>

  </form>

  )
}

export default SignInUpForm
