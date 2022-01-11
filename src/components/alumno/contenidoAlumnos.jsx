import React from 'react'
import { Usuario } from './usuario';
import { Contenido } from './contenido';

export function ContenidoAlumnos() {
    return (
        <div className='container-fluid' style={{padding:'0px'}}>
            <Usuario></Usuario>
            <Contenido></Contenido>
        </div>
    )
}
