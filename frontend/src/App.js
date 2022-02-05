import React from "react";
import './App.css';
import Componente from "./components/Componente";
import NavBar from './components/NavBar';
import Propiedades from "./components/Propiedades";
import ScrollHooks from './components/ScrollHooks';

function App() {
  return (
    <div className='App'>
      <NavBar></NavBar>
      <hr />
      <Componente msg="Hola soy un componente de clase" />
      <hr />
      <Propiedades
        cadena="Soy una cadena de texto"
        numero={31}
        booleano={true}
        arreglo={[1, 2, 3, 4, 5]}
        objeto={{ nombre: "Lucas", mail: "lucaspalacios@example.com" }}
        elementoReact={<li>Esta es una props de tipo elemento de react</li>}
        componenteReact={<Componente msg="Esta es una props de tipo Componente de react" />}
        funcion={(num) => num * num}
      />
      <hr />
      <ScrollHooks />
    </div>
  );
}

export default App;
