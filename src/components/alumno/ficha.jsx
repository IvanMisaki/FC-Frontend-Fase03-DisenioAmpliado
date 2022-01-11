import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Usuario } from './usuario';
import $ from 'jquery';
import {axios} from 'axios'
import { MenuLateral } from '../menuLateral';
import { ContenidoFicha } from './contenidoFicha';


export function Ficha() {
    return (
        <div>
            <div className='d-flex' style={{background:'white'}}>
                <MenuLateral></MenuLateral>
                <ContenidoFicha></ContenidoFicha>
            </div>
        </div>
    );
}
