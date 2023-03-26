import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./assets/images', false, /\.(png|jpe?g|svg)$/));

console.log(images);


export default function App(){
  return (
    <PortfolioContainer />
  );
}


// import React from 'react';
// import { Header, Footer} from './components';
// import { About, Works, Contact } from './components/sections';


// // app to display in body - Header, Section Selected, and Footer.
// function App() {

//   const [currentSection, setCurrentSection] = useState('About');

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderSection = () => {
//       if (currentSection === 'About') {
//       return <About />;
//       }
//       if (currentSection === 'Works') {
//       return <Works />;
//       }
//       return <Contact />;
//   };

//   return (
//   <>
//     <Header
//       currentSection={currentSection}
//       handleSectionChange={handleSectionChange}
//     ></Header>
//     <main>{renderSection()}</main>
//     <Footer></Footer>
//   </>
//   );
// }

// export default App;
