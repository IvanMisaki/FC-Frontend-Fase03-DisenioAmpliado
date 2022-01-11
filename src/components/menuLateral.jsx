import React from 'react'
import { ContenidoAlumnos } from './alumno/contenidoAlumnos'
import { Link } from "react-router-dom";

export function MenuLateral() {
    return (
        <div style={{background:'#08152e',width:'160px', padding: '20px 0px 20px 0px', minHeight: '100vh'}}>
            <div className='menu_hover' onClick={() => alert("Pendiente")}>
                <ul style={{padding:'10px', fontSize:'1.2rem', cursor:'pointer'}} className='d-flex'>
                    <li style={{color:'white'}}>
                        <span style={{fontWeight:'bold'}}>Open</span>
                        <span>Recruiter</span>
                    </li>
                </ul>
            </div>
            <div className='menu_hover' onClick={() => alert("Pendiente")}>
                <ul style={{padding:'10px', cursor:'pointer'}} className='d-flex'>
                    <i className="bi bi-window-stack" style={{color:'#7f8592', width:'25px'}}></i>
                    <li style={{color:'#7f8592'}}>Ofertas</li>
                </ul>
            </div>
            <Link to={"/alumnos"} style={{textDecoration:'none'}}>
                <div className='menu_hover' style={{backgroundColor:'#0e3240'}}>
                    <ul style={{padding:'10px', cursor:'pointer'}} className='d-flex'>
                        <i className="bi bi-people" style={{color:'#30cda0', width:'25px'}}></i>
                        <li style={{color:'white'}}>Candidatos</li>
                    </ul>
                </div>
            </Link>
            <div className='menu_hover' onClick={() => alert("Pendiente")}>
                <ul style={{padding:'10px', cursor:'pointer'}} className='d-flex menu_hover'>
                    <i className="bi bi-bar-chart-line" style={{color:'#7f8592', width:'25px'}}></i>
                    <li style={{color:'#7f8592'}}>Clientes</li>
                </ul>
            </div>
            <div className='menu_hover' onClick={() => alert("Pendiente")}>
                <ul style={{padding:'10px', cursor:'pointer'}} className='d-flex'>
                    <i className="bi bi-calendar2-week" style={{color:'#7f8592', width:'25px'}}></i>
                    <li style={{color:'#7f8592'}}>Entrevistas</li>
                </ul>
            </div>
        </div>
    )
}
