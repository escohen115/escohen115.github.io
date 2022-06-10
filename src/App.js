import './App.css';
import React from 'react';
import SidePanel from "./components/SidePanel.js";
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (


    <div className="App">

      
        {/* <SidePanel/>
        <AboutMe/>
        <Skills/> 
        <Projects/>
        <Resume/> */}

      <div className="grid">
         <div className="left">
          <SidePanel/>
        </div>
         <div className="right">
          hello
        </div>
      </div>  
      
     
        
      
      
        
     
        
  </div>
  );
}

export default App;



