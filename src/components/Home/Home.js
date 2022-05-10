import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import  './Home.css';
const Home = () =>{
    return(
        <div className="home">
            <Navbar/>
            <div className="picture">
            <div className="image">
                <img src="images/people.png" alt="" />
            </div>
            <div className="photo">
                <img src="images/circle.png" alt="" />
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
                    <h3>Sign in above or type profile code here</h3>
                    <input type="text" name='text' placeholder='Profile Code' />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home;