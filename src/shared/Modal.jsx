import React from 'react'

const Modal = ({isModal,setIsModal ,anotherClass='' ,children}) => {

    const showHideClass = isModal ? 'fixed inset-0 absolute h-[100dvh] z-50 flex justify-end' : 'hidden'


    // Funciones
    const handleCloseModal = () =>{
        setIsModal(prev => !prev)
    }

  return (
    <section className={`${showHideClass}`}>
        <div 
            className="absolute w-[100%] h-[100%] inset-0 bg-gray-900 opacity-60"
            onClick={handleCloseModal}
        >
        </div>
        {children}
    </section>
  )
}

export default Modal
