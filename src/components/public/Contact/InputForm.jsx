import '../../../styles/inputContainer.css'


const InputForm = ({type, name, label, restOfInput='', value, onChange}) => {
      // Estilos para el maquetado
      const inputContainerStyle = 'flex items-center w-full rounded-md  relative text-base bg-formContactBg inputContainer'

  return (
    <div className={`${inputContainerStyle}`}>

      <input 
          type={type}
          name={name}
          required={true}
          placeholder=' '
          className=' px-[13px] py-[12px] h-[46px] flex-1 z-[1] bg-transparent outline-none text-itextInputForm rounded-md'
          value={value}
          onChange={onChange} 
      />
      

      <label 
          htmlFor={name}
          className='text-textInputForm text-xl absolute  left-[13px] labelInput 1880:text-[15px]'
      >
          {label} <span className='restOfInput'>{restOfInput}</span>
      </label>

    </div>
  )
}

export default InputForm
