import React from 'react';
import NavBar from './navigation/NavBar';

export default function Header({ currentSection, handleSectionChange }){
console.log(currentSection)

    return (
        <>
        <header>
            <h1>&nbsp;Ripple, Crystal&nbsp;</h1>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavBar
                currentSection={currentSection}
                handleSectionChange={handleSectionChange}
            />       
        </header>
        </>
    );
}
