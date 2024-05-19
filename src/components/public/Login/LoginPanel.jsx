import Button from "../../../shared/Button"

const LoginPanel = ({sidePanel, buttonStyle, buttonTitle, title , paragraph, srcImg, clickEvent}) => {

    // Estilos para el maquetado
    const panelStyle = 'panel flex flex-col items-center justify-around text-center z-[7] bigTablet:flex-row bigTablet:justify-center bigTablet:items-center bigTablet:px-[8%] bigTablet:py-[2.5rem] bigPhone:gap-4 '

  return (
    <article className={` ${sidePanel} ${panelStyle}`}>
        <div className="content text-text-white bigPhone:flex bigPhone:flex-col bigPhone:items-center bigPhone:gap-2">
            <h3 className='font-medium leading-none text-2xl  '>{ title }</h3>
            <p className='py-[0.7rem] 700:text-[14px] '>{ paragraph }</p>
            <Button
                classButton={buttonStyle}
                clickEvent={clickEvent}
            >
                <span className='font-medium'>{ buttonTitle }</span>
            </Button>
        </div>

        <img 
        src={srcImg}
        alt=""
        className='w-full imagePanel bigTablet:w-[200px] bigPhone:hidden pt-5' 
        />

    </article>
  )
}

export default LoginPanel
