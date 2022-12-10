import {Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/Auth/Register';
import Home from './pages/Auth/Home'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';




function App() {
  return (
   <>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgetPassword' element={<ForgetPassword/>} />
      <Route path='/resetPassword/:token' element = {<ResetPassword/>} />

    </Routes>
   </>
  );
}

export default App;
