import React from 'react';
import Sugestion from '../Sugestion';
import './index.css';
import {Redirect} from 'react-router-dom';

const Result = (props) => {
    

    let params = props.history.location.state;

    if(!params){
        return <Redirect to="/"/>
    }
    else{
        window.scrollTo(0,0);

        let calories = params.calories;
        let basal = params.basal;
        let get = params.get;

        let proteina = params.proteina;
        let gordura = params.gordura;
        let carboidrato = params.carboidrato;
        
        let goal = params.goal;

        return (
            <>
                <div className="home-container result-component">
                    <div className="result">
                        <h2 className="result-text">Seu resultado</h2>
                        <div className="spent">
                            <span className="calories-spend">{calories}</span> <span className="kcal">kcal</span>
                            <p className="description-calories">Número de calorias que você deve ingerir para atingir <strong>seu objetivo.</strong></p>
                        </div>
                        <div className="tmb">
                            <p>
                                <strong>Taxa metabólical basal (TMB)</strong> - {basal.toFixed(0)} kcal.
                            </p>

                        </div>
                        <div className="get">
                            <p>
                                <strong>Gasto energético total (GET)</strong> - {get.toFixed(0)} kcal.
                            </p>

                        </div>
                        <h2 className="title-macronutrients">MACRONUTRIENTES</h2>
                        <div className="divider">
                        </div>

                        <div className="row-cards">
                            <div className="card">
                                <div className="card-header card1">
                                    <h3>Recomendado</h3>
                                </div>
                                <div className="card-body">
                                    <table className="tabela-result">
                                        <thead>
                                            <tr>
                                                <th  className="th-result">Macronutriente</th>
                                                <th  className="th-result">Quantidade</th>
                                            </tr>
                                            
                                        </thead>
                                                
                                        <tbody>
                                            <tr>
                                                <td>Carboidrato</td>
                                                <td>{carboidrato}<strong>g</strong> {/*/ ({40} <strong>%</strong>)*/}</td>
                                            </tr>

                                            <tr>
                                                <td>Proteína</td>
                                                <td>{proteina}<strong>g</strong>{/*/ ({40} <strong>%</strong>)*/}</td>
                                            </tr>

                                            <tr>
                                                <td>Gordura</td>
                                                <td>{gordura}<strong>g</strong>{/*/ ({120} <strong>%</strong>)*/}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Sugestion objetivo={goal}></Sugestion>
                </div>

            </>
        );
    }

    

};

export default Result;