import React from 'react';

import {
    Nav
} from './styles';


export default function Navbar(){

    return(
        <Nav className="navbar navbar-expand-lg">
            <div className="navbar-brand" href="#">A pelicula</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-3">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="/marcas">
                        Marcas
                        </a>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}