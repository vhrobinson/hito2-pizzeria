
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginPage from './pages/components/LoginPage'
import Register from './pages/components/Register'
import Home from './pages/Home'
function App() {
  return (
  <Router>
      <div className='flex flex-col min-h-screen main-content'>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register/>} />

            <Route path="/login" element={<LoginPage/>} />
        </Routes>
        </div>
        <Footer />

        </Router>    
     
      /*agregu'e en el packega.jso la dependencia "react-router-dom": "^7.0.1"
      con npm install react-router-dom*/
      
    
  )
}
export default App
