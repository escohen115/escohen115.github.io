import headshot from "../images/1641490968393.jpeg"
import linkedin from "../images/linkedin.png"
import github from "../images/github-logo-silhouette-in-a-square.png"
import email from "../images/email.png"
import phone from "../images/viber.png"


function AboutMe(){
    return (
    <div className = "card" style={{textAlign:"left"}} >
        <div className = "topPanel"> 
        <img src={headshot} alt="headshot" className ="profilePic"/>
        <div className = "links">
            <a target="_blank" href = "https://github.com/escohen115" rel="noreferrer" > <img className = "imagelink" src={github} alt="github" /></a>
            <a className = "link" target="_blank" href = "https://www.linkedin.com/in/simon-cohen-575413102/" rel="noreferrer" > <img className = "imagelink"src={linkedin} alt="linkedin" /></a>
            <a href = "mailto: escohen115@gmail.com"> <img className="imagelink" alt="email" src={email} /> </a>
            <a href = "tel:404-655-8982"> <img className="imagelink" alt="email" src={phone} /> </a>
        </div>
    
    </div>
        <h2>Hello and welcome!</h2>
        {/* <br></br> */}
        My name is Simon Cohen, and I am an Atlanta-based software engineer. 
        <br></br>
        Aside from  working on projects and studying data structures and algorithms, I  also enjoy reading, rollerblading, and <a href="https://www.youtube.com/watch?v=bjDm_tb6Euw&ab_channel=CommodoreKinematics"> building custom Lego automatons.</a>

    </div>)
}

export default AboutMe;