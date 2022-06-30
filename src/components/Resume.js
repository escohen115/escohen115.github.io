import { Document } from 'react-pdf'
import {PDF} from "..images/Simon Cohen Resume.pdf"
function Resume(){
    return <div className = "bottomRight"> 
        <h2 style={{textAlign:"left"}}>Resume</h2>
        <Document file={PDF}/>
        
    </div>
}

export default Resume;