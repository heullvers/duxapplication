import React, {useState } from 'react';
import { Button } from '../../Button';
import './index.css';
import {useHistory} from 'react-router-dom';
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const Home = () => {

    let history = useHistory();

    const [values, setValues] = useState({
        clicked: 0,
        clickedActivity: "2",
        clickedActivityGoal: "1"
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

    const calcularMetabolismoBasalHarris = (age, weight, height, gender) => {
        let metabolismoBasal = 0;
        if(!gender){ //homem
            metabolismoBasal += 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
        }
        else{ //mulher
            metabolismoBasal += 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
        }

        return metabolismoBasal;
    }

    const calcularMetabolismoBasalMifflin = (age, weight, height, gender) => {
        let metabolismoBasal = 0;
        if(!gender){ //homem
            metabolismoBasal += (10 * weight) + (6.25 * height) - (5 * age) + 5;
        }
        else{ //mulher
            metabolismoBasal += (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        return metabolismoBasal;
    }

    const calcularGet = (basal, activity) => {
        let get = 0;
        if(activity === "0"){
            get = basal * 1.2;
        }
        else if(activity === "1"){
            get = basal * 1.375;
        }
        else if(activity === "2"){
            get = basal * 1.55;
        }
        else if(activity === "3"){
            get = basal * 1.725;
        }
        else{
            get = basal * 1.9;
        }

        return get;
    }

    const calcularObjetivo = (get,goal) => {
        let caloriesGoal = 0;
        if(goal === "0"){
            caloriesGoal = get * 0.8;
        }
        else if(goal === "1"){
            caloriesGoal = get * 1;
        }
        else{
            caloriesGoal = get + 500;
        }

        return parseFloat(caloriesGoal.toFixed(0));
    }

    const onSubmit = (valuesForm, actions) => {

        let age = valuesForm.age;
        let weight = valuesForm.weight;
        let height = valuesForm.height;
        let bodyShape = valuesForm.selectPhysique; //1 Magro //2 Peso normal //3 Sobrepeso //4 Obeso

        let gender = values.clicked; //0 masculino //1 feminino
        let activity = values.clickedActivity; //0 sedentario //1 levemente ativo //2 moderadamente ativo //3 muito ativo //4 extremamente ativo
        let goal = values.clickedActivityGoal; //0 emagrecer //1 manter //2 ganhar

        let basal = 0;
        if(bodyShape === "1" || bodyShape === "2" ){
            basal = calcularMetabolismoBasalHarris(age, weight, height, gender);
        }
        else{
            basal = calcularMetabolismoBasalMifflin(age, weight, height, gender);
        }

        let get = calcularGet(basal, activity);

        let calories = calcularObjetivo(get, goal);

        //cálculo dos macronutrientes
        let proteina = 0;
        let gordura = 0;
        let carboidrato = 0;

        if(activity === "0"){
            proteina = 0.8 * weight;
        }
        else{
            if(bodyShape === "4"){
                proteina = 1.5 * weight;
            }
            else if(bodyShape === "1" || bodyShape === "3"){
                proteina = 1.8 * weight;
            }
            else{
                proteina = 2 * weight;
            }
        }

        proteina = parseFloat(proteina.toFixed(0));
        gordura = parseFloat((0.7 * weight).toFixed(0));

        let caloriasAteEntao = (proteina * 4) + (gordura * 9);
        carboidrato = parseFloat(((calories - caloriasAteEntao) / 4).toFixed(0));
    
        /*
        var totalGramas = proteina + gordura + carboidrato; 

        
        let porcentagemProteina = parseFloat(((proteina / totalGramas) * 100).toFixed(0));
        let porcentagemGordura = parseFloat(((gordura / totalGramas) * 100).toFixed(0));
        let porcentagemCarboidrato = parseFloat(((carboidrato / totalGramas) * 100).toFixed(0));
        */



        history.push({pathname:"/result", state: {calories, basal, get, proteina, carboidrato, gordura, goal}});
        //calcular qnt. de água

    }
    

    const schema = Yup.object().shape({
        age: Yup.number().positive("O número deve ser positivo").integer("Digite somente números (sem pontos ou vírgulas)").required("É preciso digitar a idade"),
        weight: Yup.number().positive("O número deve ser positivo").integer("Digite somente números (sem pontos ou vírgulas)").required("É preciso digitar o peso"),
        height: Yup.number().positive("O número deve ser positivo").integer("Digite somente números").required("É preciso digitar a altura"),
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
                        </Field>
                    </div>

                    <h3 className="activity">Nível de atividade</h3>
                    
                    <div className={values.clickedActivity === "0" ? "description-activity" : "description-hidden"} >
                            <p className="description-activity-p"><strong>Sedentário: </strong> Pouco ou nenhum exercício.</p>
                    </div>

                    <div className={values.clickedActivity === "1" ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Levemente ativo: </strong> 1-3 dias por semana.</p>
                    </div>

                    <div className={values.clickedActivity === "2" ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Moderadamente ativo: </strong>3-5 dias por semana.</p>
                    </div>

                    <div className={values.clickedActivity === "3" ? "description-activity" : "description-hidden"}>
                        <p className="description-activity-p"><strong>Muito ativo: </strong>6-7 dias por semana</p>
                    </div>

                    <div className={values.clickedActivity === "4" ? "description-activity" : "description-hidden"} >
                        <p className="description-activity-p"><strong>Extremamente ativo: </strong>2x por dia 6-7 dias por semana.</p>
                    </div>

                    <div className="activity-section">
                        <ul className="progress-bar">
                            <li className={values.clickedActivity === "0" ? "active" : null} onClick={() => handleClickActivity("0")}>Sedentário</li>
                            <li className={values.clickedActivity === "1" ? "active" : null} onClick={() => handleClickActivity("1")}>Levemente ativo</li>
                            <li className={values.clickedActivity === "2" ? "active" : null} onClick={() => handleClickActivity("2")}>Moderadamente ativo</li>
                            <li className={values.clickedActivity === "3" ? "active" : null} onClick={() => handleClickActivity("3")}>Muito ativo</li>
                            <li className={values.clickedActivity === "4" ? "active" : null} onClick={() => handleClickActivity("4")}>Extremamente ativo</li>
                        </ul>
                    </div>

                    <div className="activity-mobile">
                        <select className="select alright" defaultValue="2" onChange={(val) => handleClickActivity(val.target.value)} >
                            <option value="0" >Sedentário</option>
                            <option value="1" >Levemente ativo</option>
                            <option value="2" >Moderadamente ativo</option>
                            <option value="3" >Muito ativo</option>
                            <option value="4" >Extremamente ativo</option>
                        </select>
                    </div>
                    
                    <h3 className="activity">Objetivo</h3>
                    <div className="goals">
                        <Button buttonStyle={values.clickedActivityGoal === "0" ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal("0")}>EMAGRECER</Button>
                        <Button buttonStyle={values.clickedActivityGoal === "1" ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal("1")}>MANTER</Button>
                        <Button buttonStyle={values.clickedActivityGoal === "2" ? "btn--sex-pressed" : "btn--sex"} buttonSize="btn--sex-size" type="button" onClick={() => handleClickGoal("2")}>GANHAR</Button>
                    </div>

                    <div className="goals-mobile">
                        <select className="select alright" defaultValue="1" onChange={(val) => handleClickGoal(val.target.value)}>
                            <option value="0">Emagrecer</option>
                            <option value="1">Manter</option>
                            <option value="2">Ganhar</option>
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