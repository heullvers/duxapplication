import React, { Component } from 'react';
import { Button } from '../../Button';
import './index.css';

class Home extends Component {

    state = {clicked: false};

    handleClick = (param) => {
        if(param === 0){
            this.setState({clicked: false});
        } 
        else{
            this.setState({clicked: true});
        }
    }

    

    render(){
        return (
            <div className="home-container">
                <h1 className="calculator-text">CALCULADORA DIETA FLEXÍVEL</h1>
                <p className="description">Calcule os macronutrientes para sua dieta.</p>
                <form className="calculator">
                    <h4 className="params" >Parâmetros corporais</h4>
                    <div className="buttons-sex">
                        <Button buttonStyle={!this.state.clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => this.handleClick(0)}>MASCULINO</Button>
                        <Button buttonStyle={this.state.clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => this.handleClick(1)}>FEMININO</Button>
                    </div>
                </form>
                
            </div>
    
        );
    }

    

}

export default Home;