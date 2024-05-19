import { Link } from "react-router-dom"


const HeaderContact = () => {


    const number = '+51928517790'

  return (
    <header 
        className='bg-bgContactHeader flex flex-col pt-[160px] pb-[73px] px-[170px] gap-[20px] 849to1480:pt-[190px] 1320:px-[30px] 1320:items-center 849:pt-[120px]'
    >
        <div className="flex">
            <p className='text-text-white text-[70px] max-w-[680px] leading-tight 1320:text-center tablet:text-5xl'>Nos encanta escuchar a nuestros 
                <span className='text-skyBlueApp'> clientes!</span>
            </p>
        </div>

        <div className="flex">
            <p className='text-text-white text-2xl max-w-[513px] tablet:text-xl 1320:text-center'>Visítanos en nuestras oficinas o mándanos un mensaje a través de nuestro formulario</p>
        </div>
        
        {/* ESTO IRA DENTRO DE UN LINK */}
        <Link 
            className={'bg-text-white px-[28px] py-[8px] max-w-[194px] rounded-[14px] flex  gap-3 items-center justify-center mt-[23px] hover:bg-[#DFDFDF] transition-all duration-300'}
            to={`https://wa.me/${number}`}
            target="_blank"
        >
            <span className='text-textDark font-semibold text-xl'>Escríbenos</span>
            <i className="fa-brands fa-whatsapp font-semibold text-xl pt-1"></i>
        </Link>
    </header>
  )
}

export default HeaderContact
