import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/Auth/Register';
import HomePage from './pages/HomePage'
import Login from './pages/Auth/Login'
import ForgetPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import RequireAuth from './utils/RequireAuth';
import DashAdmin from './pages/Admin/DashAdmin';
import Products from './pages/Admin/Products';
import Categories from './pages/Admin/Categories';
import Comments from './pages/Admin/Comments';
import Settings from './pages/Admin/Settings';
import ProfClient from './pages/ProfClient';
import Layout from './components/Layout';
import LayoutAdmin from './components/Admin/LayoutAdmin';
import NotFound from './pages/NotFound';







function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgetPassword' element={<ForgetPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='/client' element={<ProfClient />} />
        </Route>



      // client url = DashClt Component
        <Route element={<RequireAuth Roles={["client"]} />}>
          <Route path='/client' element={<ProfClient />} />
        </Route>


      // admin url = admin Dash Component
        <Route element={<RequireAuth Roles={["admin"]} />}>
          <Route element={<LayoutAdmin />}>
            <Route path='/admin' element={<DashAdmin />} />
            <Route path='/products' element={<Products />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/settings' element={<Settings />} />
          </Route>
        </Route>


        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
