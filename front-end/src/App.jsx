import { useState } from 'react';
import Header from './Header';
import {Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';
import Admin from './Admin';
import LoaderForm from './LoaderForm';
import TractorForm from './TractorForm';
import Footer from './Footer';
import "./App.css";
import ScrollTop from './ScrollTop';

function App() {

  return (
   <div>
    <BrowserRouter>
    <ScrollTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<><Navbar/> <Body/></>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/loaderForm' element={<LoaderForm/>}/>
      <Route path='/tractorForm' element={<TractorForm/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
   </div>
  )
}

export default App
