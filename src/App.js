import './App.css';
import React from 'react';
import SidePanel from "./components/SidePanel.js";
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';


function App() {
  return (


    <div className="App">

      
        {/* <SidePanel/>
        <AboutMe/>
        <Skills/> 
        <Projects/>
        <Resume/> */}
      
      <div className="grid">
        <SidePanel/>
        <AboutMe/>
        <Projects/>
        <Resume/>
      
      </div>
      
      
     
        
      
      
        
     
        
  </div>
  );
}

export default App;



