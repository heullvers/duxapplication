import React, { useState } from 'react';
import './index.css';
import { Button } from '../../Button';
import { BrowserRouter, Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';
import Duck from './../../../images/duck.png';
import db from './../../../firebase';
import firebase from 'firebase/app';
import styled from 'styled-components';

function Footer() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const enviar = (e) =>{
    e.preventDefault();
    if(email){

      db.collection("emails").add({
        email: email,
        time: firebase.firestore.FieldValue.serverTimestamp(),

      });

      setEmail("");
      setMessage("Obrigado por se inscrever!");
      setTimeout(() => {
        setMessage("");
      }, 3000)
    }
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Seja membro exclusivo da Dux para receber novidades e cupons de desconto!
        </p>
        <p className='footer-subscription-text'>
          Você pode se desinscrever a qualquer momento.
        </p>
        <div className='input-areas'>
          <form onSubmit={enviar}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu email'
              onChange={handleEmail}
              value={email}
            />
            <Button buttonStyle='btn--outline' type="submit">Inscrever-se</Button>
          </form>
          {message && <Alert>{message}</Alert>}
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          <BrowserRouter><Link to='/' className='social-logo'>Dux<img alt="description" className="navbar-logo-image" src={Duck}/></Link></BrowserRouter>
          </div>
          <small className='website-rights'>DUX © 2021</small>
          <div className='social-icons'>
          <BrowserRouter><Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook'><FaFacebook /></Link>
          </BrowserRouter>
            
            <BrowserRouter><Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link></BrowserRouter>
            
            <BrowserRouter><Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link></BrowserRouter>
            
            <BrowserRouter><Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link></BrowserRouter>
            
          </div>
        </div>
      </section>
    </div>
  );
}

const Alert = styled.p`
  padding: 10px;
  margin: 0.5 rem;
  margin-top: 20px;
  color: black;
  text-align: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px;
  background: #fff;
  backdrop-filter: blur(10px);

`;

export default Footer;