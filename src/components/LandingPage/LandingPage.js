import SecondNavbar from '../SecondNavbar/SecondNavbar';
import './LandingPage.css';
const LandingPage = () => {
    return ( 
        <div className="landing">
            <SecondNavbar/>
            <div className="photos">
              <div className="photo1">
                  <img src="images/people.png" alt="" />
              </div>
              <div className="photo2">
                <img src="images/contact.png" alt="" />
            </div>  
            </div>
            
            <div className="write-up">
                <div className="write-up1">
                    <h1>Quizzy</h1>
                    <h3>Landing Page UI Deseign</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!
                    </p>
                </div>
                <div className="write-up2">
                    <h3>Type Your Quiz code here</h3>
                    <input type="text" name='text' placeholder='Quiz Code'/>
                    <div className="but"><button>Dashboard</button></div>
                </div>
            </div>
       </div>
    );
}
 
export default LandingPage;