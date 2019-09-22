import React, { useState, useEffect } from 'react';

import {
    Nav
} from './styles';
import axios from '../../services/axios';


export default function Navbar(){

    const [ fabricantes, setFabricantes ] = useState([]);

    useEffect(() => {
        axios.get('/fabricante')
            .then(res => {
                setFabricantes(res.data)
            }
        );
    }, []);

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
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Marcas
                        </a>
                        
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {fabricantes.map((i,j) => {return (
                                    <a key={j} className="dropdown-item" href={`/modelos/${i._id}`}>
                                        {i.name}
                                    </a>
                                )}
                            )}
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Outras...</a>
                        </div>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}