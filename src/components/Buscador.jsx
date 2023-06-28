import { useState } from "react";

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (event) => {
    const valor = event.target.value;
    setBusqueda(valor);
    onBuscar(valor);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
