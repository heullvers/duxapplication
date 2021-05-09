import React from 'react';
import { Button } from '../../Button';
import './index.css';

function Home() {

    return (
        <div className="home-container">
            <h1 className="calculator-text">CALCULADORA DIETA FLEXÍVEL</h1>
            <form className="calculator">
                <h3 className="params" >Parâmetros corporais</h3>
                <div className="buttons-sex">
                    <Button buttonStyle="btn--outline">MASCULINO</Button>
                    <Button buttonStyle="btn--outline">FEMININO</Button>
                </div>
            </form>
            
        </div>

    );

}

export default Home;