import React, {Fragment, useState} from 'react';
import {motion} from 'framer-motion';


interface SplitAnimationProps {
    children: React.ReactNode,
    fixed: boolean,
    width: number,
    height: number
}

const SplitAnimation: React.FC<SplitAnimationProps> = ({children, fixed, width, height}) => {
    const [inAnimation, setInAnimation] = useState(true)

    return(
        <Fragment>
            
            <svg height="0" width="0" >
                <defs>
                    <clipPath id="clipPathUpper" >
                        <polygon points={`${width} 0, 0 0, 0 ${height}`}/>
                    </clipPath>
                </defs>
            </svg>
            <svg height="0" width="0" >
                <defs>
                    <clipPath id="clipPathLower" >
                        <polygon points={`${width} 0, ${width} ${height}, 0 ${height}`}/>
                    </clipPath>
                </defs>
            </svg>
            <motion.div
            initial={{x: '-100%', y: '100%'}}
            animate={{x: '0%', y: '0%'}}
            exit={{x: '-100%', y: '100%'}}
            transition={{duration: 0.5}}
            onAnimationComplete={()=>setInAnimation(false)}
            onAnimationStart={() => setInAnimation(true)}
            style={{
                width:'100%',
                height: '100%',
                clipPath: inAnimation? `url("#clipPathUpper")`: 'none',
                zIndex:9,
                position: fixed?"fixed": 'absolute',
                top:0,
                left:0
            }}
            >
                {children}
            </motion.div>
                    <motion.div 
                    initial={{x: '100%', y: '-100%'}}
                    animate={{x: '0%', y: '0%'}}
                    exit={{x: '100%', y: '-100%'}}
                    transition={{duration: 0.5}}
                    style={{
                        width:'100%',
                        height: '100%',
                        position: fixed?"fixed": 'absolute',
                        top: 0,
                        left: 0,
                        clipPath: `url("#clipPathLower")`,
                        zIndex:8
                    }}
                    >
                        {children}
                    </motion.div>
        </Fragment>
    )
}

export default SplitAnimation;