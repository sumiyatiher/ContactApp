import Logo from "../../Images/React.png"

  function MainHeader(){
    return (
        <div className="pt-2 py-1 pl-2" style={{backgroundColor : "black",borderBottom: "2px solid white"}}>
            <img src={Logo} alt="Header" style={{verticalAlign: "top",height: "40px"}}></img>
            <span className="h2 pt-4" style={{color: "#00bcd4"}}>Contact App</span>
        </div>
    );
  }
  
 export default function Header(){
    return(
    <div>
        <MainHeader></MainHeader>
    </div>
    )
  }
