import React from 'react';
import burger from '../assets/icons/menu-burger.svg'
import cross from '../assets/icons/cross.svg'
type HamburgerProps={
    isburger:boolean;
}
export const Hamburger = ({isburger = true}: HamburgerProps) => {
    return (
        <>
            {isburger ? <img src={burger} alt={'burger-icon'} width={20} height={20}/> :
                <img src={cross} alt={'cross-icon'} width={20} height={20}/>}
        </>
    );
};

