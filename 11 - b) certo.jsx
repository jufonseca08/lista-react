import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Formulario() {
  const [dados,setDados] = useState({
    nome: '',
    email:'',
    idade:''
  })


  const handleChange =(e) => {
    const {name, value} = e.target;
    setDados({
      ...dados,
      [name]: value
    });
  };


  const idadeVerificar = () => {
    if (dados.idade < 18 || !dados.email.includes("@"))  {alert ("Você não é de maior e/ou email invalido")}}


  return (
    <div>
      <h2>Formulario</h2>
      <form>
    <div>
        <label>Nome: </label>
        <input
        type='text'
        name='nome'
        value={dados.nome}
        onChange={handleChange}
        />
      </div>


      <div>
        <label>Email: </label>
        <input
        type='email'
        name='email'
        value={dados.email}
        onChange={handleChange}
        />
      </div>


      <div>
        <label>Idade: </label>
        <input
        type='number'
        name='idade'
        value={dados.idade}
        onChange={handleChange}
        />
      </div>
    </form>


    <div>
      <h3>Dados Preenchidos</h3>
      <p><strong>Nome: </strong> {dados.nome}</p>
      <p><strong>Email: </strong> {dados.email}</p>
      <p><strong>Idade: </strong> {dados.idade}</p>
      <button onClick={idadeVerificar}>Verificar</button>
    </div>
  </div>


  );
}
 
export default Formulario;



