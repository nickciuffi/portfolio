import React, { useEffect } from 'react';
import './styles.scss'
import {AiFillGithub} from 'react-icons/ai';
import WebIcon from '/images/icon-www.png';
import LazyLoad from 'react-lazy-load'

type ProjectCardProps = {
    title: string,
    desc: string,
    tech: string,
    gitHubLink: string,
    accessLink?: string,
    img: string, 
}

export function ProjectCard(props: ProjectCardProps){

    
    return(
    <div className='project-card hidden left hidden-item'>
        <h2 className="card-title">{props.title}</h2>
        <div className="proj-img">
            <LazyLoad height={180} offset={800}>
        <img src={props.img} alt={props.title} />
        </LazyLoad>
        </div>
       
        <p className='tech-used'>{props.tech}</p>
        <p className="desc">{props.desc}</p>
        <div className="btns">
           <a href={props.gitHubLink}>
            <AiFillGithub size={35} />
            GitHub
            </a>
            {props.accessLink ? (
                <a href={props.accessLink}>
                <img src={WebIcon} alt='www-icon' width={35} height={37} />
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