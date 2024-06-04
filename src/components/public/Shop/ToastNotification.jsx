import React, { useEffect, useState } from 'react'

const ToastNotification = ({ message='Mensaje por defecto' , type, onClose }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Cerrar el toast después de que la barra de progreso se complete
          }, 2000); // Duración del toast en milisegundos
    
          return () => clearTimeout(timer);
      }, [onClose]);


  return (
    <article className='fixed rounded-[12px] bg-appBgWhite   bottom-[25px] right-[30px] max-w-[350px] w-full flex z-[2] items-start overflow-hidden  toastNotif '>

        <div className="flex px-[15px] py-[20px]">
            <div className="flex items-center justify-between gap-5">
                <i className="fa-solid fa-cart-plus text-4xl text-appBgBlack"></i>
                <div className="flex-1 flex flex-col  items-start justify-center">
                    <span className='font-semibold text-base'>{ type }</span>
                    <span className='text-[14px]'>{ message }</span>
                    
                </div>
            </div>

            <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="absolute bottom-0 bg-slate-600 h-[5px] z-20 animateProgress rounded-r-md" ></div>
    </article>
  )
}

export default ToastNotification
