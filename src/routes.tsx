import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import FutureValue from './pages/FutureValue';
import LiquidPresentValue from './pages/LiquidPresentValue';
import Payback from './pages/Payback';
import PresentValue from './pages/PresentValue';
import TIR from './pages/TIR';
import NotFound from './pages/NotFound';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/valor-futuro' component={FutureValue} />
                <Route exact path='/valor-presente-liquido' component={LiquidPresentValue} />
                <Route exact path='/valor-presente' component={PresentValue} />
                <Route path='/payback' component={Payback} />
                <Route path='/tir' component={TIR} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;