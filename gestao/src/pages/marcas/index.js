import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import CardMarcas from './components/card-marcas';


export default function Marcas() {

    const [ marcas, setMarcas ] = useState([]);

    useEffect(() => {
        axios.get('/fabricante')
            .then(res => {
                setMarcas(res.data)
            }
        );
    }, []);

    return(
        <>
            <div>
                <a href="/nova-marca" className="btn btn-success">Nova marca</a>
            </div>
            <CardMarcas marcas={marcas} />
        </>
    )
}