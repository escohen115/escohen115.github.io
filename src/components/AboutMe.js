import headshot from "../images/1641490968393.jpeg"
import linkedin from "../images/linkedin.png"
import github from "../images/github-logo-silhouette-in-a-square.png"
import email from "../images/email.png"
import phone from "../images/viber.png"


function AboutMe(){
    return (
        
    <div className="right">
        <h2 style={{textAlign:"left"}}>About me</h2>
        {/* <h3 style={{textAlign:"left"}}></h3> */}
        <div className="aboutP" style={{textAlign:"left"}}>
        <b>Hello and welcome! Thanks for stopping by :)</b>
        <br></br>
        <br></br>
        I'm Simon, a full stack software engineer. 
        <br></br>
        Avid problem-solver, tinkerer, and insatiably curious about everything.
        <br></br>
        I keep myself busy working on new projects and studying data structures and algorithms.
        <br></br>
        I also enjoy meditation, biking, and <a href="https://www.youtube.com/watch?v=bjDm_tb6Euw&ab_channel=CommodoreKinematics"> building custom Lego automatons.</a>
        </div>
        
        <h2>Technical Skills</h2>

        <div class="columns" >
            <div className="skill" >JavaScript</div >
            <div className="skill" >Python</div >
            <div className="skill" >Java</div >
            <div className="skill" >React</div >
            <div className="skill" >Git</div >
            <div className="skill" >SQL</div >
            <div className="skill" >Ruby</div >
            <div className="skill" >Ruby on Rails</div >
            <div className="skill" >HTML</div >
            <div className="skill" >CSS</div >
            <div className="skill" >Google Tag Manager</div >
            <div className="skill" >Google Analytics</div >
            <div className="skill" >Adobe Launch</div >
            <div className="skill" >Adobe Analytics</div >
        </div>
        
    </div>
    )
}

export default AboutMe;