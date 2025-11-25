import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AdicionarLista(){
  const [item, setItem] = useState("");
  const [lista, setLista] = useState([]);
  const adicionarItem = () => {
    if (item.trim()) {
      setLista([...lista, item]);
      setItem('');
    }
  }


  return (
    <div>
      <input
      type='text'
      value={item}
      onChange={(e) => setItem(e.target.value)}
      placeholder='Digite uma nova tarefa'
      />
      <button onClick={adicionarItem}>Nova Tarefa</button>


      <ul>


        {lista.map((itemLista, index) => (
          <li key={index}>{itemLista}</li>
        ))}
      </ul>
    </div>
  )
}


export default AdicionarLista

