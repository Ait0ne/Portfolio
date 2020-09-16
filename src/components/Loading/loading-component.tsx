import React from 'react';

import {LoadingContainer} from './loading.styles';
import AnimatedText from '../AnimatedText/animated-text.component';

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <AnimatedText loop={true} text='Loading...' duration={1.8} delay={0.2}/>
        </LoadingContainer>
    )
}

export default Loading;