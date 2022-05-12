import {Link} from "react-router-dom";
import './Signup3.css';
const Signup3 = () => {
    return ( 
        <div className="branch">
        <div className="sidebar">
            <div className="top">
            <img src="images/logo.png" alt="" />
            </div>
            <div className="write">
               <ul>
                    <li className='profile'><p>Profile Details</p></li>
                    <li  className='organ'><p>Organisational/Institutional<br></br> Details</p></li>
                    <li><p>Confirm</p></li>

               </ul>
            </div>
            <div className="buttom">
                <p>Save and exit</p>
            </div>
        </div>
        <div className="branch1">
            <div className="icon">
                <img src="images/profile1.png" alt="" />
                <h2>Choose a photo</h2>
            </div>
            <div className="login">
                <div className="login2">
                <div><label>Username</label></div>
                <div><input type="text"name='text' placeholder='Username' /></div>
                <div><label>Password</label></div>
                <div><input type="text"name='text' placeholder='Password' /></div>
                <div><label>Confirm</label></div>
                <div><input type="text"name='text' placeholder='Password' /></div>
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="topping" id="topping"/>
                    <label>Remember me</label><br />
                    <input type="checkbox" name="topping" id="topping"/>
                    <label>I agree to all the terms and privacy policy</label>
                </div>
                <div className="lbutt">
                    <div className='lbutt1'>
                        <Link to="/Signup2"><button >Back</button></Link>
                        </div>
                    <div className="lbutt2">
                        <Link to="/LandingPage"><button >Confirm</button></Link>
                        </div>
                </div>
                

            </div>
        </div>
        </div>
     );
}
 
export default Signup3;