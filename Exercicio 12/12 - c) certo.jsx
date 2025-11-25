import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [medidor, setMedidor] = useState(0);
  const [emocao, setEmocao] = useState("😐");
  const listaEmocao = ["😐", "🙂", "😊", "😁", "🤩"];


  const increaseEmotion = () => {
    setMedidor(medidor + 1);
    if (medidor < 5) {
      setEmocao(listaEmocao[medidor]);
    } else {
      setEmocao(listaEmocao.at(-1));
    }
  };


  return (
    <div>
      <h2>
        {emocao} Nível de felicidade {medidor}
      </h2>
      <button
        onClick={increaseEmotion}
        style={{
          backgroundColor: "#1877f2",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Aumentar a felicidade
      </button>
    </div>
  );
}


export default App;




