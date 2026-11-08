import { useState } from 'react';
import Header from './componenets/Header';
import {Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Body from './componenets/Body';
import Admin from './componenets/Admin';
import Booking from './componenets/Booking';
import Footer from './componenets/Footer';
import "./App.css";
import ScrollTop from './componenets/ScrollTop';
import Orders from './componenets/Orders';
import Dashboard from './dashboards/Dashboard';

function App() {

  return (
   <div>
    <BrowserRouter>
    <ScrollTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<><Navbar/> <Body/> </>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/dashboard'element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
   <Footer/>
   </div>
  )
}

export default App
