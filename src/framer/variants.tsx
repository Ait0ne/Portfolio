import {Variants} from 'framer-motion';


export const enterAnimationVariants: Variants = {
    enter: {
        width: ['0%', '100%', '100%', '0%'],
        left: ['0%', '0%', '0%', '100%'],
        transition: {
            duration: 1,
            times: [0,0.3,0.7,1]
        }
    }
} 