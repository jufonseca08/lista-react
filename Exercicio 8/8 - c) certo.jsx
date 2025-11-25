import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function PlacarJogos(){
  const [nomeTime, setNomeTime] = useState("");
  const [pontuacao, setPontuacao] = useState ("");
  const [Times, setTimes] = useState([]);
  const adicionarTime = () => {
    if (nomeTime.trim() && pontuacao !== '') {
      const novoTime = {
        nome: nomeTime.trim(),
        pontos: parseInt(pontuacao)
      };


      const novosTimesOrdenados = [...Times, novoTime];


      novosTimesOrdenados.sort((a,b) => b.pontos - a.pontos);
      setTimes(novosTimesOrdenados);
      setNomeTime("");
      setPontuacao("");
    }
  };


  return (
    <div>
      <h2>Placar Jogo</h2>
      <input
      type='text'
      value={nomeTime}
      onChange={(e) => setNomeTime(e.target.value)}
      placeholder='Digite um time...'
      />
      <input
      type='number'
      value={pontuacao}
      onChange={(e) => setPontuacao(e.target.value)}
      placeholder='Digite os pontos...'
      />
      <button onClick={adicionarTime}>Adicionar Time</button>


      <hr />


      <h3>Classificação</h3>
      <ol>
        {Times.map((time, index) => (
          <li key={index}>
            {time.nome} - <strong>{time.pontos}</strong> Pontuação
          </li>
        ))}
      </ol>
    </div>
  );
}


export default PlacarJogos;
