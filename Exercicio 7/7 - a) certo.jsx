import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cofre(){
  const[abrir, setAbrir] = useState(false);
  const itens = ['Album da Beyoncé', 'Album da Ariana Grande'];
 
  return(
  <div>
    <button onClick={() => setAbrir (!abrir)}>
      {abrir ? 'Cofre Aberto 🔓' : 'Cofre Trancado 🔒'}
    </button>
    {abrir && <ul>
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>}
  </div>


  );
}


export default Cofre;


