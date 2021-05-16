import React, { Component } from 'react';
import './index.css';
import Duck from './../../images/duck.png';

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
                <div className="navbar-logo">   
                    <h1 className="navbar-logo-name">Dux</h1>
                    <img alt="description" className="navbar-logo-image" src={Duck}/>
                </div>
                
                <div className="menu-icon" onClick={this.handleClick} >
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'} >
                    <li className="nav-top">
                        <a href='#t' className="nav-links" onClick={() => this.handleClickDropdown()}>CALCULADORAS <i className="fas fa-chevron-down"></i></a>
                        <ul className={this.state.clickeddropdown? 'dropdown-active dropdown-content dropdown' : 'dropdown-desactive dropdown'}>
                            <li className="first"><a href="#t" className="dropdown-text">Dieta flexível</a></li>
                            <li><a href="#t" className="dropdown-text">Percentual de gordura</a></li>
                        </ul>
                    </li>

                    
                    

                    <li>
                        <a href="#t" className="nav-links">ALIMENTOS</a>
                    </li>
                    <li>
                        <a href="#t" className="nav-links">SOBRE</a>
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