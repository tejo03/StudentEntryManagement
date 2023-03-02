import React from 'react';
import './App.css';

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Medium from './medium';
import Login from './Login';
import Border from './Border';
import RegistrationForm from './registration';
import Medium_reg from './Medium_reg';
import LoginForm from './student_login';
function App() {
 
  return (
    
    // <div >
    //   <Header />
    //   <Footer />
     
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/header" element={<Header/>}/>
        <Route path="/login" element={<Medium/>}/>
        <Route path="/medium_reg" element={<Medium_reg/>}/>
        <Route path="/border" element={<Border/>}/>
        <Route path="/student-register" element={<RegistrationForm/>}/>
        <Route path="/student-login" element={<LoginForm/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;

// export default App;
