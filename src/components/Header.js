import { LOGO_URL } from "../utils/constants"
import { useState } from "react";

const Title = () => {
    return(
            <a href = "/">
            <img 
            className="logo"
            alt="logo" 
            src= {LOGO_URL}/>
            </a>
    )
}


const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    
    return (
            <div className="header">
            <Title/>
            
            <div className="nav-items">
                    <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Cart</li>
                            <button onClick = {() => 
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                            } 
                            className="loginButton">{btnName}</button>
                    </ul>
            </div>

            </div>
    )
}

export default Header;