import headshot from "../images/1641490968393.jpeg"
import linkedin from "../images/linkedin.png"
import github from "../images/github-logo-silhouette-in-a-square.png"
import email from "../images/email.png"
import phone from "../images/viber.png"

function SidePanel(){
    return (

        
    <div className="left"> 


        <div className="picDiv">
            <img src={headshot} alt="headshot" className ="profilePic"/>
        </div>
        <h2 style={{color:"black",textAlign:"center"}}>Simon Cohen</h2>

        {/* <div className = "menu">
            
                <button className="button">Home</button>
                <button className="button">About Me</button>
                <button className="button">My Projects</button>
                <button className="button">Resume</button>
            
        </div>     */}

        <div className="linkDiv">
            <div className = "links">
                <a className = "socialLink" target="_blank" href = "https://github.com/escohen115" rel="noreferrer" > <img className = "imagelink" src={github} alt="github" /></a>
                <a className = "socialLink" target="_blank" href = "https://www.linkedin.com/in/simon-cohen-575413102/" rel="noreferrer" > <img className = "imagelink"src={linkedin} alt="linkedin" /></a>
                <a className = "socialLink" href = "mailto: escohen115@gmail.com"> <img className="imagelink" alt="email" src={email} /> </a>
                <a className = "socialLink" href = "tel:404-655-8982"> <img className="imagelink" alt="email" src={phone} /> </a>
            </div>
        </div>
        
    
    </div>)
}

export default SidePanel

 