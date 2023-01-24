import React, { useEffect } from "react"
import './styles.scss'

export function NameShower(){


    return (
        <div className='name-shower'>
      <p className="pre name-comp">Olá, meu nome é</p>
      <div className="name-cont">
      <p className='name'>NICOLAS CIUFFI</p>
      </div>    
     
      <p className='pos name-comp'>Eu sou um desenvolvedor Web</p>  
      </div>
    )
}