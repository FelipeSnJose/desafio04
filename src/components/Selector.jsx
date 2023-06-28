const Selector = ({ onOrdenar }) => {
  const handleSelectChange = (event) => {
    const valor = event.target.value;
    onOrdenar(valor);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="">Ordenar por:</option>
        <option value="asc">Id de menor a mayor</option>
        <option value="desc">Id de mayor a menor</option>
        <option value="az">Alfabéticamente de A-Z</option>
        <option value="za">Alfabéticamente de Z-A</option>
      </select>
    </div>
  );
};

export default Selector;
