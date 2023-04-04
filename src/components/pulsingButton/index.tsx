import React from 'react'
import './styles.scss'

type PulsingButtonProps = {
    text: string,
    active: boolean,
    onClick: (e: React.MouseEvent) => void,
}


export function PulsingButton(props: PulsingButtonProps){
    return(
        <button onClick={props.onClick} className={`${props.active ? 'active' : ''} pulsating`}>{props.text}</button>
    )
}