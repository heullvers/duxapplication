import React, { Component } from 'react';
import './index.css';

class Result extends Component {
    render(){
        return (
            <div className="result">
                <h2 className="result-text">Seu resultado</h2>
                <div className="spent">
                    <span className="calories-spend">{2499}</span> <span className="kcal">kcal</span>
                    <p className="description-calories">Número de calorias que você deve ingerir para atingir <strong>seu objetivo.</strong></p>
                </div>
                <div className="basal">
                    <p>
                        <strong>Taxa metabólical basal</strong> - {1900} kcal.
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
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Macronutriente</th>
                                        <th>Quantidade</th>
                                    </tr>

                                    <tr>
                                        <td>Carboidrato</td>
                                        <td>{150}<strong>g</strong>/ ({40} <strong>%</strong>)</td>
                                    </tr>

                                    <tr>
                                        <td>Proteína</td>
                                        <td>{160}<strong>g</strong>/ ({40} <strong>%</strong>)</td>
                                    </tr>

                                    <tr>
                                        <td>Gordura</td>
                                        <td>{80}<strong>g</strong>/ ({120} <strong>%</strong>)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Result;