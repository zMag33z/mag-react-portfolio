// import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

// console.log(images);


// export default function App(){
//   return (
//     <PortfolioContainer images={images}/>
//   );
// }


import React, {useState} from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import  About from './components/sections/About';
import Works from './components/sections/Works';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';


// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

// console.log(images);


// app to display in body div root - Header, Section Selected, and Footer.
export default function App() {

  const [currentSection, setCurrentSection] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderSection = () => {
      if (currentSection === 'About') {
      return <About />;
      }
      if (currentSection === 'Works') {
      return <Works />;
      }
      if(currentSection === 'Resume'){
      return <Resume />;
      }
      return <Contact />;
  };

  const handleSectionChange = (section) => setCurrentSection(section);

  return (
  <>
    <Header
      currentSection={currentSection}
      handleSectionChange={handleSectionChange}
    />

    <Hero />

    <main>{renderSection()}</main>
    
    <Footer />
  </>

  
  );
}
