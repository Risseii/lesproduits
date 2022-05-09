import React, {useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";
import axios from "axios";

const ActualizarProducto = () => {

    const {id} = useParams(); //se obtiene del url del front-end
    const [nombre,setNombre] = useState("");
    const [precio,setPrecio] = useState("");
    const [descripcion,setDescripcion] = useState("");
    const history = useHistory(); //para cambiar de url

    //obtener los productos a traves del id y consultando al localhost
    useEffect(() => {
        axios.get("http://localhost:8000/api/productos/"+id) 
        .then(res => {
            console.log(res.data);
            setNombre(res.data.nombre);
            setPrecio(res.data.precio);
            setDescripcion(res.data.descripcion);
        })
        .catch(err => console.log(err));
    },[]);

    //se envia como body el nombre,precio,descripcion
    const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/productos/"+ id,{
            nombre,
            precio,
            descripcion
        })
            .then(res => history.push("/")) //regresame a la pagina de inicio
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h1>Editar producto</h1>
            <form onSubmit={actualizarProducto}>
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
export default ActualizarProducto;