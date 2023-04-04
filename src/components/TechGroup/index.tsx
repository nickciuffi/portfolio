import React, { useState } from 'react'
import './styles.scss'
import { TechName } from "../TechName";
import LazyLoad from 'react-lazy-load';

type TechGroupProps = {
    activated: boolean,
    direction: 'up' | 'down',
    hasChanged: boolean,
    leftImg: string,
    leftText: string,
    centerImg: string,
    centerText: string,
    rightImg: string,
    rightText: string
}

export function TechGroup(props: TechGroupProps){

    const [leftActive, setLeftActive] = useState(false);
    const [centerActive, setCenterActive] = useState(false);
    const [rightActive, setRightActive] = useState(false);

    function handleHover(event: React.MouseEvent){
        let tech = event.target as HTMLElement;
        if(tech.tagName === 'IMG' || tech.tagName === 'SPAN'){
            if(tech.tagName === 'SPAN' && getComputedStyle(tech).opacity !== "0"){
                setTimeout(() =>{
                    tech = tech.parentElement as HTMLElement
                    if(tech.matches(':hover')){
                        const techNumber = tech.id.split('-')[1]
       
                        switch (techNumber) {
                            case '1':
                                setLeftActive(true)
                                break
                            case '2':
                                setCenterActive(true)
                                break
                            case '3':
                                setRightActive(true)
                                break
                        }
                    }
                
                }, 500)
                return 
            }
            
             tech = tech.parentElement as HTMLElement; 
        }
        const techNumber = tech.id.split('-')[1]
       
        switch (techNumber) {
            case '1':
                setLeftActive(true)
                break
            case '2':
                setCenterActive(true)
                break
            case '3':
                setRightActive(true)
                break
        }
    }
    function handleHoverOut(event: React.MouseEvent){
        let tech = event.target as HTMLElement;
        if(tech.tagName === 'IMG' || tech.tagName === 'SPAN') tech = tech.parentElement as HTMLElement;
        
        const techNumber = tech.id.split('-')[1]
        switch (techNumber) {
            case '1':
                setLeftActive(false)
                break
            case '2':
                setCenterActive(false)
                break
            case '3':
                setRightActive(false)
                break
        }
    }

    return (
        <div className={`tech-group ${props.hasChanged ? '' : 'initial'} ${props.direction} ${props.activated ? 'activated' : 'deactivated'}`}>
                    <div id='tech-1' className="tech purple" onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleHoverOut(e)}>
                    <TechName isActive={leftActive}>{props.leftText}</TechName>
                    <img loading='lazy' src={props.leftImg} alt={props.leftText} />
                    </div>
                    <div id='tech-2' className="tech white" onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleHoverOut(e)}>
                    <TechName isActive={centerActive}>{props.centerText}</TechName>
                        <img loading='lazy' src={props.centerImg} alt={props.centerText} />
                    </div>
                    <div id='tech-3' className="tech purple" onMouseEnter={(e) => handleHover(e)} onMouseLeave={(e) => handleHoverOut(e)}>
                    <TechName isActive={rightActive}>{props.rightText}</TechName>
                        <img loading='lazy' src={props.rightImg} alt={props.rightText} />
                    </div>
                    </div>
    )

}