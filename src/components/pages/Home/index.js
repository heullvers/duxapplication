import React, { Component } from 'react';
import { Button } from '../../Button';
import './index.css';

class Home extends Component {

    state = {clicked: false, clickedActivity: 0, clickedActivityGoal: ''};

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

    handleClickGoal = (param) => {
        this.setState({clickedActivityGoal: param});
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
                            <p className="description-activity-p"><strong>Sedentário: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                            Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 1 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Levemente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 2 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Moderamente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 3 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Muito ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className={this.state.clickedActivity === 4 ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Extremamente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                    </div>

                    <div className="activity-section">
                        <ul className="progress-bar">
                            <li className={this.state.clickedActivity === 0 ? "active" : ""} onClick={() => this.handleClickActivity(0)}>Sedentário</li>
                            <li className={this.state.clickedActivity === 1 ? "active" : ""} onClick={() => this.handleClickActivity(1)}>Levemente ativo</li>
                            <li className={this.state.clickedActivity === 2 ? "active" : ""} onClick={() => this.handleClickActivity(2)}>Moderamente ativo</li>
                            <li className={this.state.clickedActivity === 3 ? "active" : ""} onClick={() => this.handleClickActivity(3)}>Muito ativo</li>
                            <li className={this.state.clickedActivity === 4 ? "active" : ""} onClick={() => this.handleClickActivity(4)}>Extremamente ativo</li>
                        </ul>
                    </div>

                    <div className="activity-mobile">
                        <select className="select">
                            <option onClick={() => this.handleClickActivity(0)}>Sedentário</option>
                            <option onClick={() => this.handleClickActivity(1)}>Levemente ativo</option>
                            <option onClick={() => this.handleClickActivity(2)}>Moderamente ativo</option>
                            <option onClick={() => this.handleClickActivity(3)}>Muito ativo</option>
                            <option onClick={() => this.handleClickActivity(4)}>Extremamente ativo</option>
                        </select>
                    </div>
                    
                    <h3 className="activity">Objetivo</h3>
                    <div className="goals">
                        <Button buttonStyle={this.state.clickedActivityGoal === 0 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => this.handleClickGoal(0)}>EMAGRECER</Button>
                        <Button buttonStyle={this.state.clickedActivityGoal === 1 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => this.handleClickGoal(1)}>MANTER</Button>
                        <Button buttonStyle={this.state.clickedActivityGoal === 2 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => this.handleClickGoal(2)}>GANHAR</Button>
                    </div>

                    <div className="goals-mobile">
                        <select className="select">
                            <option>Emagrecer</option>
                            <option>Manter</option>
                            <option>Ganhar</option>
                        </select>
                    </div>

                    <h3 className="percentage">Percentual de gordura (opcional)</h3>
                    <div className="percentage-section">
                        <label className="custom-field">
                            <input className="input-percentage" type="text" placeholder="BF(%)"/>
                            <span className="placeholder">BF(%)</span>
                        </label>
                    </div>

                    <div className="submit">
                        <Button buttonStyle="btn--sex-pressed" buttonSize="btn--calculate-size" type="button">Calcular</Button>
                    </div>
                </form>

                <div className="result">
                    <h2>Seu resultado</h2>
                    <div className="spent">
                        <span className="calories-spend">{2499}</span> <span className="kcal">kcal</span>
                        <p className="description-calories">Número aproximado de calorias gastas <strong>por dia.</strong></p>
                    </div>
                    <div className="macronutrients">
                        <h2 className="title-macronutrients">MACRONUTRIENTES</h2>
                    </div>
                    <div className="divider">
                    </div>

                    <div className="row-cards">
                        <div className="card">
                            <div className="card-header card1">
                                <h3>Recomendado</h3>
                            </div>
                            <div className="card-body">
                                <div className="card-macros">
                                    <p className="macro-values">Carboidrato</p>
                                    <p className="macro-values">Proteína</p>
                                    <p className="macro-values">Gordura</p>
                                </div>
                                <div className="card-macros">
                                    <p className="macro-values">{150}<strong>g</strong>/ ({40} <strong>%</strong>)</p>
                                    <p className="macro-values">{160}<strong>g</strong>/ ({40} <strong>%</strong>)</p>
                                    <p className="macro-values">{80}<strong>g</strong>/ ({120} <strong>%</strong>) </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="products-recomm-text">Sugestão de suplementos</h2>
                <div className="recommendation-products">
                    <div className="product-img-text">
                        <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/185/produto.png" alt="whey" className="product-size-w"/>
                        <div className="product">
                            <h6>WHEY PROTEIN</h6>
                            <br></br>
                            <p>Sit ullamco Lorem velit aute est proident anim.</p>
                        </div>
                        
                    </div>
                    <div className="product-img-text">
                        <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/107/multivitaminico-84g.webp" alt="multivitaminico" className="product-size-m"/>
                        <div className="product">
                            <h6>MULTIVITAMÍNICO</h6>
                            <br></br>
                            <p>Sit ullamco Lorem velit aute est proident anim.</p>
                        </div>
                    </div>
                    <div className="product-img-text">
                        <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/70/creatina.webp" alt="creatina" className="product-size-cr"/>
                        <div className="product">
                            <h6>CREATINA</h6>
                            <br></br>
                            <p>Sit ullamco Lorem velit aute est proident anim.</p>
                        </div>
                    </div>
                    <div className="product-img-text">
                        <img src="https://www.gsuplementos.com.br/upload/produto/imagem/b_cafe-na-210mg-120-caps-growth-supplements-thermog-nico.jpg" alt="cafeina" className="product-size-ca"/>
                        <div className="product">
                            <h6>CAFEINA</h6>
                            <br></br>
                            <p>Sit ullamco Lorem velit aute est proident anim.</p>
                        </div>
                    </div>
                    <div className="product-img-text">
                        <img src="https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/82/hipercalorico-1kg.webp" alt="hipercalorico" className="product-size-h"/>
                        <div className="product">
                            <h6>HIPERCALÓRICO</h6>
                            <br></br>
                            <p>Sit ullamco Lorem velit aute est proident anim.</p>
                        </div>
                    </div>
                </div>
                
            </div>
    
        );
    }

    

}

export default Home;