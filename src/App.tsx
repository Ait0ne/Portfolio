import React, { useState, useEffect, useRef } from 'react';
import {useAnimation} from 'framer-motion';

import {AppContainer, AnimationContainer} from './App.styles';
import {enterAnimationVariants} from './framer/variants';
import LandingSection from './components/LandingSection/landing-section.components';
import AboutSection from './components/AboutSection/about-section.component';
import Loading from './components/Loading/loading-component';
import Navigation from './components/Navigation/navigation.component';
import ProjectsSection from './components/ProjectsSection/projects-section.component';
import Footer from './components/Footer/footer.component';


function App() {
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()
  const [animationEnd, setAnimationEnd] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    setTimeout(()=> {
      controls.start('enter')
      .then(() => {
        setAnimationEnd(true)
      })
    }, 600)
  }, [controls])

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 1300);
  }, [])


  return (
    <AppContainer>
      <Navigation refs={[aboutRef, projectsRef, footerRef]}/>
      <AnimationContainer
      animate={controls}
      initial={{left: '0%', width: '0%'}}
      variants={enterAnimationVariants}
      >
      </AnimationContainer>
      {
        !loading? 
        null
        :
        <Loading/>
      }
      <LandingSection animationEnd={animationEnd} />
      <AboutSection aboutRef={aboutRef}/>
      <ProjectsSection projectsRef={projectsRef}/>
      <Footer footerRef={footerRef}/>
    </AppContainer>
  );
}

export default App;
