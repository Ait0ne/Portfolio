import React, { useEffect } from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

import {TextContainer} from './animated-text.styles';

interface TextProps {
    text: string,
    filledSymbols?: number,
    loop?:boolean,
    duration?: number,
    delay?: number
}

const AnimatedText: React.FC<TextProps> = ({text, filledSymbols, loop, duration, delay}) => {
    const {ref, inView} = useInView()
    const letters = text.split('')
    const controls = useAnimation()
    const waveControls = useAnimation()

    useEffect(()=> {
        if (inView) {
            if (loop) {
                controls.start(i => ({
                    y: [`-80px`, '-0px','-80px'],
                    transition:{
                        duration: duration? duration: 1.2,
                        delay: i*(delay?delay: 0.1),
                        ease: "easeInOut",
                        repeatType: 'loop',
                        repeat: Infinity
                    }
                }))                
            } else {
                controls.start(i => ({
                    opacity: 1,
                    y: '0px',
                    transition:{
                        duration: duration? duration: 1.2,
                        delay: i*(delay?delay: 0.1),
                        ease: "easeInOut"
                    }
                }))
            }
        }
    }, [inView, controls, loop, delay, duration, waveControls])

    return (
        <TextContainer ref={ref} >
            {
                letters.map((letter, i) => {
                    return (
                        <motion.span
                        key={i}
                        initial={loop?{y:`-80px`}:{y:'-100px', opacity: 0}}
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