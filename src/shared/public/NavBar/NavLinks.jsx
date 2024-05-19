

import { Link, NavLink } from 'react-router-dom'
import { dropDownLinks } from './NavBar'
import DropDown from './DropDown'


const NavLinks = ({navLinksStyle , linksClient , dropDowns, setDropDowns ,handleDropDown}) => {
  return (
    <div className={`laptopMin:flex items-center ${navLinksStyle}`}>
        <ul className='flex   gap-16 font-normal'>
            {
                linksClient.map( link=> 
                    
                    // ELEMENTO POR CADA LINK
                    <div className='flex gap-2 items-center justify-center relative' key={link}>

                    
                        <NavLink 
                            className='flex  gap-2 items-center justify-center '
                            
                            to={`/${link === 'inicio'? '' : link === 'tienda'? `tienda/siliconas` :link}`}
                        >
                            <span 
                                className='capitalize text-text-white text-2xl'

                            >
                                {link}
                            </span>

                        </NavLink>

                        
                        {
                            //Logica para mostrar el DropDown
                            dropDowns[`${link}DropDown`] && dropDownLinks.includes(link) && <DropDown setDropDowns={setDropDowns} toElement={link}/>
                        }

                        {
                            // Agregar una flecha a todos los links que esten dentro de DropDownLinks
                            dropDownLinks.includes(link) &&
                            <i 
                                className={`text-text-white fa-solid fa-chevron-${dropDowns[`${link}DropDown`]? 'up':'down'}`}
                                onClick={() => handleDropDown(link)}
                            >
                            </i> 
                        }
                    </div>

                )
            }
        </ul>
    </div>
  )
}

export default NavLinks
