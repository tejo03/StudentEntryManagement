import React, {useState,setState} from 'react';
import './style_reg.css'
import Header from './Header';
import Footer from './Footer';
function RegistrationForm() {
    return(
      <>
      <Header/>
        <div className='reg'>
          <h1 style={{textAlign:"center",fontStyle:"italic"}}>Student Registration</h1>
      <div className="form">
      <div class='row'>
            <div class='col-sm-12'>
          <div className="form-body">
            <div class='row'>
                <div class='col-sm-6'>
                <div className="fullname">
                  <label className="form__label" for="fullName">Full Name </label>
                  <input className="form__input" type="text" id="fullName" placeholder="Enter Name"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              </div>
              <div class='col-sm-6'>
                <div className="username">
                  <label className="form__label" for="userName">Username </label>
                  <input className="form__input" type='text' id="userName" placeholder="Enter Registration Number"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              </div>
            </div>
            <div class='row'>
                <div class='col-sm-6'>
                <div className="registration-number">
                  <label className="form__label" for="registrationNumber">Registration Number </label>
                  <input className="form__input" type="text" id="registrationNumber" placeholder="Enter Registration Number"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Enter Email"/>
              </div>
              <div className="gender">
                 <label className="form__label" for="gender">Gender </label>
                  <select name='gender' required>
                  <option hidden disabled selected value>Choose Gender</option>
                  <option class value="M">Male</option>
                  <option class value="F">Female</option>
                  </select>
              </div>
              <div className="currentyear">
                  <label className="form__label" for="currentYear">Current Year </label>
                  <input className="form__input" type="number" id="currentName" placeholder="Ex: 1" min="1" max="4"/>
              </div>
              </div>
              <div class='col-sm-6'>
                <div className="rollnumber">
                  <label className="form__label" for="rollNumber">Roll Number </label>
                  <input className="form__input" type="text" id="rollNumber" placeholder="Roll Number"/>
              </div>
              <div className="mobile-number">
                  <label className="form__label" for="mobileNumber">Mobile Number </label>
                  <input className="form__input" type="tel" id="mobileNumber" placeholder="Enter Mobile Number"/>
              </div>
              <div className="course">
                 <label className="form__label" for="course">Course </label>
                  <select name='course' required>
                  <option hidden disabled selected value>Choose Course</option>
                  <option class value="1">B Tech</option>
                  <option class value="2">M Tech</option>
                  <option class value="3">PhD</option>
                  </select>
              </div>
              <div className="branch">
                 <label className="form__label" for="branch">Branch </label>
                  <select name='branch' required>
                  <option hidden disabled selected value>Choose Branch</option>
                  <option class value="1">CSE</option>
                  <option class value="2">ECE</option>
                  <option class value="3">EEE</option>
                  <option class value="4">Mechanical</option>
                  </select>
              </div>
              </div>
            </div>   
          </div>
          </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn btn-primary btn-large">Register</button>
          </div>
      </div> 
      </div> 
      <Footer/>
      </>    
    )       
}
export default RegistrationForm;