import React from 'react';

import {
    Ul
} from './styles';


export default function CardMarcas(props){

    return(
        <Ul>
            {props.marcas.map((item,key) => (
                <li key={key}>
                    <div className="card mt-2">
                        <div className="card-header">
                            {item.name}
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-info">Editar Marca</button>
                            <button className="btn btn-danger">Remover Marca</button>
                        </div>
                    </div>
                </li>
            ))}
        </Ul>
    )
}