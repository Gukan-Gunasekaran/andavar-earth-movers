import { useState } from 'react';
import Header from './Header';
import {Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import Body from './Body';

function App() {

  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<><Navbar/> <Body/></>}/>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
