import React from 'react';

export default function CardModelo(props){

    return(
        <ul>
            {props.modelos.map((item,i) => (
                <li key={i}>
                    <a href={`/peliculas/${item._id}`}>
                        {item.nome}
                    </a>
                </li>
            ))}
        </ul>
    )
}