
import InputForm from './InputForm'
import FileUpload from './FileUpload'

import '../../../styles/form.css'
import { useState } from 'react'

const FormContact = () => {

    // ESTADO PARA CONSTRUIR UN OBJETO SOLICITUD
    const [proyectRequest , setProyectRequest] = useState({
        clientName:'',
        anotherInfo:'',
        proyectPlace:'',
        budget:0,
        details:'',
        document : null
    })

    const [isProcessing , setIsProcessing]=useState(false)


    // Funcion obtener valor onChange
    const handleOnChange = (e,selectedFile=null) => {

        const {name, value} = e.target

        setProyectRequest({
            ...proyectRequest,
            [name]: selectedFile ? selectedFile : value 
        })
    }



    // Funcion Crear Proyect Request 
    const  createProyectRequest = (e) =>{
        e.preventDefault()

        // FALTA VALIDACIONES DE CADA CAMPO
        
        if(!isProcessing){

            // METTODO POST PARA LA BASE DE DATOS DE SOLICITUDES DE PROYECTOS
            try {
                
                setIsProcessing(true)
                console.log(proyectRequest);
    
                setTimeout(() => setIsProcessing(false), 2000)
    
            } catch (error) {
                console.log(error);
            }
        }

    }





    // Estilos para el maquetado
    const buttonStyle =`${isProcessing ? 
        'bg-gray-500 cursor-default flex gap-[] items-center justify-center' 
        : 
        'bg-bgContactHeader hover:translate-y-[-2px] hover:bg-[#656fce] transition-all duration-300'
    }`

    const formStyle = 'bg-text-white 1880tomax:max-w-[845px] min-w-[320px]  rounded-[20px] overflow-hidden 1580to1880:w-[670px]'

  return (
    <form
        className={`${formStyle}`}
    >
        <div className="flex px-[40px] py-[30px]  gap-[25px] bg-formContactBg items-center">
            <div className="w-[80px] h-[80px] rounded-[12px] overflow-hidden min-w-[60px] tablet:h-[60px]">
                <img
                    className='w-full h-full object-cover' 
                    src="./images/another/iconForm.png" 
                    alt="icono del formulario" 
                />
            </div>

            
            <div className=" text-[22px] max-w-[664px] 1580to1880:max-w-[400px] text-bgContactHeader 685:text-[14px]">
                <p>Coméntanos en  acerca de tu proyecto y nosotros prepararemos una propuesta para ti en menos de 24 horas!</p>
            </div>
        </div>

        <div className="flex flex-col py-[40px] px-[40px] gap-[40px] 580:px-[15px] ">
            <div className={`flex flex-col gap-[40px] 730:gap-[30px]`}>

                <div className="flex gap-[30px] 730:flex-col">

                    <InputForm 
                        type='text'
                        name='clientName'
                        label='Tu nombre'
                        restOfInput='completo'
                        value={proyectRequest.clientName}
                        onChange={handleOnChange}
                    />


                    <InputForm 
                        type='text'
                        name='anotherInfo'
                        label='Correo o numero'
                        value={proyectRequest.anotherInfo}
                        onChange={handleOnChange}
                    />

                </div>

                <div className="flex gap-[30px] 730:flex-col">

                    <InputForm 
                        type='text'
                        name='proyectPlace'
                        label='Lugar del proyecto '
                        restOfInput='Ejm. Sala de casa'
                        value={proyectRequest.proyectPlace}
                        onChange={handleOnChange}
                    />


                    <InputForm 
                        type='number'
                        name='budget'
                        label='Presupuesto '
                        restOfInput='en soles'
                        value={proyectRequest.budget}
                        onChange={handleOnChange}
                    />

                </div>
            </div>

            <div className="flex flex-col gap-[14px]">
                <span className='text-appBgBlack text-2xl'>Detalles del Proyecto (Opcional)</span>

                <textarea 
                    name="details" 
                    id="details"
                    placeholder='Ejemplo: Quiero una instalacion de paredes de vidrio de una ducha para un baño de 3.5 metros de alto , tambien necesito manijas y decoracion del proyecto'
                    className='px-[13px] py-[12px] bg-formContactBg textAreaForm h-[150px]'
                    value={proyectRequest.details}
                    onChange={handleOnChange}
                ></textarea>
            </div>

            <div className="flex">
                <FileUpload handleOnChange={handleOnChange} />
            </div>

            {/* <Button 
                classButton={'bg-bgContactHeader rounded-md  py-[16px] hover:bg-[#656fce] transition-all duration-300 hover:translate-y-[-2px]'}
                type={'submit'}
                clickEvent={createProyectRequest}
            >
                <span className='text-text-white text-2xl 685:text-xl'>Enviar mis datos</span>
            </Button> */}
            <button 
                className={` rounded-md  py-[16px] ${buttonStyle} `}
                type='submit'
                onClick={createProyectRequest}
            >
                <span className={`text-text-white text-2xl 685:text-xl ${isProcessing && 'flex gap-4 items-center justify-center'}`}>
                {
                        isProcessing ? <> Cargando <span className="loader"></span></> :'Enviar mis datos'
                }
                </span>
                {
                    
                }

            </button>
        </div>
    </form>
  )
}

export default FormContact
