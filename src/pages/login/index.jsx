import React from "react";
import { useState } from 'react';
import './styles.css';
import iconPepople from './assets/people.png';
import padlock from './assets/padlock.png';
import enter from './assets/enter.png';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import Pagina1 from '../pagina1/index';





export default function Login() {
   
 
   
   
   
  const [email, setEmail] = useState("")
  const [password, setPassaword] = useState("")
  const navegar = useNavigate();

  function logoff() {   
    navegar("/pagina1");
    }

  return (

    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              THINK FORNECEDOR
            </span>
            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Usuario">
                <img className="icon-email" src={iconPepople} />
              </span>
            </div>
            <div className="wrap-input">
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="senha"
                value={password}
                onChange={e => setPassaword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha">
                <img className="icon-passaword" src={padlock} />
              </span>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn"
                onClick={logoff}
              >LOGIN</button>
              <img className="icon-enter" src={enter} />
            </div>
          </form>
        </div>
        <div className='text'>
          <h1 className='text1'>THINK!</h1>
          <h2 className='text2'>Soluçoes em software e gestao</h2>
        </div>
      </div>
    </div>


  );
}





