
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Signin from './components/Signin/Signin';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
    <div className='Apps'>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={  <About/>}/>
        <Route path='/Signin' element={  <Signin/>}/>
      </Routes>
    
      </div>
      </Router>

  );
}

export default App;
