import React from 'react'
import styles from "./loginIzquierda.module.css";
import { Link } from "react-router-dom";
import $ from 'jquery';

export function Loginizquierda(){
    
    function fn_IniciarSesion(){
        if($("#txtEmail").val().trim() == ""){
            alert("Ingrese Email");
            $("#txtEmail").focus();
            return false;
        }
        if($("#txtPassword").val().trim() == ""){
            alert("Ingrese Contraseña");
            $("#txtPassword").focus();
            return false;
        }
        if(
            !(
                ($("#txtEmail").val().trim() == "alex" && $("#txtPassword").val().trim() == "alex")||
                ($("#txtEmail").val().trim() == "raul" && $("#txtPassword").val().trim() == "raul")||
                ($("#txtEmail").val().trim() == "tania" && $("#txtPassword").val().trim() == "tania")
             )
           ){
            alert("Credenciales Incorrectas");
            $("#txtPassword").val("");
            $("#txtPassword").focus();
            return false;
        }else{
            var usr = 0;
            if($("#txtEmail").val().trim()=="alex"){
                usr=1;
            }
            if($("#txtEmail").val().trim()=="raul"){
                usr=2;
            }
            if($("#txtEmail").val().trim()=="tania"){
                usr=3;
            }
            //window.location.href = "Vista/alumnos.html?usr="+usr;
            //this.context.router.transitionTo("/alumnos");
            //window.location.href = "/alumnos/"+usr;

            //PENDIENTE
            return false;
        }
    }

    return (
        <div className={styles.centrar_horizontal}>
            <div>
                <h2 className={styles.mi_left}>
                    <span>OpenBootcamp</span>
                    <span className={styles.mi_verde}> | Alumnos</span>
                </h2>
            </div>
            <br></br>
            <div className={styles.mi_label}>
                <label className="label">Email</label>
            </div>
            <div>
                <input id='txtEmail' type="text" className="form-control" placeholder="Introduce tu correo" aria-label="email" aria-describedby="basic-addon1">
                </input>
            </div>
            <br></br>
            <div className={styles.mi_label}>
                <label className="label">Contraseña</label>
            </div>
            <div>
                <input id='txtPassword' type="password" className="form-control" placeholder="Introduce tu contraseña" aria-label="email" aria-describedby="basic-addon1">
                </input>
            </div>
            <br></br>
            <div className='container p-0'>
                <div className='row'>
                    <div  className={styles.mi_left + " col-5"}>
                        <div>
                            <input type="checkbox" value="" id="defaultCheck1">
                            </input>
                            &nbsp;
                            <label className={styles.mi_rem8} htmlFor="defaultCheck1">
                            Recuérdame
                            </label>
                        </div>
                    </div>
                    <div  className={styles.mi_left + " col-7"}>
                        <label className={styles.mi_verde +" "+styles.mi_rem8} 
                               onClick={() => alert("Pendiente")}
                               style={{cursor:'pointer'}}>
                                He olvidado contraseña
                            </label>
                    </div>
                </div>
            </div>
            <br></br>
            <Link to={"/alumnos"}>
                <button type="button" 
                        className={"btn btn-success form-control "+ 
                        styles.mi_verde_back}
                        >Iniciar Sesión</button>
            </Link>
            
            <br></br>
            <br></br>
            <p className={styles.mi_p_sub}>Copyright &copy; 2021 Open Bootcamp SL, Imagina Group</p>
            <p className={styles.mi_p_sub}>Todos los derechos reservados</p>
            <p className={styles.mi_p_sub}
                                        onClick={() => alert("Pendiente")}
                                        style={{cursor:'pointer', 
                                                textDecoration:'underline'}}>Política de Privacidad</p>
        </div>
    )
}
