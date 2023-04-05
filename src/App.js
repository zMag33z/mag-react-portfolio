import React, {useState} from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

import About from './components/sections/About';
import Works from './components/sections/Works';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

// collecting all images from assets/images folder
function importAll(imgContext) {
  return imgContext.keys().map(imgContext);
};

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

// app to display in body div root - Header, Section Render(Selected,  Footer.
export default function App() {

  const [currentSection, setCurrentSection] = useState('About');

  // This method is checking to see what the value of `currentSection` is. Depending on the value, we return the corresponding component to the render function.
  const renderSection = () => {
      if (currentSection === 'About') {
      return <About />;
      }
      if (currentSection === 'Works') {
      return <Works 
              images={images}/>;
      }
      if(currentSection === 'Resume'){
      return <Resume />;
      }
      return <Contact />;
  };

  // here we create a variable to equal the current section string value received from our navbar, and if this value changes, then it'll be functioned off to useState and record a new value.
  const handleSectionChange = (section) => setCurrentSection(section);

  // then return the display of the section selected.
  return (
  <>
    <Header
      currentSection={currentSection}
      handleSectionChange={handleSectionChange}
    />

    <Hero
      heroImg={images[2]}
      selfImg={images[0]}
    />

    <main className='content'>{renderSection()}</main>
    
    <Footer />
  </>  
  );
};
