import React from 'react'


const Button = ({children ,classButton , clickEvent=null ,type, disabled=false}) => {


  // Evento click en el Boton, en caso Existiera
  const handleClickButton = () => clickEvent && clickEvent()
  

  return (
    <button
      disabled= { disabled } 
      className={classButton} 
      onClick={clickEvent && handleClickButton}
      type={type && type}
    >
        {children}
    </button>
  )
}

export default Button
