import React from 'react'

export default function FiltrosBusqueda() {
    return (
        <div style={{width:'250px', padding:'20px 15px 15px 15px'}}>
            {/*HOLIIIII*/}
            <div className='container'>
                <div className='row'  style={{fontSize:'1.1rem'}}>
                    <div className='col'>
                        <div style={{display:'flex'}}>
                            <div style={{width:'90%', fontWeight:'bold'}}><span>Filtros de búsqueda</span></div>
                            <div style={{color:'#30cda0'}}><i className="bi bi-trash"></i></div>
                        </div>
                    </div>
                </div>
                
                <br></br>
                <div className="row">
                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Etiquetas">Tecnologías</label>
                    </div>
                    <div>
                        <div style={{width: '100%'}} className="btn-group">
                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left'}}>
                                <input id="txtBuscarEtiqueta" style={{background:'#f8f8f9', border: 'none'}} type="text" className="form-control" placeholder="Escribe para buscar..." />
                                
                            </div>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                            <span className="sr-only">
                                
                            </span>
                            </button>
                        </div>
                        <ul>
                            {/*{etiquetas && etiquetas.map((item) => <li style={{cursor:'pointer'}} className='sombrear' key={Math.random()+""} onClick={()=> seleccionar(item)}>{item}</li>)}*/}
                        </ul>
                    </div>
                    <div id="dvEtiquetas">
                        <div id='dvEtiquetasAdd'
                            style={{display:'flex',flexFlow:'wrap'}}>
                            {/*
                            {etiquetasActuales && etiquetasActuales.map((etiqueta) => (
                                <div key={Math.random()+""}
                                style={{width: 'min-content',background: '#e6e6ea', margin: '0px 5px 0px 0px',padding: '0px 5px 0px 5px',
                                borderRadius: '10px',fontSize: '15px',display:'flex'}}
                                >
                                    <div>
                                        {etiqueta}
                                    </div>
                                    <div style={{cursor:'pointer'}} onClick={() => eliminarEtiqueta(etiqueta)}>
                                        <i className="bi bi-x"></i>
                                    </div>
                                </div>
                            ))} */}
                            <div key={Math.random()+""}
                            style={{width: 'min-content',background: '#e6e6ea', margin: '5px 5px 0px 0px',padding: '0px 5px 0px 5px',
                            borderRadius: '10px',fontSize: '15px',display:'flex'}}
                            >
                                <div>
                                    {"HTML&CSS"}
                                </div>
                                <div style={{cursor:'pointer'}}>
                                    <i className="bi bi-x"></i>
                                </div>
                            </div>
                            <div key={Math.random()+""}
                            style={{width: 'min-content',background: '#e6e6ea', margin: '5px 5px 0px 0px',padding: '0px 5px 0px 5px',
                            borderRadius: '10px',fontSize: '15px',display:'flex'}}
                            >
                                <div>
                                    {"REACT"}
                                </div>
                                <div style={{cursor:'pointer'}}>
                                    <i className="bi bi-x"></i>
                                </div>
                            </div>
                            <div key={Math.random()+""}
                            style={{width: 'min-content',background: '#e6e6ea', margin: '5px 5px 0px 0px',padding: '0px 5px 0px 5px',
                            borderRadius: '10px',fontSize: '15px',display:'flex'}}
                            >
                                <div>
                                    {"ANGULAR"}
                                </div>
                                <div style={{cursor:'pointer'}}>
                                    <i className="bi bi-x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    

                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Pais">País</label>
                    </div>
                    <div>
                        <div style={{width: '100%'}} className="btn-group">
                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} className="form-control">
                                <span>España</span>
                            </div>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Ciudad">Ciudad</label>
                    </div>
                    <div>
                        <div style={{width: '100%'}} className="btn-group">
                            <div style={{background:'#f8f8f9', width: '100%', textAlign: 'left', border:'none'}} className="form-control">
                                <span>Valencia</span>
                            </div>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{background:'#f8f8f9'}}>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Presencialidad">Presencial / a distancia</label>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>Presencial</span></div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>En remoto</span></div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Traslado">Posibilidad de Traslado</label>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>Sí</span></div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>No</span></div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <label style={{fontWeight: 'bold'}} htmlFor="Estado">Estado</label>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>Contratado</span></div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>Pendiente de ofertas</span></div>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{padding:'0px 10px 0px 10px'}}><input type="checkbox" defaultChecked={""} margin="30px" /></div>
                        <div><span>Preseleccionado</span></div>
                    </div>


                </div>

            </div>
        </div>
    )
}
