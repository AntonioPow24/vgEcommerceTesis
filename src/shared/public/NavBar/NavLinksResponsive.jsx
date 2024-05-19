import React from 'react'
import { Link } from 'react-router-dom'


const NavLinksResponsive = ({ navLinkResponsiveStyle, linksClient, handleMenuClose }) => {




    return (
        <div className={`${navLinkResponsiveStyle}  navLinksResponsive`}>
            <ul className="flex flex-col items-center justify-start h-screen py-10">
                {linksClient.map((link) => (
                    <li key={link} className="my-4">
                        <Link 
                            href={`/${link === 'inicio' ? '' : link === 'tienda' ? 'tienda/siliconas' : link}`}
                            onClick={() => handleMenuClose()}
                        >
                            <span className="text-3xl text-white capitalize hover:text-skyBlueApp transition duration-300">
                                {link}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinksResponsive