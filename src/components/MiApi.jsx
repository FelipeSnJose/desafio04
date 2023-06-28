import { useState, useEffect } from "react";

const MiApi = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };

  return results;
};

export default MiApi;
