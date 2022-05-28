import headshot from "../images/1641490968393.jpeg"

function SidePanel(){
    return <div 
    className = "sidePanel" > Hello from the SidePanel
    <img src={headshot} alt="headshot" className ="profilePic"/>
    </div>
}

export default SidePanel