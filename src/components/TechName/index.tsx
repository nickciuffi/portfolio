import React from 'react'
import './styles.scss'

type TechNameProps = {
    isActive: boolean,
    children: string
}

export function TechName(props: TechNameProps){
    return (
        <span className={`tech-name ${props.isActive ? 'active' : 'inactive'}`}>{props.children}</span>
    )
}