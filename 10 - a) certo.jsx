import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Calculadora(){
  const[num1, setNum1]= useState("");
  const [num2, setNum2]= useState('');
  const[resultado, setResultado]=useState('');
const calcular = (operacao)=>{
const num1 = parseFloat (num1);
const num2 = parseFloat(num2);


if(isNaN(num1) || isNaN(num2)){
  setResultado('insira um numero valido');
  return;
}


let res;
switch (operacao){
    case 'soma':
    res= num1+num2;
    break;
    case 'subtracao':
    res= num1-num2;
    break;


    case 'multiplicacao':
    res= num1*num2;
    break;
    case 'divisao':
    res= n2!== 0? num1/num2: 'erro:divisao por zero';
    break;
    default:
      res= '';
}
  setResultado(res);
};
return(
  <div>
    <h2>calculadora</h2>
    <input
    type='number'
    value={num1}
    onChange={(e)=> setNum1(e.target.value)}
    placeholder='primeiro numero'/>


    <input
    type='number'
    value={num2}
    onChange={(e)=> setNum2(e.target.value)}
    placeholder='segundo numero'/>
    <div>
      <button onClick={()=> calcular ('soma')}>+</button>
    </div>
  </div>
)


}}






export default Calculadora;

