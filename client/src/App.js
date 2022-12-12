import {Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/Auth/Register';
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import RequireAuth from './utils/RequireAuth';
import DashAdmin from './pages/DashAdmin';
import ProfClient from './pages/ProfClient';





function App() {
  return (
   <>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/forgetPassword' element={<ForgetPassword/>} />
      <Route path='/resetPassword/:token' element = {<ResetPassword/>} />



      // client url = DashClt Component
      <Route element={<RequireAuth  Roles={["client"]}/>}>
        <Route path='/client' element={<ProfClient />} />
      </Route>

      // admin url = admin Dash Component
      <Route element={<RequireAuth  Roles={["admin"]}/>}>
        <Route path='/admin' element={<DashAdmin />} />
      </Route>

    </Routes>
   </>
  );
}

export default App;
