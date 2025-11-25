function PrevisaoTempo({temperatura, clima, cidade, umidade}){
  const getIcone = (clima) => {
    const climas = {
      'Ensolarado': '☀️',
      'Nublado': '☁️',
      'Chuvoso': '🌧️',
      'Tempestuoso': '⛈️',
      'Nevando': '🌨️'
  };
  return climas[clima.toLowerCase()] || '🌤️';
};


const getCorTemperatura = (temp) => {
  if(temp < 15) return '#76b9e3ff';
  if(temp < 25) return '#c1b918ff';
  return '#9d0505ff'
};


return (
  <div style={{
    border: '2px solid #ddd',
    borderRadius: '15px',
    padding: '25px',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #1593c1ff, rgba(18, 22, 131, 1)31ff)',
    color: 'white',
    maxWidth: '200px',
    minWidth: '200px'
  }}>
    <h2 style = {{margin: '0 0 15px 0'}}>{cidade}</h2>
    <div style = {{fontSize: '60px', margin: '10px 0'}}>
      {getIcone(clima)}
      </div>
    <div style ={{
      fontSize: '48px',
      fontWeight: 'bold',
      color: getCorTemperatura(temperatura),
      textShadow: '2px 2px 4px #312800ff'
    }}>
      {temperatura}°C
    </div>


    <p style={{fontSize: '18px', margin: '10px 0'}}>{clima}</p>
    <p style={{fontSize: '14px', opacity: 0.9}}>Umidade: {umidade}%</p>
    </div>
  );
}


function App(){
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '50px',
    flexWrap: 'wrap',
    with: '100%',
  };


return (
    <div style={containerStyle}>


      <PrevisaoTempo temperatura={35} clima = 'Ensolarado' cidade = 'Rio de Janeiro' umidade={70}></PrevisaoTempo>
      <PrevisaoTempo temperatura={28} clima = 'Nublado' cidade = 'São Paulo' umidade={70}></PrevisaoTempo>
      <PrevisaoTempo temperatura={12} clima = 'Nevando' cidade = 'Curitiba' umidade={70}></PrevisaoTempo>
    </div>
  )
}


export default App;

