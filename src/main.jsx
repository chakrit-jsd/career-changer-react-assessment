import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Error404 from './pages/PageNotFound';
import Owner from './pages/Owner';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/owner' element={<Owner />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </Router>
)
