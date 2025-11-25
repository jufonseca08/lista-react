function ListaComidas() {
  const comidas = ["chocolate", "açaí", "risoto", "macarrão"];


  return (
    <div>
      <h2> minhas comidas favoritas</h2>
      <ul>
        {comidas.map((comida, index) => (
          <li key={index}>{comida}</li>
        ))}
      </ul>{" "}
    </div>
  );
}


export default ListaComidas;
