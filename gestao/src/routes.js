import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Marcas from './pages/marcas';
import CriarMarca from './pages/CriarMarca';


export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={() => ( <>Ok</> )} />
                <Route path='/marcas' component={Marcas} />
                <Route path='/nova-marca' component={CriarMarca} />
                <Route path='*' component={() => ( <>Página não encontrada</> )} />
            </Switch>
        </BrowserRouter>
    )
}