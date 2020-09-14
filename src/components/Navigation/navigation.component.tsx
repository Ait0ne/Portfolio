import React, {useState, Fragment} from 'react';

import {
    NavigationContainer, 
    NavigationContainerInner, 
    TitleContainer,
} from './navigation.styles';
import DropdownNavigation from '../DropdownNavigation/dropdown-navigation.component';
import MenuIcon from '../MenuIcon/menu-Icon.component';
import { AnimatePresence } from 'framer-motion';

interface NavigationProps {
    refs: React.RefObject<HTMLDivElement>[]
}


const Navigation: React.FC<NavigationProps> = ({refs}) => {
    const [isMenuOpen, setisMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setisMenuOpen(c => !c)
    }

    return (
        <Fragment>
        <NavigationContainer>
            <NavigationContainerInner>
                <TitleContainer>
                    YukhanovSergey
                </TitleContainer>
                <MenuIcon onClick={toggleMenuOpen} open={isMenuOpen}/>
            </NavigationContainerInner>
        </NavigationContainer>
        <AnimatePresence>
            {
                isMenuOpen? <DropdownNavigation key='dropdown' toggleDropdown={toggleMenuOpen} refs={refs}/> : null
            }
        </AnimatePresence>
        </Fragment>
    )
}

export default Navigation;