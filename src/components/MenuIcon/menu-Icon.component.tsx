import React, { FC } from 'react';

import { MenuIconContainer } from './menu-icon.styles';

export interface MenuIconProps {
    open: Boolean,
    onClick: () => void
}



const MenuIcon : FC<MenuIconProps> = ({open, onClick}) => {
    return (
        <MenuIconContainer onClick={onClick} open={open} >
            <span></span>
            <span></span>
            <span></span>
        </MenuIconContainer>
    )
}


export default MenuIcon;