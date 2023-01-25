import React, { useState } from "react";
import { TechGroup } from "../TechGroup";
import './styles.scss';
import IconJs from '../../../public/images/icon-js.png';
import IconHtml from '../../../public/images/icon-html.png';
import IconSass from '../../../public/images/icon-sass.png';
import IconReact from '../../../public/images/icon-react.png'
import IconPrisma from '../../../public/images/icon-prisma.png'
import IconNext from '../../../public/images/icon-next.png'
import IconTs from '../../../public/images/icon-ts.png'
import IconDocker from '../../../public/images/icon-docker.png'
import IconFirebase from '../../../public/images/icon-firebase.png'
import IconGc from '../../../public/images/icon-gc.png'
import IconMysql from '../../../public/images/icon-mysql.png'
import IconNode from '../../../public/images/icon-node.png'
import { PulsingButton } from "../pulsingButton";


export function StackShower(){

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
            <h1 className="title" >Tecnologias</h1>
            <div className="techs">
                <div className="front">
                   <TechGroup
                   leftImg={IconJs}
                   centerImg={IconHtml}
                   rightImg={IconSass}
                   activated={frontActivated} 
                   direction={'up'}
                    hasChanged={hasFrontChanged} 
                    />
                   <TechGroup 
                   leftImg={IconReact}
                   centerImg={IconPrisma}
                   rightImg={IconNext}
                   activated={frontActivated}
                    direction={'down'} 
                    hasChanged={hasFrontChanged}
                     />
                        <PulsingButton active={!frontActivated} text="Front-End" onClick={(e) => handleShowTechs(e)}  />
                        
                    </div>
                    <div className="central-line"></div>
                <div className="back">
                    <TechGroup 
                     leftImg={IconTs}
                     centerImg={IconDocker}
                     rightImg={IconFirebase}
                    activated={backActivated} direction={'up'} hasChanged={hasBackChanged} />
                    <TechGroup 
                     leftImg={IconGc}
                     centerImg={IconMysql}
                     rightImg={IconNode}
                    activated={backActivated} direction={'down'} hasChanged={hasBackChanged} />
                     <PulsingButton active={!backActivated} text="Back-End" onClick={(e) => handleShowTechs(e)}  />
                        </div>
            </div>
        </div>
    )
}