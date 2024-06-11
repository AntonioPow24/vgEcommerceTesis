import { Link } from 'react-router-dom'
import Button from '../../../shared/Button'
import PropTypes from 'prop-types';
import './SignInUpForm.css'
import { useEffect, useState } from 'react'
import { validateSignIn, validateSignUp } from '../../../utils/login/formActions';


// Estilos para el maquetado
  const linkStyle='h-[46px] w-[46px] border border-[#929292] flex justify-center items-center rounded-full  transition-all duration-300 hover:bg-text-blueClient hover:border-text-blueClient'

  const buttonStyle = 'bg-text-blueClient w-[380px] 580:w-full py-3 rounded-[8px] text-text-white text-xl font-medium border-none outline-none hover:bg-[#6571d8] transition-all duration-300'

  const inputStyle = 'flex-1 bg-transparent outline-none border-none leading-none font-medium text-[18px] text-textDark'




const SignInUpForm = ({inputs , title, btnTitle, formType='signIn'}) => {

  // Estados del Componente
    const [ userInput, setUserInput ] = useState({})
  
    const [ errors, setErrors ] = useState({})


    useEffect( () => {

      if (Object.keys(userInput).length > 0) {

        // Funcion Validacion
        const validationsErrors = formType === 'signIn' ? validateSignIn( userInput ) : validateSignUp( userInput )
  
        setErrors( validationsErrors )
      }

      
    },[ userInput ])



    // Funciones
    const handleChange = (e) => {
      const { name, value } = e.target


      setUserInput(prevUserInput => ({ ...prevUserInput, [name]: value }));
  

      
    }


    const handleSubmit = (e) => {
      e.preventDefault()
      
      // Funcion Validacion
      // const validationsErrors = formType === 'signIn' ? validateSignIn( userInput ) : validateSignUp( userInput )

      // setErrors( validationsErrors )

      // if( Object.keys( validationsErrors ).length === 0 ){
        // }
        
      console.log('Datos Validos', userInput);

    }





  return (
    <form  
      className={`flex justify-center items-center flex-col gap-[20px] signForm ${formType} `}
      onSubmit={ handleSubmit }
    >
      <h2 className='title text-4xl text-text-white font-bold'>{ title }</h2>

      {
        inputs && 
        
        inputs.map( input =>
          
          <div className='max-w-[380px] 580:max-w-full w-full' key={input.id}>
            <div 
              className="max-w-[380px] 580:max-w-full w-full h-[55px] bg-formContactBg rounded-[8px] flex px-5 gap-4"
              key={input.id}
            >
              <div className="flex items-center">
                <i className={`${input.iconClass} text-center`}></i>
              </div>

              <input 
                className={ inputStyle }
                type={ input.type }
                placeholder={ input.placeholder }
                name={ input.name }
                onChange={ handleChange }
                autoComplete={ input.autoComplete } 
              />
            </div>

            {errors[input.name] && <p className="text-red-500">{errors[input.name]}</p>}
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
        <Link to={'#'} className={linkStyle}>
          <i className='fab fa-facebook-f text-text-white text-xl'></i>
        </Link>
        <Link to={'#'} className={linkStyle}>
          <i className='fab fa-google text-text-white text-xl'></i>
        </Link>
      </div>

    </form>

  )
}

  SignInUpForm.propTypes = {
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        iconClass: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    btnTitle: PropTypes.string.isRequired,
    formType: PropTypes.oneOf(['signIn', 'signUp']),
  };
export default SignInUpForm
