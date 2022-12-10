import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Movies from './components/Movies';
import Home from './components/home';
import Api from './components/api';


function App() {
  return (
    
    <Router>

      <Navbar/>
   
         <Routes>
   
               <Route path='/' element={<Home/>} />
               <Route path='/Movies' element={<Movies/>} />
               <Route path='/Api' element={<Api/>} />
              
               {/* <Route path='/service' element={<Service/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/footer' element={<Footer/>} /> */}
   
               
   
        </Routes>


    </Router>
       
   
   

  );
}

export default App;
