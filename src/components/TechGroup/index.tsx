import React from 'react'
import './styles.scss'

type TechGroupProps = {
    activated: boolean;
    direction: 'up' | 'down';
    hasChanged: boolean;
    leftImg: string;
    centerImg: string;
    rightImg: string;
}

export function TechGroup(props: TechGroupProps){
    return (
        <div className={`tech-group ${props.hasChanged ? '' : 'initial'} ${props.direction} ${props.activated ? 'activated' : 'deactivated'}`}>
                    <div className="tech purple">
                        <img src={props.leftImg} />
                    </div>
                    <div className="tech white">
                        <img src={props.centerImg} />
                    </div>
                    <div className="tech purple">
                        <img src={props.rightImg} />
                    </div>
                    </div>
    )

}