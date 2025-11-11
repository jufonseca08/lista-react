function MeuRestaurante() {
  const pratos = [
    { nome:'Papas fritas' , preco: 32.90, descricao:'Batatas fatiadas e fritas no oleo'},
    { nome:'Salmão' , preco: 45.50, descricao:'Peixe salmão sem espinhas'},
    { nome:'Pão de queijo' , preco: 28.00, descricao:'Prato com uma porção de 10 pãos de queijos'},
    { nome:'Risotto de camarão com queijo com queijo brie' , preco: 38.70, descricao:'risito camarão'}
  ];




  return(
    <div>
      <h1>Cardápio do Restaurante</h1>
      <div className = "menu-grid">
        {pratos.map((prato, index) => (
        <div key = {index} className = "prato-card">
          <h3>{prato.nome}</h3>
          <p className="preco">R$ {prato.preco.toFixed(2)}</p>
          <p className="descricao">{prato.descricao}</p>
        </div>
        ))}




      </div>
    </div>
  );
}




export default MeuRestaurante;
