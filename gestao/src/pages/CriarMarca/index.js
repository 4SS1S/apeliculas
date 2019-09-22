import React from 'react';

export default function CriarMarca(){

    return(
        <div className="card">
            <form>
                <div className="card-header">
                    Nova Marca
                </div>
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="Nome" required />
                    <input type="url" className="form-control mt-1" placeholder="Logo" required/>
                </div>
                <div className="card-footer">
                    <input type="submit" className="btn btn-success" value="salvar" />
                </div>
            </form>
        </div>
    )
}