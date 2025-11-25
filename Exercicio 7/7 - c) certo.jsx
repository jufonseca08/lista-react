import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function verifyCaracter(texto) {
  if (texto.length < 3) {
    return "Texto inválido";
  } else {
    return "Texto válido";
  }
}


function corCaracter(texto) {
  if (texto.length < 3) {
    return "#FF0000";
  } else {
    return "#00FF00";
  }
}


function App() {
  const [texto, setTexto] = useState("");


  return (
    <div>
      <h2
        style={{
          color: corCaracter(texto),
        }}
      >
        Título: {verifyCaracter(texto)}
      </h2>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
    </div>
  );
}


export default App;

