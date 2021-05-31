import React, { Component } from 'react';
import './index.css'

class About extends Component{
    render(){
        return (
            <div className="home-container about-component">
                <h1 className="sobre">SOBRE</h1>
                <p className="descricao-sobre">
                    Olá! Meu nome é Héuller <a href="https://www.instagram.com/heullersuarez/" target="_blank" rel="noreferrer" className="instagram">(@heullersuarez)</a> e desenvolvi esse site 
                    com o intuito de ajudar àqueles que viram na dieta flexível uma possibilidade de iniciar uma mudança de hábitos e consequentemente da sua vida.
                    Aproveite as ferramentas do site para conseguir atingir seu objetivo! Além do cálculo de macronutrientes, o site oferece após o cálculo uma lista de suplementos
                    personalizada de acordo com seu objetivo, a fim de ajudar nos seus ganhos. Lembrando que suplementos são apenas produtos que auxiliam na dieta e portanto
                    não realizam milagres. 
                    O site também oferece uma lista de alimentos, que serve como base para sua dieta. Faça bom proveito das ferramentas!
                    
                </p>

                <h2 className="formula-title">Fórmulas</h2>
                <p className="descricao-formulas">
                    Abaixo segue os cálculos realizados para determinação da taxa metabólica basal, gasto energético total e os macronutrientes.
                </p>
                <p className="descricao-formulas">
                    Para calcular a TMB e a GET de um indivíduo foi utilizada duas fórmulas, que são a de Harris-Benedict e Mifflin-St Jeor. 
                    Para indivíduos com o físico "magro" ou "peso normal" foi utilizada a fórmula de Harris-Benedict.
                </p>

                <h3>Harris-Benedict</h3>
                <code className="formula">
                    <p className="harris">Harris-Benedict = 66,47 + (13,75 x peso em kg) + (5,003 x altura em cm) – (6,775 x idade) (HOMEM)</p> 
                    <p className="harris">Harris-Benedict = 655,09 + (9,563 x peso em kg) + (1,85 x altura em cm) – (4,676 x idade) (MULHER)</p>
                </code>

                <p className="descricao-formulas"> 
                    Para indivíduos com o físico "sobrepeso" ou "obeso" foi utilizada a fórmula de Mifflin-St Jeor.
                </p>

                <h3>Mifflin-St Jeor</h3>
                <code className="formula">
                    <p className="harris">Mifflin-St Jeor = (10 x peso em kg) + (6.25 x altura em cm) - (5 x idade) + 5 (HOMEM)</p> 
                    <p className="harris">Mifflin-St Jeor = (10 x peso em kg) + (6.25 x altura em cm) - (5 x idade) - 161 (MULHER)</p>
                </code>

                <p className="descricao-formulas">
                    Para calcular os macronutrientes foi utilizada a seguinte lógica. Para a proteína foi calculado 2g/kg para indivíduos com peso normal, 
                    1.8kg/kg para indivíduos magros e com sobrepeso e por fim 1.5g/kg para obesos. A gordura fixou-se em 0.7g/kg para todos indivíduos e o
                    carboidrato o restante das calorias.
                </p>

            </div>
            
        );
    }
}

export default About;