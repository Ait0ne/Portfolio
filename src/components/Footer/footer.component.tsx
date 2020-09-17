import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faCopyright, faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';


import {FooterContainer,FooterContainerInner, Contacts, Info, GoToTopButton} from './footer.styles';

interface FooterProps {
    footerRef: React.RefObject<HTMLDivElement>
}

const Footer: React.FC<FooterProps> = ({footerRef}) => {

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    return (
        <FooterContainer ref={footerRef}>
            <FooterContainerInner>
                <GoToTopButton onClick={scrollTop}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} size='1x'/>
                </GoToTopButton>
                <Contacts>
                    <p>Feel free to contact me at <span>bonafide112358@gmail.com</span></p>
                    <p>Or by phone <span>+7-(985)-915-38-58</span></p>
                </Contacts>
                <Info>
                    <a href='https://github.com/Ait0ne/Portfolio.git' target='_blank' rel="noopener noreferrer">
                        <FontAwesomeIcon size='2x' icon={faGithub}/>
                    </a>
                    <span>YUKHANOV SERGEY <span><FontAwesomeIcon icon={faCopyright}/> 2020 </span></span>
                </Info>
            </FooterContainerInner>
        </FooterContainer>
    )
}

export default Footer;