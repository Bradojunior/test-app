import {Link} from "react-router-dom";
import './Signup2.css';
const Signup2 = () => {
    return ( 
        <div className="many">
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
        <div className="many1">
            <div><label>Matriculation number</label></div>
            <div><input type="text" placeholder='Matriculation number' /></div>
            <div><label>Registration number</label></div>
            <div><input type="text" placeholder='Registration number' /></div>
            <div><label>Department</label></div>
            <div><input type="text" placeholder='Department' /></div>
            <div><label>Program</label></div>
            <div><input type="text" placeholder='Program' /></div>
            <div className="bett">
            <button className='bett1'>Back</button>
            <div className='bett2'>
             <Link to="/Signup3"><button >Confirm</button></Link>
                </div>
        </div>
        </div>
       
    </div>
     );
}
 
export default Signup2;