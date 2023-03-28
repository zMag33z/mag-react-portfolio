import React from 'react';
import NavBar from './navigation/NavBar';
import '../styles/utility.css';
import '../styles/index.css';
import '../styles/section.css';


export default function Header({ currentSection, handleSectionChange }){


    return (
        <>
        <header>
            <h1>Ripple, Crystal</h1>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavBar
                currentSection={currentSection}
                handleSectionChange={handleSectionChange}
            />       
        </header>
        </>
    );
}
