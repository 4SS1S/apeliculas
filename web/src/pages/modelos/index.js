import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import CardModelos from '../../components/card-modelo';


export default function Modelos(props){

    const fabricante = props.match.params.id;
    const [ modelos, setModelos ] = useState([]);

    useEffect(() => {
        axios.get(`/modelo?fabricante=${fabricante}`)
            .then(res => {
                setModelos(res.data)
            }
        );
    }, []);

    return(
        <>
            <CardModelos modelos={modelos} />
        </>
    )
}