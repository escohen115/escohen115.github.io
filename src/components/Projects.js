import React from 'react'
import Project from './Project'
import ProjectData from '../ProjectData';

function Projects(){


    let projects = ProjectData.map(item => {
        return <Project project={item}/>
    })

    return (<div className = "card" > 
        {projects}
    </div>)
}

export default Projects;