import React from 'react'
import './styles.scss'
import { links } from '../../utils/links'
import { ProjectCard } from '../ProjectCard'
import imgNickChat from '/images/prints/nick-chat.jpg'
import imgTechQuest from '/images/prints/tech-quest.jpg'
import imgBibliotecaEtec from '/images/prints/biblioteca-etec.jpg'
import imgRizaSementes from '/images/prints/riza-sementes.jpg'
import imgYvyReciclagem from '/images/prints/yvy-reciclagem.jpg'
import imgSpaceInvaded from '/images/prints/space-invaded.jpg'

export default function ProjectsShower(){
    return(
        <div className='projects-shower'>
            <div id="projects-start"></div>
            <h1 className='title'>Meus projetos</h1>
            <div className="projects">

            <ProjectCard 
            title='Nick Chat'
            desc='Uma aplicação de chat completa, onde o usuário pode criar e utilizar conversas privadas ou em grupo.'
            tech='ReactJs, TypesCript, Firebase' 
            img={imgNickChat}
            gitHubLink={links.github.nickChat}
            accessLink={links.access.nickChat}
            />
             <ProjectCard 
            title='Tech Quest'
            desc='Uma aplicação de quiz. Para uma melhor experiencia do usuário, utilizei Static-Site Generation.'
            tech='NextJs, NodeJs, MySql'
            img={imgTechQuest}
            gitHubLink={links.github.techQuest}
            accessLink={links.access.techQuest} 
            />
             <ProjectCard 
            title='Biblioteca Etec'
            desc='Este foi o meu projeto de TCC na ETEC. Se trata de um sistema organizacional para a biblioteca da escola.'
            tech='C#, MySql'
            img={imgBibliotecaEtec}
            gitHubLink={links.github.bibliotecaEtec}
            
            />
            <ProjectCard 
            title='Riza Sementes'
            desc='Este foi meu primeiro website como freelancer. Ele foi desenvolvido em parceria com Micael Miranda.'
            tech='HTML, CSS, JS'
            img={imgRizaSementes}
            gitHubLink={links.github.rizaSementes}
            accessLink={links.access.rizaSementes} 
            />
            <ProjectCard 
            title='Yvy Reciclagem'
            desc='Website desenvolvido para a empresa Yvy Reciclagem. Ele foi desenvolvido em parceria com Micael Miranda.'
            tech='HTML, SASS, JS'
            img={imgYvyReciclagem}
            gitHubLink={links.github.yvyReciclagem}
            accessLink={links.access.yvyReciclagem} 
            />
            <ProjectCard 
            title='Space Invaded'
            desc='Um jogo desktop, onde o jogador controla um alien, cujo planeta está sendo invadido por astronautas.'
            tech='Java'
            img={imgSpaceInvaded}
            gitHubLink={links.github.spaceInvaded}
            
            />
            </div>
        </div>
    )
}