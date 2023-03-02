import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css'
import Header from './Header';
import Footer from './Footer';
function LoginForm() {
    // const {login,handleSubmit}=useForm();
    // const handleLogin=(data)=>console.log(data);
    // function validate(){
    //     var r= new RegExp();
    //     r='/[a-zA-Z]/';
    //     var inp=document.getElementById("userName").value;
    //     if(inp.match(r)){
    //         alert("username invalid");
    //     }
    // }
    return(
        <>
        <Header/>
        <div className='log'>
            <div class='row person'>
                <div class='col-sm-6 '>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <h2 className='per'>Student Login</h2>
                        </div>
                    </div>
                </div>
                <div class='col-sm-6 '>
                    <div class='row'>
                        <div class='col-sm-12'>
                        <div className="form">
          <div className="form-body">
           <div className="username">
                  <label className="form__label" for="userName" >Username </label>
                  <input className="form__input" type='text' id="userName" placeholder="Registration Number" />
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" />
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn btn-primary btn-large">Login</button>
          </div>
      </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )

}

export default LoginForm;