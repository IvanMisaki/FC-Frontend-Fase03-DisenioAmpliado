import React, {useEffect } from 'react';
import stylesLI from "../loginIzquierda.module.css";
import styles from "./alumnos.module.css";
import { useParams } from "react-router";

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link } from "react-router-dom";
import {MenuLateral} from '../menuLateral';
import { ContenidoAlumnos } from './contenidoAlumnos';

export function Alumnos(){

    useEffect(() => {
        //var URLactual = window.location;
        //alert(URLactual)
        //return false;

      });
    
    return (
        <div>
            <div className='d-flex' style={{background:'white'}}>
                <MenuLateral></MenuLateral>
                <ContenidoAlumnos></ContenidoAlumnos>
            </div>
        </div>
    );
}