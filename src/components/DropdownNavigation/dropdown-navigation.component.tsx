import React, { Fragment} from 'react';

import {DropdownContainer, DropdownOption} from './dropdown-navigation.styles';
import {useWindowDimensions} from '../../hooks/useWindowDimension.hook';
import SplitAnimation from '../SplitAnimation/split-animation.component';

interface DropdownProps {
    toggleDropdown: () => void
}
interface NavigationProps {
    refs: React.RefObject<HTMLDivElement>[]
}


const DropdownNavigation: React.FC<DropdownProps&NavigationProps> = ({toggleDropdown, refs}) => {
    const {width, height} = useWindowDimensions()

    const handleNavigation = (section: number) => {
        toggleDropdown()
        if (section===0) {
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        } else {
            const top = refs[section-1].current?.offsetTop
            if (top) {
                console.log(refs[section-1])
                console.log(top)
                window.scrollTo({
                    top: top-150,
                    behavior: 'smooth'
                })
            }
        }
    }


    return (
        <Fragment>
            <SplitAnimation fixed={true} width={width} height={height}>
                <DropdownContainer
                >
                    <DropdownOption onClick={() => handleNavigation(0)}>
                        Home
                    </DropdownOption>
                    <DropdownOption onClick={() => handleNavigation(1)}>
                        About
                    </DropdownOption>
                    <DropdownOption onClick={() => handleNavigation(2)}>
                        Portfolio
                    </DropdownOption>
                    <DropdownOption onClick={() => handleNavigation(3)}>
                        Contacts
                    </DropdownOption>
                </DropdownContainer>
            </SplitAnimation>


        </Fragment>
    )
}

export default DropdownNavigation;