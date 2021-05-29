import React from 'react';
import './index.css';
import Duck from './../../../images/duck.png';

function NotFound({children}){
    return <div className="home-container">
        <div className="not-found">
            <img alt="description" className="image-not-found" src={Duck}/>
            <div>
                <p className="error">Error <strong>404</strong></p>
                <p className="page-not-found">Página não encontrada</p>
            </div>
            
        </div>
    </div>

}

export default NotFound;