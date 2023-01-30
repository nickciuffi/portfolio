import React, { useEffect } from 'react';
import './styles.scss'
import {AiFillGithub} from 'react-icons/ai';
import WebIcon from '/images/icon-www.png';

type ProjectCardProps = {
    title: string,
    desc: string,
    gitHubLink: string,
    accessLink?: string,
    img: string, 
}

export function ProjectCard(props: ProjectCardProps){

    
    return(
    <div className='project-card'>
        <h2 className="card-title">{props.title}</h2>
        <div className="proj-img">
        <img src={props.img} />
        </div>
        <h2 className="desc">{props.desc}</h2>
        <div className="btns">
           <a href={props.gitHubLink}>
            <AiFillGithub size={35} />
            GitHub
            </a>
            {props.accessLink ? (
                <a href={props.accessLink}>
                <img src={WebIcon} />
                Access
                </a>
            )
                :
                (<></>)
            }
            
        </div>
    </div>
    )
}