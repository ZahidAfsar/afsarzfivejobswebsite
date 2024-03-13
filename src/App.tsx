import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePageComponent from './Components/Pages/HomePageComponent';
import AdobePageComponent from './Components/Pages/AdobePageComponent';
import DiscordPageComponent from './Components/Pages/DiscordPageComponent';
import CiscoPageComponent from './Components/Pages/CiscoPageComponent';
import TeslaPageComponent from './Components/Pages/TeslaPageComponent';
import CodeStackPageComponent from './Components/Pages/CodeStackPageComponent';

function App() {
  return (
   <BrowserRouter>
    <NavbarComponent />
    <Routes>
      <Route path='/' element={<HomePageComponent/>} />
      <Route path='/Adobe' element={<AdobePageComponent/>} />
      <Route path='/Discord' element={<DiscordPageComponent/>} />
      <Route path='/Cisco' element={<CiscoPageComponent/>} />
      <Route path='/Tesla' element={<TeslaPageComponent/>} />
      <Route path='/CodeStack' element={<CodeStackPageComponent/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
