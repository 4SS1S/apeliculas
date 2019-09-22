import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Modelos from './pages/modelos';
import Peliculas from './pages/pelicula';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={() => (<>Ok</>)} />
                <Route path='/modelos/:id' component={Modelos} />
                <Route path='/peliculas/:id' component={Peliculas} />
                <Route path='*' component={() => (<>Página não encontrada</>)} />
            </Switch>
        </BrowserRouter>
    )
}