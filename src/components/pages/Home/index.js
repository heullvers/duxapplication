import React, { Component, useState } from 'react';
import { Button } from '../../Button';
import './index.css';
import {Link} from 'react-router-dom';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

let schema = yup.object().shape({
    age: yup.number().typeError("É preciso digitar a idade").positive("A idade deve ser um número positivo").integer("A idade deve ser um número inteiro"),
    weight: yup.number().typeError("É preciso digitar o peso").positive("O peso deve ser um número positivo"),
    height: yup.number().typeError("É preciso digitar a altura").positive("A altura deve ser um número positivo"),
    bf: yup.number().transform((cv, ov) => {
        return ov === '' ? undefined : cv;
    }),
  });

const Home = () => {

    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    });

    //state = {clicked: false, clickedActivity: 0, clickedActivityGoal: ''};
    const [clicked, setHandleClick] = useState('');
    const [clickedActivity, setHandleClickActivity] = useState('');
    const [clickedActivityGoal, setHandleClickActivityGoal] = useState('');
    //gender: '' , age: '', weight: '', height: '', activity: '', goal: '', bf: ''

    const handleClick = () => {
        setHandleClick(!clicked);
    }
    
    const handleClickActivity = (param)=>{
        setHandleClickActivity(param);
    }
    
    const handleClickGoal = (param)=>{
        setHandleClickActivityGoal(param);
    }

    const onSubmit = data => console.log(data);


    return (
        <div className="home-container">
            <h1 className="calculator-text">CALCULADORA DIETA FLEXÍVEL</h1>
            <p className="description">Calcule os macronutrientes para sua dieta.</p>
            <form className="calculator" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="params" >Parâmetros corporais</h3>
                <div className="buttons-sex">
                    <Button buttonStyle={!clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => handleClick()}>MASCULINO</Button>
                    <Button buttonStyle={clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => handleClick()}>FEMININO</Button>
                </div>
                <div className="age-weight-height">
                    <label className="custom-field">
                        <input className={errors.age?.message ? "input-age-weight-height errorInput" : "input-age-weight-height alright"} type="number" placeholder="Idade" name="age" {...register("age")}/>
                        <span className="placeholder">Idade</span>
                        <p className="errorMessage">{errors.age?.message}</p>
                        
                    </label>
                    <label className="custom-field">
                        <input className={errors.weight?.message ? "input-age-weight-height errorInput" : "input-age-weight-height alright"} type="number" placeholder="Peso(kg)" name="weight" {...register("weight")}/>
                        <span className="placeholder">Peso(kg)</span>
                        <p className="errorMessage">{errors.weight?.message}</p>
                    </label>
                    <label className="custom-field">
                    <input className={errors.height?.message ? "input-age-weight-height errorInput" : "input-age-weight-height alright"} type="number" placeholder="Altura(cm)" name="height" {...register("height")}/>
                        <span className="placeholder">Altura(cm)</span>
                        <p className="errorMessage">{errors.height?.message}</p>
                    </label>
                </div>
                <h3 className="activity" >Nível de atividade</h3>
                <div className={clickedActivity === 0 ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Sedentário: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                        Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                </div>

                <div className={clickedActivity === 1 ? "description-activity" : "description-hidden"}>
                    <p className="description-activity-p"><strong>Levemente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                    Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                </div>

                <div className={clickedActivity === 2 ? "description-activity" : "description-hidden"}>
                    <p className="description-activity-p"><strong>Moderamente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                    Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                </div>

                <div className={clickedActivity === 3 ? "description-activity" : "description-hidden"}>
                    <p className="description-activity-p"><strong>Muito ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                    Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                </div>

                <div className={clickedActivity === 4 ? "description-activity" : "description-hidden"} >
                    <p className="description-activity-p"><strong>Extremamente ativo: </strong>Ex ipsum eiusmod nisi reprehenderit qui deserunt in duis enim consequat do magna reprehenderit non. 
                    Enim sunt deserunt cillum laborum quis id et. Irure reprehenderit laborum tempor non sunt consectetur reprehenderit.</p>
                </div>

                <div className="activity-section">
                    <ul className="progress-bar">
                        <li className={clickedActivity === 0 ? "active" : ""} onClick={() => handleClickActivity(0)}>Sedentário</li>
                        <li className={clickedActivity === 1 ? "active" : ""} onClick={() => handleClickActivity(1)}>Levemente ativo</li>
                        <li className={clickedActivity === 2 ? "active" : ""} onClick={() => handleClickActivity(2)}>Moderamente ativo</li>
                        <li className={clickedActivity === 3 ? "active" : ""} onClick={() => handleClickActivity(3)}>Muito ativo</li>
                        <li className={clickedActivity === 4 ? "active" : ""} onClick={() => handleClickActivity(4)}>Extremamente ativo</li>
                    </ul>
                </div>

                <div className="activity-mobile">
                    <select className="select">
                        <option onClick={() => handleClickActivity(0)}>Sedentário</option>
                        <option onClick={() => handleClickActivity(1)}>Levemente ativo</option>
                        <option onClick={() => handleClickActivity(2)}>Moderamente ativo</option>
                        <option onClick={() => handleClickActivity(3)}>Muito ativo</option>
                        <option onClick={() => handleClickActivity(4)}>Extremamente ativo</option>
                    </select>
                </div>
                
                <h3 className="activity">Objetivo</h3>
                <div className="goals">
                    <Button buttonStyle={clickedActivityGoal === 0 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(0)}>EMAGRECER</Button>
                    <Button buttonStyle={clickedActivityGoal === 1 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(1)}>MANTER</Button>
                    <Button buttonStyle={clickedActivityGoal === 2 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(2)}>GANHAR</Button>
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
                        <input className="input-percentage" type="number" placeholder="BF(%)" name="bf" {...register("bf")}/>
                        <span className="placeholder">BF(%)</span>
                    </label>
                </div>

                {/*<Link to="/result" className="btn-submit">*/}
                    <div className="submit">
                        <Button buttonStyle="btn--sex-pressed" buttonSize="btn--calculate-size" type="submit">Calcular</Button>
                    </div>
                {/*</Link>*/}
            </form>
        </div>
    
        );
}

export default Home;