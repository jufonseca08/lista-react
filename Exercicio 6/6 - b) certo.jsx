

function MostrarEsconder(){
  const[mostrar, setMostrar] = useState(false);
 
  return(
  <div>
    <button onClick={() => setMostrar (!mostrar)}>
      {mostrar ? 'Esconder foto' : 'Mostrar foto'}
    </button>
    {mostrar && <img src="src/assets/beyonce2.jpg"/>}
  </div>


  );
}


export default MostrarEsconder
