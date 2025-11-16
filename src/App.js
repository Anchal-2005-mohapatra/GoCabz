import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/common/Navbar';
import HomeComponent from './Screens/HomeComponent';
import Footer from './components/common/Footer';
import About from './Screens/About';
import Tour from './Screens/Tour';
import Gallery from './Screens/Gallery';
import Contact  from './Screens/Contact';
import ViewDetails from './Screens/ViewDetails';

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/view-details' element={<ViewDetails/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App