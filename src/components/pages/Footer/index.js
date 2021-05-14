import React from 'react';
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

function Footer() {
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
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu email'
            />
            <Button buttonStyle='btn--outline' type="button">Inscrever-se</Button>
          </form>
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

export default Footer;