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
import Dashboard from './componenets/DashBoard'
import Edit from './componenets/Edit';

function App() {

  return (
   <div>
    <BrowserRouter>
    <ScrollTop/>
    <Header/>
    <Routes>
      <Route path='/' element={<><Navbar/> <Body/> <Footer/></>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path="dashboard/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
   
   </div>
  )
}

export default App
