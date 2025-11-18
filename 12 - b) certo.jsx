import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [favoritar, setFavoritar] = useState(0);
  const [favoritado, setFavoritado] = useState(false);


  const toggleFavoritar = () => {
    if (favoritado) {
      setFavoritar(favoritar - 1);
      setFavoritado(false);
    } else {
      setFavoritar(favoritar + 1);
      setFavoritado(true);
    }
  };


  return (
    <div>
      <button
        onClick={toggleFavoritar}
        style={{
          backgroundColor: favoritado ? "#1877f2" : "#e4e7ea",
          color: favoritado ? "white" : "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {favoritado ? "Favoritado" : "Favoritar"} ({favoritar})
      </button>
    </div>
  );
}


export default App;




