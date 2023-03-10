import React, { useState } from "react";
import { TechGroup } from "../TechGroup";
import './styles.scss';
import {IconDocker, IconFirebase, IconGc, IconHtml, IconJs, IconMysql, IconNext, IconNode, IconPrisma, IconReact, IconSass, IconTs} from '../../utils/icons';
import {PulsingButton} from "../pulsingButton";


export default function StackShower(){

    const [frontActivated, setFrontActivated] = useState(false);
    const [backActivated, setBackActivated] = useState(false);
    const [hasFrontChanged, setHasFrontChanged] = useState(false)
    const [hasBackChanged, setHasBackChanged] = useState(false)

    function handleShowTechs(event: React.MouseEvent){
        const button = event.target as HTMLElement;
        const father = button.parentElement as HTMLElement;
        const fatherClass = father.classList[0];
        fatherClass === 'front' ? setHasFrontChanged(true) : setHasBackChanged(true);
        fatherClass === 'front' ? setFrontActivated(!frontActivated) : setBackActivated(!backActivated);
        
    }

    return (
        <div className="stack-cont">
            <div id="technologies-start"></div>
            <h1 className="title" >Tecnologias que uso</h1>
            <div className="techs">
                <div className="front hidden left">
                   <TechGroup
                   leftImg={IconJs}
                   leftText={"JavaScript"}
                   centerImg={IconHtml}
                   centerText={"HTML"}
                   rightImg={IconSass}
                   rightText={"Sass"}
                   activated={frontActivated} 
                   direction={'up'}
                    hasChanged={hasFrontChanged} />
                        
                      
                   <TechGroup 
                   leftImg={IconReact}
                   leftText={"ReactJs"}
                   centerImg={IconTs}
                   centerText={"TypeScript"}
                   rightImg={IconNext}
                   rightText={"NextJs"}
                   activated={frontActivated}
                    direction={'down'} 
                    hasChanged={hasFrontChanged}
                     />
                        <PulsingButton active={!frontActivated} text="Front-End" onClick={(e) => handleShowTechs(e)}  />
                        
                    </div>
                    <div className="central-line mobile-hide"></div>
                <div className="back hidden right">
                    <TechGroup 
                     leftImg={IconDocker}
                     leftText={"Docker"}
                     centerImg={IconPrisma}
                     centerText={"Prisma"}
                     rightImg={IconFirebase}
                     rightText={"Firebase"}
                    activated={backActivated} 
                    direction={'up'} 
                    hasChanged={hasBackChanged} 
                    />
                    <TechGroup 
                     leftImg={IconGc}
                     leftText={"Google Cloud"}
                     centerImg={IconMysql}
                     centerText={"MySql"}
                     rightImg={IconNode}
                     rightText={"NodeJs"}
                     activated={backActivated}
                     direction={'down'} 
                     hasChanged={hasBackChanged}
                     />
                     <PulsingButton active={!backActivated} text="Back-End" onClick={(e) => handleShowTechs(e)}  />
                        </div>
            </div>
        </div>
    )
}