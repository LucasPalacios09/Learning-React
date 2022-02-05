import React from 'react';

export default function Propiedades(props) {
    return (
        <div>
            <h1>{props.porDefecto}</h1>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(" - ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.mail}</li>
                {props.elementoReact}
                {props.componenteReact}
                <li>{props.arreglo.map(props.funcion).join(" - ")}</li>

            </ul>
        </div>);
}

Propiedades.defaultProps = {
    porDefecto: "Soy una propiedad por defecto"
};