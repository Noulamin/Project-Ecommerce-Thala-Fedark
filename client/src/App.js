import {Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Register from './pages/register';
import Index from './pages/home'




function App() {
  return (
   <>
    <Routes>
      <Route path='/' element= {<Index/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
   </>
  );
}

export default App;
