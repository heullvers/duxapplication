import React, { Component, useState } from 'react';
import { Button } from '../../Button';
import './index.css';
import {Link} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const Home = () => {

    const [values, setValues] = useState({
        clicked: 0,
        clickedActivity: 2,
        clickedActivityGoal: 1
    });

    const handleClick = () => {
        setValues({...values, clicked: !values.clicked});
    }

    const handleClickActivity = (param)=>{
        setValues({...values,clickedActivity: param});
    }

    const handleClickGoal = (param)=>{
        setValues({...values, clickedActivityGoal: param});
    }

    const calcularMetabolismoBasal = (data) => {
        let metabolismoBasal = 0;
        if(values.clicked){ //homem
            metabolismoBasal += 66.5 + (13.75 * data.weight) + (5.003 * data.height) - (6.755 * data.age);
        }
        else{ //mulher
            metabolismoBasal += 655.1 + (9.563 * data.weight) + (1.850 * data.height) - (4.676 * data.age);
        }

        return metabolismoBasal;
    }

    const calcularGet = (basal) => {
        let get = 0;
        if(values.clickedActivity === 0){
            get = basal * 1.2;
        }
        else if(values.clickedActivity === 1){
            get = basal * 1.375;
        }
        else if(values.clickedActivity === 2){
            get = basal * 1.55;
        }
        else if(values.clickedActivity === 3){
            get = basal * 1.725;
        }
        else{
            get = basal * 1.9;
        }

        return get;
    }

    const onSubmit = (values, actions) => {
        console.log('chamei');
        console.log(values);
    }
    

    const schema = Yup.object().shape({
        age: Yup.number().positive("O número deve ser positivo").integer("Digite somente números (sem pontos ou vírgulas)").required("É preciso digitar a idade"),
        weight: Yup.number().positive("O número deve ser positivo").integer("Digite somente números (sem pontos ou vírgulas)").required("É preciso digitar o peso"),
        height: Yup.number().positive("O número deve ser positivo").integer("Digite somente números (sem pontos ou vírgulas)").required("É preciso digitar a altura"),
        selectPhysique: Yup.number().required("É preciso selecionar o seu físico atual")
    });


    return (
        <div className="home-container">
            <h1 className="calculator-text">CALCULADORA DIETA FLEXÍVEL</h1>
            <p className="description">Calcule os macronutrientes para sua dieta.</p>
            <Formik 
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={{
                age: '',
                weight: '',
                height: '',
                selectPhysique: ''
            }}
            render={({valuesFormik, errors}) => (
                <Form>
                    <h3 className="params" >Parâmetros corporais</h3>
                    <div className="buttons-sex">
                        <Button buttonStyle={!values.clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => handleClick()}>MASCULINO</Button>
                        <Button buttonStyle={values.clicked ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button"  onClick={() => handleClick()}>FEMININO</Button>
                    </div>

                    <div className="age-weight-height">
                        <label className="custom-field">
                            <Field className={errors.age ? "input-age-weight-height errorInput" : "input-age-weight-height alright"} type="number" placeholder="Idade" name="age"/>
                            <span className="placeholder">Idade</span>
                            {errors.age && (
                                <p className="errorMessage">{errors.age}</p>
                            )}                            
                        </label>
                        <label className="custom-field">
                            <Field className={errors.weight ? "input-age-weight-height errorInput" : "input-age-weight-height alright"} type="number" placeholder="Peso(kg)" name="weight"/>
                            <span className="placeholder">Peso(kg)</span>
                            {errors.weight && (
                                <p className="errorMessage">{errors.weight}</p>
                            )}  
                        </label>
                        <label className="custom-field">
                            <Field className={errors.height ? "input-age-weight-height errorInput" : "input-age-weight-height alright"}  type="number" placeholder="Altura(cm)" name="height"/>
                            <span className="placeholder">Altura(cm)</span>
                            {errors.height && (
                                <p className="errorMessage">{errors.height}</p>
                            )}  
                        </label>
                    </div>

                    <h3 className="physique">Qual seu físico atual?</h3>
                    {errors.selectPhysique && (
                                <p className="errorMessage">{errors.selectPhysique}</p>
                            )} 
                    <div className="divSelectPhysique">
                        <Field as="select" name="selectPhysique" className={errors.selectPhysique ? "select errorInput": "select alright"}>
                            <option hidden> Selecione </option>
                            <option value="1">Magro</option>
                            <option value="2">Peso normal</option>
                            <option value="3">Sobrepeso</option>
                            <option value="4">Obeso</option>
                            <option value="5">Atleta</option>
                        </Field>
                    </div>

                    <h3 className="activity">Nível de atividade</h3>
                    
                    <div className={values.clickedActivity === 0 ? "description-activity" : "description-hidden"} >
                            <p className="description-activity-p"><strong>Sedentário: </strong> Pouco ou nenhum exercício.</p>
                    </div>

                    <div className={values.clickedActivity === 1 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Levemente ativo: </strong> 1-3 dias por semana.</p>
                    </div>

                    <div className={values.clickedActivity === 2 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Moderadamente ativo: </strong>3-5 dias por semana.</p>
                    </div>

                    <div className={values.clickedActivity === 3 ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Muito ativo: </strong>6-7 dias por semana</p>
                    </div>

                    <div className={values.clickedActivity === 4 ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Extremamente ativo: </strong>2x por dia 6-7 dias por semana.</p>
                    </div>

                    <div className="activity-section">
                        <ul className="progress-bar">
                            <li className={values.clickedActivity === 0 ? "active" : ""} onClick={() => handleClickActivity(0)}>Sedentário</li>
                            <li className={values.clickedActivity === 1 ? "active" : ""} onClick={() => handleClickActivity(1)}>Levemente ativo</li>
                            <li className={values.clickedActivity === 2 ? "active" : ""} onClick={() => handleClickActivity(2)}>Moderadamente ativo</li>
                            <li className={values.clickedActivity === 3 ? "active" : ""} onClick={() => handleClickActivity(3)}>Muito ativo</li>
                            <li className={values.clickedActivity === 4 ? "active" : ""} onClick={() => handleClickActivity(4)}>Extremamente ativo</li>
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
                        <Button buttonStyle={values.clickedActivityGoal === 0 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(0)}>EMAGRECER</Button>
                        <Button buttonStyle={values.clickedActivityGoal === 1 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(1)}>MANTER</Button>
                        <Button buttonStyle={values.clickedActivityGoal === 2 ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal(2)}>GANHAR</Button>
                    </div>

                    <div className="goals-mobile">
                        <select className="select">
                            <option onClick={() => handleClickGoal(0)}>Emagrecer</option>
                            <option onClick={() => handleClickGoal(1)}>Manter</option>
                            <option onClick={() => handleClickGoal(2)}>Ganhar</option>
                        </select>
                    </div>

                    {/* 
                    <h3 className="percentage">Percentual de gordura (opcional)</h3>
                    <div className="percentage-section">
                        <label className="custom-field">
                            <input className="input-percentage" type="number" placeholder="BF(%)" name="bf" {...register("bf")}/>
                            <span className="placeholder">BF(%)</span>
                        </label>
                    </div>
                    */}

                    {/*<Link to="/result" className="btn-submit">*/}
                        <div className="submit">
                            <Button buttonStyle="btn--sex-pressed" buttonSize="btn--calculate-size" type="submit">Calcular</Button>
                        </div>
                    {/*</Link>*/}
                </Form>
            )}
            />
        </div>
    
        );
}

export default Home;