import {Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/Register';
import Home from './pages/Home'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword';



function App() {
  return (
   <>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgetPassword' element={<ForgetPassword/>} />

    </Routes>
   </>
  );
}

export default App;
