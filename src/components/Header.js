import React, { useState } from 'react';
import NavBar from './navigation/NavBar';

export default function Header(){
    const handleSelectionChange = (section) => setCurrentSection(section);

    return (
        <>
        <header>
            <h1>&nbsp;Ripple, Crystal&nbsp;</h1>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavBar currentSelection={currentSelection} handleSelectionChange={handleSelectionChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
        
        </header>

        {renderSection()}
        </>
    );
}
