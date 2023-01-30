import React from 'react'
import './styles.scss'
import { links } from '../../utils/links'
import { ProjectCard } from '../ProjectCard'
import imgNickChat from '/images/prints/nick-chat.jpg'
import imgTechQuest from '/images/prints/tech-quest.jpg'
import imgBibliotecaEtec from '/images/prints/biblioteca-etec.jpg'

export function ProjectsShower(){
    return(
        <div className='projects-shower'>
            <div id="projects-start"></div>
            <h1 className='title'>Meus projetos</h1>
            <div className="projects">

            <ProjectCard 
            title='Nick Chat'
            desc='Uma aplicação de chat completa, onde o usuário pode criar e utilizar conversas privadas ou em grupo.'
            img={imgNickChat}
            gitHubLink={links.github.nickChat}
            accessLink={links.access.nickChat}
            />
             <ProjectCard 
            title='Tech Quest'
            desc='A Quiz app made with NextJs. For a better loading it uses Static-site generation.'
            img={imgTechQuest}
            gitHubLink={links.github.techQuest}
            accessLink={links.access.techQuest} 
            />
             <ProjectCard 
            title='Biblioteca Etec'
            desc='This is a complete chat app, where the user can create private and group conversations.'
            img={imgBibliotecaEtec}
            gitHubLink={links.github.nickChat}
            
            />
            <ProjectCard 
            title='Nick Chat'
            desc='This is a complete chat app, where the user can create private and group conversations.'
            img={imgNickChat}
            gitHubLink={links.github.nickChat}
            accessLink={links.access.nickChat} 
            />
            </div>
        </div>
    )
}