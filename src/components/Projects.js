import React from 'react'
import Project from './Project'
import ProjectData from '../ProjectData';

function Projects(){


    let projects = ProjectData.map(item => {
        return <Project project={item}/>
    })

    return (<div className = "bottomLeft" >
        <h2 style={{textAlign:"left"}}>Projects</h2>
        {projects}
    </div>)
}

export default Projects;