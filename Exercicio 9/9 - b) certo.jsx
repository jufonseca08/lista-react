import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AlterarTamanho(){
  const[tamanho,setTamanho]= useState('16px');


  const mudarTamanho = (novoTamanho) => {
    setTamanho(novoTamanho);
    document.body.style.fontSize=novoTamanho;
  };
  return (
    <div>
      <h2>alterar tamanho da fonte</h2>
      <button onClick={()=> mudarTamanho ('10px')}>pequena</button>
      <button onClick={()=> mudarTamanho ('26px')}>média</button>
      <button onClick={()=> mudarTamanho ('36px')}>grande</button>


    </div>
  );
  }
export default AlterarTamanho;
