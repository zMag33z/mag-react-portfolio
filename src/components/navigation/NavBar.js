import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentSection, handleSectionChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handleSectionChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentSection === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handleSectionChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#works"
          onClick={() => handleSectionChange('Works')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Works' ? 'nav-link active' : 'nav-link'}
        >
          Works
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handleSectionChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;


<nav class="nav">
    <a class="a1" href="#About" title="About Me">&nbsp;About Me&nbsp;</a>
    <a class="a1" href="#Work" title="Work">&nbsp;Work&nbsp;</a>
    <a class="a1" href="#Contact" title="Contact Me">&nbsp;Contact Me&nbsp;</a>
    <a class="a1" href="" title="N/A">&nbsp;Resume&nbsp;</a>
</nav>