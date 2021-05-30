import React, { Component } from 'react';
import './index.css';

class Foods extends Component{
    render(){
        return (
            <div className="home-container foods-component">
                <h1 className="alimentos">ALIMENTOS</h1>
                <p className="descricao">Essa lista de alimentos tem como objetivo informar a você
                que realiza a dieta flexível, alimentos base para uma alimentação saudável. <strong> A quantidade de cada macronutriente 
                para cada alimento está para uma porção de 100g. Apenas os alimentos clara de 
                ovo e gema de ovo estão por unidade e azeite 100ml.</strong> Para contabilizar seus macros, é recomendado o aplicativo MyFitnessPal</p>
                <h2 className="title-macro">CARBOIDRATOS</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th  className="th">Alimento</th>
                            <th  className="th">Carboidrato</th>
                            <th  className="th">Proteína</th>
                            <th  className="th">Gordura</th>
                            <th  className="th">Calorias</th>
                        </tr>
                        
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Alimento">Arroz branco</td>
                            <td data-label="Carboidrato">86<strong>g</strong></td>
                            <td data-label="Proteína">6<strong>g</strong></td>
                            <td data-label="Gordura">0<strong>g</strong></td>
                            <td data-label="Calorias">360<strong></strong></td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Arroz integral</td>
                            <td data-label="Carboidrato">76<strong>g</strong></td>
                            <td data-label="Proteína">8<strong>g</strong></td>
                            <td data-label="Gordura">2,2<strong>g</strong></td>
                            <td data-label="Calorias">356</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Aveia</td>
                            <td data-label="Carboidrato">56,7<strong>g</strong></td>
                            <td data-label="Proteína">14,3<strong>g</strong></td>
                            <td data-label="Gordura">7,3<strong>g</strong></td>
                            <td data-label="Calorias">347</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Batata doce</td>
                            <td data-label="Carboidrato">18,4<strong>g</strong></td>
                            <td data-label="Proteína">0,6<strong>g</strong></td>
                            <td data-label="Gordura">0,1<strong>g</strong></td>
                            <td data-label="Calorias">77</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Batata inglesa</td>
                            <td data-label="Carboidrato">17<strong>g</strong></td>
                            <td data-label="Proteína">1,8<strong>g</strong></td>
                            <td data-label="Gordura">0<strong>g</strong></td>
                            <td data-label="Calorias">77</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Farofa</td>
                            <td data-label="Carboidrato">80<strong>g</strong></td>
                            <td data-label="Proteína">0<strong>g</strong></td>
                            <td data-label="Gordura">5<strong>g</strong></td>
                            <td data-label="Calorias">405</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Feijão</td>
                            <td data-label="Carboidrato">13,6<strong>g</strong></td>
                            <td data-label="Proteína">4,8<strong>g</strong></td>
                            <td data-label="Gordura">0,9g<strong>g</strong></td>
                            <td data-label="Calorias">76</td>
                        </tr>
                    </tbody>
                </table>
                <h2  className="title-macro">PROTEÍNAS</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th  className="th">Alimento</th>
                            <th  className="th">Carboidrato</th>
                            <th  className="th">Proteína</th>
                            <th  className="th">Gordura</th>
                            <th  className="th">Calorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Alimento">Atum (cru)</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">21,8<strong>g</strong></td>
                            <td data-label="Gordura">9,1<strong>g</strong></td>
                            <td data-label="Calorias">179</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Clara de ovo</td>
                            <td data-label="Carboidrato">0,2<strong>g</strong></td>
                            <td data-label="Proteína">3,6<strong>g</strong></td>
                            <td data-label="Gordura">0,1g<strong>g</strong></td>
                            <td data-label="Calorias">17</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Coxão mole</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">31,7<strong>g</strong></td>
                            <td data-label="Gordura">3,8<strong>g</strong></td>
                            <td data-label="Calorias">205</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Peito de frango</td>
                            <td data-label="Carboidrato">3,3<strong>g</strong></td>
                            <td data-label="Proteína">17,5<strong>g</strong></td>
                            <td data-label="Gordura">1,3<strong>g</strong></td>
                            <td data-label="Calorias">95</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Patinho cozido</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">35<strong>g</strong></td>
                            <td data-label="Gordura">7,3<strong>g</strong></td>
                            <td data-label="Calorias">219</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Salmão</td>
                            <td data-label="Carboidrato">0,1<strong>g</strong></td>
                            <td data-label="Proteína">21,4<strong>g</strong></td>
                            <td data-label="Gordura">11,5<strong>g</strong></td>
                            <td data-label="Calorias">189</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Whey</td>
                            <td data-label="Carboidrato">13,3<strong>g</strong></td>
                            <td data-label="Proteína">76,7<strong>g</strong></td>
                            <td data-label="Gordura">5,3<strong>g</strong></td>
                            <td data-label="Calorias">407</td>
                        </tr>
                    </tbody>
                </table>
                
                <h2  className="title-macro">GORDURA</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Alimento</th>
                            <th className="th">Carboidrato</th>
                            <th className="th">Proteína</th>
                            <th className="th">Gordura</th>
                            <th className="th">Calorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Alimento">Amêndoa</td>
                            <td data-label="Carboidrato">5<strong>g</strong></td>
                            <td data-label="Proteína">20<strong>g</strong></td>
                            <td data-label="Gordura">60<strong>g</strong></td>
                            <td data-label="Calorias">600</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Amendoim</td>
                            <td data-label="Carboidrato">16<strong>g</strong></td>
                            <td data-label="Proteína">26<strong>g</strong></td>
                            <td data-label="Gordura">49<strong>g</strong></td>
                            <td data-label="Calorias">567</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Azeite</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">0<strong>g</strong></td>
                            <td data-label="Gordura">106,9<strong>g</strong></td>
                            <td data-label="Calorias">915</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Gema de ovo</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">3<strong>g</strong></td>
                            <td data-label="Gordura">5<strong>g</strong></td>
                            <td data-label="Calorias">57</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Manteiga</td>
                            <td data-label="Carboidrato">1<strong>g</strong></td>
                            <td data-label="Proteína">1<strong>g</strong></td>
                            <td data-label="Gordura">81<strong>g</strong></td>
                            <td data-label="Calorias">720</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Queijo muçarela</td>
                            <td data-label="Carboidrato">0<strong>g</strong></td>
                            <td data-label="Proteína">22,3<strong>g</strong></td>
                            <td data-label="Gordura">29<strong>g</strong></td>
                            <td data-label="Calorias">377</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Pasta de amendoim</td>
                            <td data-label="Carboidrato">11,3<strong>g</strong></td>
                            <td data-label="Proteína">25,3<strong>g</strong></td>
                            <td data-label="Gordura">52<strong>g</strong></td>
                            <td data-label="Calorias">613</td>
                        </tr>
                    </tbody>
                </table>
                <h2  className="title-macro">FRUTAS</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Alimento</th>
                            <th className="th">Carboidrato</th>
                            <th className="th">Proteína</th>
                            <th className="th">Gordura</th>
                            <th className="th">Calorias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Alimento">Banana</td>
                            <td data-label="Carboidrato">22,8<strong>g</strong></td>
                            <td data-label="Proteína">1,1<strong>g</strong></td>
                            <td data-label="Gordura">0,3<strong>g</strong></td>
                            <td data-label="Calorias">89</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Kiwi</td>
                            <td data-label="Carboidrato">11,5<strong>g</strong></td>
                            <td data-label="Proteína">1,3<strong>g</strong></td>
                            <td data-label="Gordura">0,6h<strong>g</strong></td>
                            <td data-label="Calorias">51</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Laranja</td>
                            <td data-label="Carboidrato">12<strong>g</strong></td>
                            <td data-label="Proteína">0,9<strong>g</strong></td>
                            <td data-label="Gordura">0,1<strong>g</strong></td>
                            <td data-label="Calorias">47</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Maçã</td>
                            <td data-label="Carboidrato">13,8<strong>g</strong></td>
                            <td data-label="Proteína">0,3<strong>g</strong></td>
                            <td data-label="Gordura">0,2<strong>g</strong></td>
                            <td data-label="Calorias">52</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Mamão</td>
                            <td data-label="Carboidrato">11<strong>g</strong></td>
                            <td data-label="Proteína">0,5<strong>g</strong></td>
                            <td data-label="Gordura">0,3<strong>g</strong></td>
                            <td data-label="Calorias">43</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Manga</td>
                            <td data-label="Carboidrato">17<strong>g</strong></td>
                            <td data-label="Proteína">0,5<strong>g</strong></td>
                            <td data-label="Gordura">0,3<strong>g</strong></td>
                            <td data-label="Calorias">70</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Melancia</td>
                            <td data-label="Carboidrato">8<strong>g</strong></td>
                            <td data-label="Proteína">0,6<strong>g</strong></td>
                            <td data-label="Gordura">0,2<strong>g</strong></td>
                            <td data-label="Calorias">30</td>
                        </tr>

                        <tr>
                            <td data-label="Alimento">Mexerica</td>
                            <td data-label="Carboidrato">10,7<strong>g</strong></td>
                            <td data-label="Proteína">0,7<strong>g</strong></td>
                            <td data-label="Gordura">0<strong>g</strong></td>
                            <td data-label="Calorias">43</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Morango</td>
                            <td data-label="Carboidrato">6,8<strong>g</strong></td>
                            <td data-label="Proteína">0,9<strong>g</strong></td>
                            <td data-label="Gordura">0,3<strong>g</strong></td>
                            <td data-label="Calorias">30</td>
                        </tr>
                        <tr>
                            <td data-label="Alimento">Pêra</td>
                            <td data-label="Carboidrato">14<strong>g</strong></td>
                            <td data-label="Proteína">0,6<strong>g</strong></td>
                            <td data-label="Gordura">0<strong>g</strong></td>
                            <td data-label="Calorias">85</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Foods;