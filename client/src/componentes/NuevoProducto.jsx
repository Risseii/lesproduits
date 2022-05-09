import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom"; //redireccionar a otra pagina

const NuevoProducto = () => {
    const [nombre,setNombre] = useState("");
    const [precio,setPrecio] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const history = useHistory();
    
    //funcion para guardar con conexion a backend
    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos",{
        nombre,
        precio,
        descripcion,    
    })
        .then(res => {
            console.log(res);
            history.push("/");
        })
        .catch(err => {
            console.log(err);
        });
    }


    return(
        <div>
            <h1>Nuevo producto</h1>
            <form onSubmit={guardarProducto}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input id="nombre" name="nombre" type="text" className="form-control" onChange={ (e)=> setNombre(e.target.value) } value={nombre}></input>
                </div>

                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input id="precio" name="precio" type="number" className="form-control" onChange={ (e)=> setPrecio(e.target.value) } value={precio}></input>
                </div>
                
                <div>
                    <label htmlFor="descripcion">Descripcion:</label>
                    <input id="descripcion" name="descripcion" type="text" className="form-control" onChange={ (e)=> setDescripcion(e.target.value) }value={descripcion}></input>
                </div>
                
                <input type="submit" className="btn btn-success" value="Guardar" />
                
            </form>
        </div>
    )
}

export default NuevoProducto;
