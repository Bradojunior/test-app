
import "./Navbar.css";
import {IoMdContact} from "react-icons/io";
import {Link} from "react-router-dom";
const Navbar = () => {
    const style = {color:"blue", fontSize:"2.5rem",marginRight:"1.5rem"}
    return (
        <nav className="navbar">
            <img src="images/logo.png" alt="" />
        <div className="nav-items">
           <Link  to="/">Home</Link>
           <Link className="about" to="/About">About  Us</Link>
        </div>
        <div className="icon">
                < IoMdContact style={style}/>
            </div>
        <div className="button">
            <button>Sign In</button>
            
        </div>
        </nav>
        
    );
}
 
export default Navbar;
