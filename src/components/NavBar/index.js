import React, { Component } from 'react';
import './index.css';
import Duck from './../../images/duck.png';
import {Link} from 'react-router-dom';

class NavBar extends Component{

    state = {clicked: false, clickeddropdown: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    handleClickDropdown = () => {
        this.setState({clickeddropdown: !this.state.clickeddropdown})
    }


    render(){
        return (
            <nav className="NavbarItems">
                <Link to="/" className="logo-submit">
                    <div className="navbar-logo">   
                        <h1 className="navbar-logo-name">Dux</h1>
                        <img alt="description" className="navbar-logo-image" src={Duck}/>
                    </div>
                </Link>
                
                <div className="menu-icon" onClick={this.handleClick} >
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'} >
                    {/*
                    <li className="nav-top">
                        <a href='#t' className="nav-links" onClick={() => this.handleClickDropdown()}>CALCULADORAS <i className="fas fa-chevron-down"></i></a>
                        <ul className={this.state.clickeddropdown? 'dropdown-active dropdown-content dropdown' : 'dropdown-desactive dropdown'}>
                            <li className="first"><Link className="dropdown-text" to="/" onClick={this.handleClick}>Dieta flexível</Link></li>
                            {<li><Link to="/bf" className="dropdown-text" onClick={this.handleClick}>Percentual de gordura</Link></li>}
                        </ul>
                    </li>                
                    */}

                    <li>
                        <Link className="nav-links" to="/foods" onClick={this.handleClick}>ALIMENTOS</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/about" onClick={this.handleClick}>SOBRE</Link>
                    </li>
                    {/* {MenuItems.map((item, index)=>{
                        return(
                            <li key={index} className="linha">
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })} */}
                </ul>
                {/* <Button buttonStyle="btn--outline">ENTRAR</Button> */}
                
            </nav>
        );
    }

}

export default NavBar;