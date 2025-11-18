function CartaoPessoa({nome, idade, profissao}){  
  return(
    <div>
      <h2>{nome}</h2>
      <p><strong>Idade: </strong>{idade}</p>
      <p><strong>Profissão: </strong>{profissao}</p>
    </div>
  );
}


function App() {
  return (
    <div>
      <CartaoPessoa nome = "Júlia" idade = {17} profissao = "Nenhuma"/>
    </div>
  );
}


export default App;
