import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Result from './components/pages/Result';
import About from './components/pages/About';
import Foods from './components/pages/Foods';
import NotFound from './components/pages/NotFound';

class Routes extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" component={Home} exact>
                </Route>
    
                <Route path="/result" component={Result} exact>
                </Route>

                {/*
                <Route path="/bf" component={BF} exact>
                </Route>*/}

                <Route path="/foods" component={Foods} exact>
                </Route>

                <Route path="/about" component={About} exact>
                </Route>

                <Route path='*' exact={true} component={NotFound} />
                
            </Switch>
        );
    }
    
}

export default Routes; 