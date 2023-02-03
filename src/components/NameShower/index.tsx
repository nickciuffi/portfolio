import React, { useEffect } from "react"
import { KnowMoreBtn } from "../KnowMoreBtn"
import './styles.scss'

type NameShowerProps = {
  KnowMoreActive: boolean,
  HasKnowMoreChanged: boolean
}

export function NameShower(props: NameShowerProps){


    return (
        <div className='name-shower'>
      <p className="pre name-comp">Olá, eu sou o</p>
      <div className="name-cont">
      <p className='name'>NICOLAS CIUFFI</p>
      </div>    
     
      <p className='pos name-comp'>Engenheiro de computação</p>  
      <KnowMoreBtn hasKnowMoreChanged={props.HasKnowMoreChanged} isActive={props.KnowMoreActive} />
      </div>
    )
}