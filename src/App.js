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
      <Header/>
      
      <div className='mainContent'>
        <SidePanel/>
      <div className = "subsection">
        <Skills/>
        <AboutMe/>
        <Projects/>
        <Resume/>
      </div>
        
      </div>
      
      
        
    
      
    </div>
  );
}

export default App;



