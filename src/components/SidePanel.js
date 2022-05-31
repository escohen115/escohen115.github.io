import headshot from "../images/1641490968393.jpeg"
import linkedin from "../images/linkedin.png"
import github from "../images/github-logo-silhouette-in-a-square.png"

function SidePanel(){
    return (
    <div className = "sidePanel" > 
        <img src={headshot} alt="headshot" className ="profilePic"/>
        <div className = "links">
            <a target="_blank" href = "https://github.com/escohen115" rel="noreferrer" > <img className = "imagelink" src={github} alt="github" /></a>
            <a className = "link" target="_blank" href = "https://www.linkedin.com/in/simon-cohen-575413102/" rel="noreferrer" > <img className = "imagelink"src={linkedin} alt="linkedin" /></a>
        </div>
    
    </div>)
}

export default SidePanel

 