
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Signup2 from './components/Signup2/Signup2';
import Signup3 from './components/Signup3/Signup3';
import LandingPage from './components/LandingPage/LandingPage';
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
    <div className='Apps'>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signup2' element={<Signup2/>}/>
        <Route path='/Signup3' element={<Signup3/>}/>
        <Route path='/LandingPage' element={<LandingPage/>}/>
      </Routes>
    
      </div>
      </Router>

  );
}

export default App;
