import Iframe from './Iframe'
import FormContact from './FormContact'

const MainContact = () => {

    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1171.1964282721178!2d-78.50901138935423!3d-9.116527093795016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab8557c220a36f%3A0x9cd9a3e095928a21!2sVIDRIERIA%20GARATEA!5e0!3m2!1sen!2spe!4v1714269797270!5m2!1sen!2spe"

  return (
    <section
        className='flex py-[50px] px-[130px] bg-appBgBlack gap-[83px] relative 1500:flex-col-reverse 1500:px-[20px] 1500:gap-[35px]'
    >
        <div className='w-full '>           
            <div className="overflow-hidden w-[730px] h-[778px] rounded-[20px] 1500to1650:w-[48%] 1500to1650:h-[650px] 1500:w-full 1500:h-[600px]">
                <Iframe
                    iFrameClass={'w-full h-full grayscale-[20%] invert-[95%]'} 
                    mapSrc={mapSrc}

                />
            </div>

        </div>    

        <div className="flex flex-col gap-[33px] absolute right-[5%] top-[-240px] 1500:static">
            <FormContact />

            <div className="flex flex-col gap-[24px] max-w-[440px] 730to1500:flex-row 1500:max-w-full 1500:justify-between 1500:px-[20px] ">
                <p className='text-text-white flex gap-2 text-xl'>
                    <span><i className="fa-solid fa-location-dot text-text-white"></i></span> 
                    Av. Agraria, 2323 Garatea - Nuevo Chimbote
                </p>

                <p className='text-text-white flex gap-2 text-xl'>
                    <span><i className="fa-regular fa-clock text-text-white"></i>
                    </span> 
                    Atendemos de Lunes a Viernes 8am - 5pm y Sábados 8am - 1pm
                </p>
            </div>
        </div>

    </section>
  )
}

export default MainContact
