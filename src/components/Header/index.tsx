import React, {useState} from "react"
import { FaHome } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './styles.scss'

type HeaderProps = {
    isVisible: boolean,
    hasHeaderChanged: boolean,
}

export function Header(props: HeaderProps){

    const [hasSideChanged, setHasSideChanged] = useState(false);
    const [isSideVisible, setIsSideVisible] = useState(false);

    function handleClick(e: MouseEvent){
        if(e.pageX / document.body.clientWidth > 0.45){
            setIsSideVisible(false)
            document.removeEventListener('click', handleClick)
        }
        
    }

    return (
        <>
        <header className={`header-cont ${props.hasHeaderChanged ? '' : 'initial'} ${props.isVisible ? 'show-header' : 'not-show-header'}`}>
            <a className="link mobile-hide" href="#top">
                <FaHome />
                </a>
            <a className="link mobile-hide" href="#technologies-start">
                Tecnologias
            </a>
            <a className="link mobile-hide" href="#projects-start">
                Projetos
            </a>
            <a className="link mobile-show" onClick={() => {
                console.log(isSideVisible)
                setHasSideChanged(true);
                setIsSideVisible(true);
                document.addEventListener('click', handleClick)
            }}>
                <GiHamburgerMenu size={32} />
            </a>

             
        </header>
        <div className={`side-nav ${hasSideChanged ? '' : 'initial'} ${isSideVisible ? "show" : "not-show"}`}>
        <a className="link" href="#top" onClick={() => setIsSideVisible(false)}>
           <FaHome size={20} />
           </a>
       <a className="link" href="#technologies-start" onClick={() => setIsSideVisible(false)}>
           Tecnologias
       </a>
       <a className="link" href="#projects-start" onClick={() => setIsSideVisible(false)}>
           Projetos
       </a>
        </div>
        </>

    )
}