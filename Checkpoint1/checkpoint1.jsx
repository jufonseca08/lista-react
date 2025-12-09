import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // 👑 NOVA COMANDANTE
  const comandante = "Beyoncé";
  const planetaDestino = {
    nome: "Europa",
    temperatura: "-160°C", 
    gravidade: "0.134g", 
    descricao: "Um oceano subsuperficial promissor. Missão: Procurar Vida.",
    clima: "Radiação", 
  };

  const statusMissao = {
    distanciaTotal: 628300000, 
    distanciaPercorrida: 314150000,
  };

  const previsao = {
    clima: "Tempestade", 
    umidadeSolar: "Média",
    radiacaoCosmica: "Alta",
  };

  const relatorio = [
    "Sistema de Suporte de Vida Estável",
    "Preparação para Manobra de Inserção Orbital",
    "Detecção de Anomalia Magnética",
    "Comunicação com a Terra restabelecida",
  ];

  const progresso =
    (statusMissao.distanciaPercorrida / statusMissao.distanciaTotal) * 100;

  const iconesClima = {
    Sol: "☀️",
    Tempestade: "⛈️",
    Neve: "❄️",
    Nuvens: "☁️",
    Radiação: "☢️",
  };

  const agora = new Date();
  const diasSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();

  return (
    <div className="painel-controle">
      <header>
        <h1>🛰️ Missão Interstelar: Europa</h1>
        <p>
          Comandante: **{comandante}** | Hoje é {diaSemana}, {dia} de {mes} de{" "}
          {ano}
        </p>
      </header>

      <div className="secoes">
        <section className="status-missao">
          <h2>Status da Missão</h2>
          <p>
            **Distância Percorrida:**{" "}
            {(statusMissao.distanciaPercorrida / 1000000).toFixed(1)} Milhões km
          </p>
          <p>
            **Progresso:** <span className="progresso-porcentagem">{progresso.toFixed(2)}%</span>
          </p>
          <progress value={progresso} max="100"></progress>
        </section>

        <section className="planeta-destino">
          <h2>Planeta de Destino: **{planetaDestino.nome}**</h2>
          <p className="descricao">{planetaDestino.descricao}</p>
          <ul>
            <li>
              **Temperatura Média:** {planetaDestino.temperatura}
            </li>
            <li>
              **Gravidade:** {planetaDestino.gravidade}
            </li>
            <li>
              **Clima Atual:** {iconesClima[planetaDestino.clima] || ""} (
              {planetaDestino.clima})
            </li>
          </ul>
        </section>

        <section className="previsao-tempo">
          <h2>Previsão de Europa (Chegada)</h2>
          <ul>
            <li>
              **Clima:** {iconesClima[previsao.clima] || ""} ({previsao.clima})
            </li>
            <li>
              **Umidade Solar:** {previsao.umidadeSolar}
            </li>
            <li>
              **Radiação Cósmica:** {previsao.radiacaoCosmica}
            </li>
          </ul>
        </section>

        <section className="relatorio-bordo">
          <h2>Relatório de Bordo</h2>
          <ol>
            {relatorio.map((evento, index) => (
              <li key={index}>**{evento}**</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

export default App;