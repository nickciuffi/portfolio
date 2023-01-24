import React from "react"
import { FaHome } from 'react-icons/fa'
import './styles.scss'

type HeaderProps = {
    isVisible: boolean,
    hasHeaderChanged: boolean
}

export function Header(props: HeaderProps){
    return (
        <header className={`header-cont ${props.hasHeaderChanged ? '' : 'initial'} ${props.isVisible ? 'show-header' : 'not-show-header'}`}>
            <a className="link" href="#top">
                <FaHome />
                </a>
            <a className="link">
                Tecnologias
            </a>
            <a className="link">
                Projetos
            </a>
        </header>
    )
}