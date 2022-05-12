import {Link} from "react-router-dom";
import './Signup.css';
const Sidebar = () => {
    return ( 
        <div className="main">
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
        <div className="mainsub">
        <div className="third">
            <div className="first">
                <div className="name">
                    <div>
                    <label>Name</label>
                    </div>
                    <div>
                    <input type="text" name="text" placeholder="Name"/>
                    </div>
                </div>
                <div className="surname">
                    <div> <label>Surname</label></div>
                    <div><input type="text" name="text" placeholder="Surname"/></div>
                </div>
                <div className="role">
                    <div> <label>Role</label></div>
                    <div><input type="text" name="text" placeholder="Examiner     Examinee" /></div>
                </div>
            </div>
            <div className="second">
            <div className="middle name">
                    <div> <label>Middle Name</label></div>
                    <div><input type="text" name="text" placeholder="Middle Name" /></div>
                </div>
                <div className="birthday">
                    <div> <label>Birthday</label></div>
                    <div><input type="date" name="text" /></div>
                </div>
                <div className="organisation">
                    <div> <label>Organisation/Institution</label></div>
                    <div><input type="text" name="text" placeholder="Organisation/Institution" /></div>
                </div>
            </div>
        </div>
            <div className="code">
                    <div> <label>Institution/Organisation Code/label</label></div>
                    <div><input type="text" name="text" placeholder="Code from Your Organisation or Institution" /></div>
            </div>
            <div className="button">
                <div className="btn1"> <button>Back</button></div>
                <div className="btn2"> 
                <Link to="/Signup2"><button>Confirm</button></Link>
                </div>
            </div>
            
        </div>
        </div>
        
        
     );
}
 
export default Sidebar;