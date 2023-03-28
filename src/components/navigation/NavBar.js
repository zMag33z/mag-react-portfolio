import React from 'react';
import '../../styles/navigation.css'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
export default function NavBar({ currentSection, handleSectionChange }) {
  return (
    <nav className="nav nav-tabs">
        <a
          href="#about"
          onClick={() => handleSectionChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <div className="all-works">
          <button className="drop-down nav-link">Works</button>
        </div>
        <a
          href="#personal"
          onClick={() => handleSectionChange('Works')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Works' ? 'nav-link active' : 'nav-link'}
        >
          Personal Works
        </a>
        <a
          href="#personal"
          onClick={() => handleSectionChange('Works')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Works' ? 'nav-link active' : 'nav-link'}
        >
          Group Works
        </a>
        <a
          href="#resume"
          onClick={() => handleSectionChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handleSectionChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>

    </nav>
  );
}




<nav class="nav">
    <a class="a1" href="#About" title="About Me">&nbsp;About Me&nbsp;</a>
    <a class="a1" href="#Work" title="Work">&nbsp;Work&nbsp;</a>
    <a class="a1" href="#Contact" title="Contact Me">&nbsp;Contact Me&nbsp;</a>
    <a class="a1" href="" title="N/A">&nbsp;Resume&nbsp;</a>
</nav>