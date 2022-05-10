import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';
const About = () => {
    return ( 
    <div className="about">
        <Navbar/>
        <div className="comment">
        <div className="comment1">
            <h1>Quizzy comes with amazing</h1>
            <h1>features like</h1>
        </div>
        <div className="comment2">
            <div className="computer">
            <img src="images/Vector1.png" alt="" />
                <p>Taking exams with your devices</p>
                <p>easily</p>
                
            </div>
            <div className="book">
            <img src="images/Vector2.png" alt="" />
                <p>Plenty of Tests to help you prepare </p>
                <p>for your exams</p>
               
            </div>
            <div className="network">
            <img src="images/Vector3.png" alt="" />
                <p>Detailed statistics showing your</p>
                <p>progress across your tests</p>

                
            </div>
        </div>
    </div>
    <div className="customer">
        <div className="customer1">
            <h1>What our clients say</h1>
            <p>see what our customer say about us. It really matter for us. How good or bad</p>
            <p>We will make it for evaluation to make Quizzy better.</p>
        </div>
        <div className="customer2">
            <div className="one"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
            <div className="two"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
            <div className="three"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Necessitatibus magnam qui totam natus. Eum porro <br></br>hic temporibus ut laudantium, sunt recusandae nam <br></br>incidunt rem aperiam, tempora, repellat commodi<br></br> inventore quia!</p></div>
        </div>
    </div>
    <Footer/>
    </div>
   
     );
}
 
export default About;