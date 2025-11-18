import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BotaoCurtir() {
  const[likes, setLikes] = useState(0);
  const [curtido, setCurtido] = useState(false);


  const toggleLike = () => {
    if (curtido) {
      setLikes(likes - 1);
      setCurtido(false);
    } else{
      setLikes(likes + 1);
      setCurtido(true);
    }
  };


  return (
    <div>
      <button
      onClick={toggleLike}
      style={{
        backgroundColor: curtido ? "#2b63e7ff" : "#ffff",
        color: curtido ? 'white' : 'black',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        👍 {curtido ? 'Curtido ' : 'Curtir '}({likes})
        </button>
    </div>
  );
}


export default BotaoCurtir


