import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [moedaIda, setMoedaIda] = useState(0);
  const [moedaBase, setMoedaBase] = useState("Real");
  const [resposta, setResposta] = useState("Nenhuma conversão foi realizado");


  const handleSelectChange = (event) => {
    setMoedaBase(event.target.value);
  };


  const calcular = (moeda) => {
    if (moedaBase === "Real") {
      if (moeda === "Real") {
        const resposta = <p>Real: {moedaIda}</p>;
        setResposta(resposta);
      }


      if (moeda === "Euro") {
        const resposta = <p>Euro: {moedaIda * 0.16}</p>;
        setResposta(resposta);
      }


      if (moeda === "Dólar") {
        const resposta = <p>Dólar: {moedaIda * 0.19}</p>;
        setResposta(resposta);
      }
    }


    if (moedaBase === "Dólar") {
      if (moeda === "Real") {
        const resposta = <p>Real: {moedaIda * 5.4}</p>;
        setResposta(resposta);
      }


      if (moeda === "Euro") {
        const resposta = <p>Euro: {moedaIda * 0.89}</p>;
        setResposta(resposta);
      }


      if (moeda === "Dólar") {
        const resposta = <p>Dólar: {moedaIda}</p>;
        setResposta(resposta);
      }
    }


    if (moedaBase === "Euro") {
      if (moeda === "Real") {
        const resposta = <p>Real: {moedaIda * 6.26}</p>;
        setResposta(resposta);
      }


      if (moeda === "Euro") {
        const resposta = <p>Euro: {moedaIda}</p>;
        setResposta(resposta);
      }


      if (moeda === "Dólar") {
        const resposta = <p>Dólar: {moedaIda * 1.16}</p>;
        setResposta(resposta);
      }
    }
  };


  return (
    <div>
      <h2>Calculadora de conversão</h2>
      <h3>Moeda base: {moedaBase}</h3>
      <input
        type="number"
        value={moedaIda}
        onChange={(e) => setMoedaIda(e.target.value)}
        placeholder="Digite o primeiro número"
      />


      <select value={moedaBase} onChange={handleSelectChange}>
        <option value="Real">Real</option>
        <option value="Dólar">Dólar</option>
        <option value="Euro">Euro</option>
      </select>
      <div>{resposta}</div>
      <div>
        <button onClick={() => calcular("Real")}>Real</button>
        <button onClick={() => calcular("Dólar")}>Dólar</button>
        <button onClick={() => calcular("Euro")}>Euro</button>
      </div>
    </div>
  );
}


export default App;


