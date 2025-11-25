import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AlterarHumor(){
  const[humor, setHumor]= useState('❓');
  const[cor, setCor]= useState ('white');




  const mudarHumor = (novaCor, novoHumor, fala) => {
    setCor (novaCor);
    setHumor(novoHumor);
    document.body.style.backgroundColor=novaCor;
    alert(fala);
  };
  return (
    <div> {humor}
      <h2>Como você está se sentindo hoje?</h2>
      <button onClick={()=>mudarHumor ('#fddd4fff','😊', 'haha!')}>feliz</button>
      <button onClick={()=> mudarHumor ('#34a6e3ff' ,'😢',' sniff sniff')}>triste</button>
      <button onClick={()=> mudarHumor ('#eb2626ff','😡',' grrrr')}>raivoso</button>
      <button onClick={()=> mudarHumor ('#1bd282ff','😌', 'ahhh')}>calmo</button>


    </div>
  );
  }
export default AlterarHumor;

