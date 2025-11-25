import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [palavraChave, setPalavraChave] = useState("");
  const criptografarSenha = (palavraChave) => {
    if (!palavraChave) {
      return "";  
    }
    const senhaGerada = palavraChave.split("").reverse().join("");
    const numeros = palavraChave.length.toString().repeat(2);
    const especiais = "@#!";


    return `${senhaGerada}${numeros}${especiais}`;
  };


  const gerarSenha = criptografarSenha(palavraChave);


  const getCorForca = (palavraChave) => {
    if (palavraChave.length < 3) return { cor: "#FF0000", nivel: "Fraca" };
    if (palavraChave.length < 6) return { cor: "#FFFF00", nivel: "Média" };
    return { cor: "#00FF00", nivel: "Forte" };
  };


  const forca = getCorForca(palavraChave);


  return (
    <div>
      <h2>Gerador de senhas</h2>
      <div style={{ color: forca.cor }}>
        <p>Sua senha é: {forca.nivel}</p>
        <p>{gerarSenha}</p>
      </div>
      <input
        type="text"
        value={palavraChave}
        onChange={(e) => setPalavraChave(e.target.value)}
        placeholder="Digite a senha"
      />
    </div>
  );
}


export default App;
