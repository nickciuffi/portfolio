import React from 'react'
import {FiMail} from 'react-icons/fi';
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import './styles.scss'

export default function Footer(){
    return(
        <div className="footer">
            <p className="designed-by">Designed by: Nicolas Ciuffi</p>
            <div className="contacts">
                <div className="cont">
                <FiMail size={36} />
                <p>nicolasciuffi1@gmail.com</p>
                </div>
                <a className="cont" href='https://www.linkedin.com/in/nicolas-ciuffi-dev/'>
                <BsLinkedin size={30} />
                <p>Nicolas Ciuffi</p>
                </a>
                <a className="cont" href='https://github.com/nickciuffi'>
                <BsGithub size={30} />
                <p>nickciuffi</p>
                </a>
            </div>
        </div>
    )
}