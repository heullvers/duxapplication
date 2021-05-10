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
                    <div className="age-weight-height">
                        <label className="custom-field">
                            <input className="input-age-weight-height" type="text" placeholder="Idade"/>
                            <span className="placeholder">Idade</span>
                        </label>
                        <label className="custom-field">
                            <input className="input-age-weight-height" type="text" placeholder="Peso (kg)"/>
                            <span className="placeholder">Peso (kg)</span>
                        </label>
                        <label className="custom-field">
                            <input className="input-age-weight-height" type="text" placeholder="Altura (cm)"/>
                            <span className="placeholder">Altura (cm)</span>
                        </label>
                    </div>
                    <h4 className="activity" >Nível de atividade</h4>
                </form>
                
            </div>
    
        );
    }

    

}

export default Home;