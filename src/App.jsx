import { useState } from "react";
import Cards from "./components/Cards";
import Buscador from "./components/Buscador";
import Selector from "./components/Selector";
import './App.css'

const App = () => {
  const [filtro, setFiltro] = useState("");
  const [orden, setOrden] = useState("");

  const handleBuscar = (busqueda) => {
    setFiltro(busqueda);
  };

  const handleOrdenar = (opcion) => {
    setOrden(opcion);
  };

  return (
    <div className="container">
      <h1>Rick and Morty</h1>

      <div className="navbar">
      <Buscador onBuscar={handleBuscar} />
      <Selector onOrdenar={handleOrdenar} />
      </div>
      <Cards filtro={filtro} orden={orden} />
    </div>
  );
}

export default App;