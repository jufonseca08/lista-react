import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [comprimento, setComprimento] = useState(0);
  const [largura, setLargura] = useState(0);
  const [resposta, setResposta] = useState("Nenhum cálculo foi realizado");


  const calcularArea = () => {
    const resposta = <p>O valor da área é: {comprimento * largura}</p>;
    setResposta(resposta);
  };


  return (
    <div>
      <h2>Calculadora de área</h2>
      <input
        type="number"
        value={comprimento}
        onChange={(e) => setComprimento(e.target.value)}
        placeholder="Digite o comprimento"
      />


      <input
        type="number"
        value={largura}
        onChange={(e) => setLargura(e.target.value)}
        placeholder="Digite a largura"
      />
      <div>{resposta}</div>
      <div>
        <button onClick={() => calcularArea()}>Calcular área</button>
      </div>
    </div>
  );
}


export default App;

