import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import {TextContainer} from './animated-text.styles';

interface TextProps {
    text: string,
    filledSymbols?: number
}

const AnimatedText: React.FC<TextProps> = ({text, filledSymbols}) => {
    const {ref, inView} = useInView()
    const letters = text.split('')
    const controls = useAnimation()

    useEffect(()=> {
        if (inView) {
            controls.start(i => ({
                opacity: 1,
                y: '0px',
                transition:{
                    duration: 1.2,
                    delay: i*0.1,
                    ease: "easeInOut"
                }
            }))
        }
    }, [inView, controls])

    return (
        <TextContainer ref={ref} >
            {
                letters.map((letter, i) => {
                    return (
                        <motion.span
                        key={i}
                        initial={{y:'-100px', opacity: 0}}
                        animate={controls}
                        custom={i}
                        style={{minWidth: '10px', color: filledSymbols&&i<filledSymbols? '#04c2c9': 'white'}}
                        >
                            {letter}
                        </motion.span>
                    )
                } )
            }
        </TextContainer>
    )
}

export default AnimatedText;