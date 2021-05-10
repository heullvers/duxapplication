import React, { Component } from 'react';
import { Button } from '../../Button';
import './index.css';

class Home extends Component {

    state = {clicked: false, clickedActivity: 0};

    handleClick = (param) => {
        if(param === 0){
            this.setState({clicked: false});
        } 
        else{
            this.setState({clicked: true});
        }
    }

    handleClickActivity = (param) => {
        this.setState({clickedActivity: param});
    }

    

    render(){
        return (
            <div className="home-container">
                <h1 className="calculator-text">CALCULADORA DIETA FLEXÍVEL</h1>
                <p className="description">Calcule os macronutrientes para sua dieta.</p>
                <form className="calculator">
                    <h3 className="params" >Parâmetros corporais</h3>
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
                    <h3 className="activity" >Nível de atividade</h3>
                    <div className={this.state.clickedActivity === 0 ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Sedentário:</strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 1 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Levemente ativo:</strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 2 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Moderamente ativo:</strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 3 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Muito ativo:</strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 4 ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Extremamente ativo:</strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <ul className="progress-bar">
                        <li className={this.state.clickedActivity === 0 ? "active" : ""} onClick={() => this.handleClickActivity(0)}>Sedentário</li>
                        <li className={this.state.clickedActivity === 1 ? "active" : ""} onClick={() => this.handleClickActivity(1)}>Levemente ativo</li>
                        <li className={this.state.clickedActivity === 2 ? "active" : ""} onClick={() => this.handleClickActivity(2)}>Moderamente ativo</li>
                        <li className={this.state.clickedActivity === 3 ? "active" : ""} onClick={() => this.handleClickActivity(3)}>Muito ativo</li>
                        <li className={this.state.clickedActivity === 4 ? "active" : ""} onClick={() => this.handleClickActivity(4)}>Extremamente ativo</li>
                    </ul>
                    
                </form>
                
            </div>
    
        );
    }

    

}

export default Home;