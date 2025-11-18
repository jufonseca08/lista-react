import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dados, setDados] = useState({
    cidade: "",
    estado: "",
    cep: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value,
    });
  };


  const verificarCep = () => {
    if (!dados.cep.includes("-")) {
      alert("CEP Inválido");
    } else {
      alert("CEP Válido");
    }
  };


  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Cidade: </label>
          <input
            type="text"
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado: </label>
          <input
            type="text"
            name="estado"
            value={dados.estado}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CEP: </label>
          <input
            type="text"
            name="cep"
            maxlength="9"
            value={dados.cep}
            onChange={handleChange}
          />
        </div>
      </form>


      <h2>Seu nome é: {dados.cidade}</h2>
      <h2>Seu e-mail é: {dados.estado}</h2>
      <h2>Sua CEP é: {dados.cep}</h2>


      <button onClick={verificarCep}>Verificar CEP válido</button>
    </div>
  );
}


export default App;



