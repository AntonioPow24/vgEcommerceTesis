import React from 'react'

const Modal = ({isModal,toggleModal ,anotherClass='' ,children}) => {

    const showHideClass = isModal ? 'fixed inset-0 absolute h-[100dvh] z-50 flex justify-end' : 'hidden'



  return (
    <section className={`${showHideClass}`}>
        <div 
            className="absolute w-[100%] h-[100%] inset-0 bg-gray-900 opacity-60"
            onClick={ toggleModal }
        >
        </div>
        {children}
    </section>
  )
}

export default Modal
