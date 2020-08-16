import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import FutureValue from './pages/FutureValue';
import LiquidPresentValue from './pages/LiquidPresentValue';
import Payback from './pages/Payback';
import PresentValue from './pages/PresentValue';
import TRI from './pages/TRI';

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/valor-futuro' component={FutureValue} />
            <Route exact path='/valor-liquido-presente' component={LiquidPresentValue} />
            <Route exact path='/valor-presente' component={PresentValue} />
            <Route path='/payback' component={Payback} />
            <Route path='/tri' component={TRI} />
        </BrowserRouter>
    );
}

export default Routes;