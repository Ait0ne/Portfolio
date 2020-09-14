import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import {
    SkillBarOuter,
    SkillBarContainer,
    SkillBarInner,
    SkillBarPercentage,
    SkillBarTitle
} from './skill-bar.styles';

interface SkillProps {
    percentage: number,
    title: string,
    inView: boolean,
    index: number
}

const SkillBar: React.FC<SkillProps> = ({percentage, title, inView, index}) => {
    const controls = useAnimation()

    useEffect(()=> {
        if (inView) {
            controls.start(p => ({
                width: `${(p-35)/65*100}%`
            }))
        }
    }, [inView, controls])

    return(
        <SkillBarContainer>
            <SkillBarTitle>
                <span>{title}</span>
            </SkillBarTitle>
            <SkillBarOuter>
                <SkillBarInner
                animate={controls}
                custom={percentage}
                transition={{
                    duration: 1.3,
                    delay: index*0.15
                }}
                >
                </SkillBarInner>
                <SkillBarPercentage>
                    {percentage}%
                </SkillBarPercentage>
            </SkillBarOuter>
        </SkillBarContainer>
    )
}

export default SkillBar;