import { Document,Page } from 'react-pdf/dist/esm/entry.webpack'
import PDF from "../images/Simon Cohen Resume.pdf"
// import PDF from "..images/linked"

function Resume(){
    return <div className = "bottomRight"> 
        <h2 style={{textAlign:"left"}} >Resume</h2>
        <a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1jxWvCAbAmt1yRW3IPpLbWvVN1KlI_m2WFCop4bNrpHc/edit">
            <Document file={PDF}>
            <Page height="500" pageNumber={1}/>
            </Document>
        </a>
        
        
    </div>
}

export default Resume;