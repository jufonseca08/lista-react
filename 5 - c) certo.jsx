function Temperatura(){
  const[temperatura, setTemp] = useState(20);
 
  const getCorTemperatura = (temp) => {
  if(temp < 15) return '#76b9e3ff';
  if(temp < 25) return '#c1b918ff';
  return '#9d0505ff'
};


  return(
  <div style ={{
      fontSize: '48px',
      fontWeight: 'bold',
      backgroundColor: getCorTemperatura(temperatura)
    }}>


    <h2>Temperatura: {temperatura}°c</h2>
    <button onClick={() => setTemp (temperatura + 2)}>+2</button>
    <button onClick={() => setTemp (temperatura - 2)}>-2</button>
  </div>


  );
}






export default Temperatura;
