import React from 'react';
import { Loginderecha } from './loginDerecha';
import { Loginizquierda } from './loginIzquierda';




import styles from "./login.module.css";

export function Login(){
    return (
        <div className={styles.margin_left_0 + " container-fluid"}>
            <div className={styles.margin_left_0 + " row"}>
                <div className={styles.central_vertial + " col-lg-4"}>
                    <Loginizquierda></Loginizquierda>
                </div>
                <div className={styles.margin_left_0 + " col-lg-8 d-none d-lg-block"}>
                    <Loginderecha></Loginderecha>
                </div>
            </div>
        </div>
    );
}
