import {AiOutlineArrowDown} from 'react-icons/ai'
import './styles.scss'

type KnowMoreProps = {
    isActive: boolean,
    hasKnowMoreChanged: boolean
}

export function KnowMoreBtn(props: KnowMoreProps){

    
    return (
        <a href='#know-more-start' className={`know-more-btn ${props.hasKnowMoreChanged ? '' : 'initial'} ${props.isActive ? 'active' : 'inactive'}`}>Saiba mais <AiOutlineArrowDown size={30} /></a>
    )
}