import linkedin from "../images/linkedin.png"
import github from "../images/github-logo-silhouette-in-a-square.png"
import email from "../images/email.png"
import phone from "../images/viber.png"




function SocialLinks (){
    return(
        <div className = "links">
            <a className = "socialLink" target="_blank" href = "https://github.com/escohen115" rel="noreferrer" > <img className = "imagelink" src={github} alt="github" /></a>
            <a className = "socialLink" target="_blank" href = "https://www.linkedin.com/in/simon-cohen-575413102/" rel="noreferrer" > <img className = "imagelink"src={linkedin} alt="linkedin" /></a>
            <a className = "socialLink" href = "mailto: escohen115@gmail.com"> <img className="imagelink" alt="email" src={email} /> </a>
            <a className = "socialLink" href = "tel:404-655-8982"> <img className="imagelink" alt="email" src={phone} /> </a>
        </div>
    )
}

export default SocialLinks