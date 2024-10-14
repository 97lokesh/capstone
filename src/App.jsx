import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import Opening from './Pages/Opening/Opening'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import LoginFail from './Pages/Login/LoginFail'
import Home from './Pages/Home/Home'
// import Profile from './Pages/Profile'
import Reservation from "./Pages/Reservation"
import Guest from './Pages/Guest'
import Fee from "./Pages/Fee";
import './App.css'
import Profile from './components/Common'
import Qualities from "./components/Qualities";
import About from "./components/About";
import Menu from './components/Menu'
import Team from './components/Team'
import NotFound from './Pages/NotFound/NotFound';
import Sucess from './Pages/Sucess/Sucess';


function App(){
  return<>
  <Router>
        <Routes>
          <Route path ='/' element = {<Opening/>} />
          <Route path ='/opening' element = {<Opening/>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/login-fail' element={<LoginFail/>}/>
          <Route path='/home' element={<Home/>}/>
          {/* <Route path='/profile' element={<Profile/>}/> */}
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/fee' element={<Fee/>}/>
          <Route path='/Guest' element={<Guest/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Qualities' element={<Qualities/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/Team' element={<Team/>}/>
          <Route path='/sucess' element={<Sucess/>}/>
          <Route path='*' element={<NotFound/>}/>
          
         
        </Routes>
        <Toaster/>
      </Router>
  </>
}

export default App