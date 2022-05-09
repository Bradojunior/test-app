
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
    <div className='Apps'>
      Test 
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={  <About/>}/>
      </Routes>
      <Footer/>
      </div>
      </Router>

  );
}

export default App;
