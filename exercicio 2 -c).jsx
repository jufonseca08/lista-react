function StatusJogo({nivel, pontos}){
  const maxPontos = nivel * 1000
  const progresso = Math.min((pontos / maxPontos) * 100, 100);
  const corBarra = progresso < 30 ? 'red' : progresso < 70 ? 'orange' : 'green'
 
  return (
    <div>
      <h2>Nivel {nivel}</h2>
      <p>Pontos: {pontos} / {maxPontos}</p>
      <div className = "progress-container">
        <div className = {`progress-bar ${corBarra}`} data-width = {progresso}></div>
      </div>
      <p>{progresso.toFixed(1)}% completo</p>
    </div>
  )
}


function App(){
  return <StatusJogo nivel = {5} pontos = {2000}/>
}


export default App
