import {IoMdContact} from "react-icons/io";
import {Link} from "react-router-dom";
const SecondNavbar = () => {
    const style = {color:"blue", fontSize:"2.5rem",marginRight:"1.5rem"}
    return (
        <nav className="navbar">
            <img src="images/logo.png" alt="" />
        <div className="nav-items">
           <Link  to="/">Home</Link>
           <Link className="about" to="/About">About  Us</Link>
        </div>
        <div className="licon">
                < IoMdContact style={style}/>
            </div>
            <select name="Username" id="dropdown">
                <option value="Username">Username</option>
                <option value="Username">Dashboard</option>
                <option value="Username">Take Quiz</option>
                <option value="Username">Test Yourself</option>
                <option value="Username">Logout!</option>
            </select>
        </nav>
        
    );
}
 
export default SecondNavbar;
