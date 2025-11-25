import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./styles.css";

const XP_PARA_NIVEL = 300,
  HP_MAX_BASE = 100,
  PM_MAX_BASE = 50,
  RECOMPENSA_OURO_MISSAO = 25;
const ITENS_LOJA = [
  {
    id: 1,
    nome: "Poção de Vida ( +10 PV)",
    preco: 15,
    tipo: "consumível",
    efeito: (curar) => curar(10),
  },
  {
    id: 2,
    nome: "Flecha Encantada ( +50 XP)",
    preco: 25,
    tipo: "utilidade",
    efeito: (curar, ganharXp) => ganharXp(50),
  },
  {
    id: 3,
    nome: "Amuleto da Sorte",
    preco: 75,
    tipo: "equipamento",
    efeito: (curar) => curar(5),
  },
];

const ControleAtributo = React.memo(
  ({
    nome,
    valor,
    descricao,
    aoAumentar,
    aoDiminuir,
    podeAumentar,
    podeDiminuir,
  }) => (
    <p className="atributo-item">
      <span className="atributo-nome">
        {nome}: {valor}{" "}
        <small className="atributo-descricao">({descricao})</small>
      </span>
      <span className="atributo-botoes">
        <button onClick={aoAumentar} disabled={!podeAumentar}>
          +
        </button>
        <button onClick={aoDiminuir} disabled={!podeDiminuir}>
          -
        </button>
      </span>
    </p>
  )
);

const BarraProgresso = React.memo(
  ({ label, valor, max, percentual, classeBarra, acoes }) => (
    <div className="bar-section">
      <p className="bar-label">
        {label}: {valor}/{max}
      </p>
      <div className={`${classeBarra}-bar-container`}>
        <div
          className={classeBarra + "-bar"}
          style={{ width: `${percentual}%` }}
        />
      </div>
      <div className="bar-actions">{acoes}</div>
    </div>
  )
);

const TabelaGrupo = React.memo(({ grupo, aoAlterarNivel }) => (
  <table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>Nome</th>
        <th>Classe</th>
        <th>Nível</th>
        <th>XP</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {grupo.map((membro, index) => (
        <tr key={membro.id}>
          <td>#{index + 1}</td>
          <td>{membro.nome}</td>
          <td>{membro.classe}</td>
          <td>{membro.nivel}</td>
          <td>{membro.xp}</td>
          <td>
            <button onClick={() => aoAlterarNivel(membro.id, 1)}>↑</button>
            <button
              onClick={() => aoAlterarNivel(membro.id, -1)}
              disabled={membro.nivel <= 1}
            >
              ↓
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
));

export default function RPGDashboard() {
  const [nome, setNome] = useState("Herói Lendário");
  const [raca, setRaca] = useState("Humano");
  const [classePersonagem, setClassePersonagem] = useState("Guerreiro");
  const [pv, setPv] = useState(100);
  const [pm, setPm] = useState(50);
  const [xp, setXp] = useState(0);
  const [nivel, setNivel] = useState(1);
  const [inventarioAberto, setInventarioAberto] = useState(false);
  const [itens, setItens] = useState([
    "Espada 🗡️",
    "Poção 🧪",
    "Mapa 🗺️",
    "Lanterna 🔦",
    "Escudo 🛡️",
  ]);
  const [missoes, setMissoes] = useState([]);
  const [entradaMissao, setEntradaMissao] = useState("");
  const [contagemConcluida, setContagemConcluida] = useState(0);
  const [baseFeitico, setBaseFeitico] = useState("");
  const [encantamento, setEncantamento] = useState("");
  const [pontosAtributo, setPontosAtributo] = useState(10);
  const [atributos, setAtributos] = useState({
    forca: 3,
    vitalidade: 3,
    inteligencia: 2,
    sorte: 2,
  });
  const [ouro, setOuro] = useState(50);
  [lojaAberta, setLojaAberta] = useState(false);
  const [efeitosStatus, setEfeitosStatus] = useState(["Abençoado"]);
  const [grupo, setGrupo] = useState([
    { id: 1, nome: "Hades", classe: "Arqueiro", nivel: 3, xp: 120 },
    { id: 2, nome: "Lux", classe: "Mago", nivel: 4, xp: 40 },
    { id: 0, nome: nome, classe: classePersonagem, nivel, xp, isHero: true },
  ]);

  const pvMax = useMemo(
    () => HP_MAX_BASE + atributos.vitalidade * 5,
    [atributos.vitalidade]
  );
  const pmMax = useMemo(
    () => PM_MAX_BASE + atributos.inteligencia * 5,
    [atributos.inteligencia]
  );
  const percentualPv = useMemo(() => (pv / pvMax) * 100, [pv, pvMax]);
  const percentualPm = useMemo(() => (pm / pmMax) * 100, [pm, pmMax]);
  const percentualXp = useMemo(() => (xp / XP_PARA_NIVEL) * 100, [xp]);

  const classeCorPv = useCallback(() => {
    if (percentualPv > 70) return "health-green";
    if (percentualPv > 30) return "health-yellow";
    return "health-red";
  }, [percentualPv]);

  const curar = useCallback(
    (quantidade = 10) => setPv((p) => Math.min(p + quantidade, pvMax)),
    [pvMax]
  );
  const sofrerDano = useCallback(
    (quantidade = 15) => setPv((p) => Math.max(0, p - quantidade)),
    []
  );
  const restaurarMana = useCallback(
    (quantidade = 10) => setPm((p) => Math.min(p + quantidade, pmMax)),
    [pmMax]
  );
  const usarMana = useCallback(
    (quantidade = 5) => setPm((p) => Math.max(0, p - quantidade)),
    []
  );
  const ganharXp = useCallback(
    (quantidade) => setXp((x) => x + quantidade),
    []
  );

  const alterarNivelMembro = useCallback((id, delta) => {
    setGrupo((prevGrupo) =>
      prevGrupo.map((m) =>
        m.id === id
          ? {
              ...m,
              nivel: Math.max(1, m.nivel + delta),
              xp: m.nivel + delta > m.nivel ? 0 : m.xp,
            }
          : m
      )
    );
  }, []);

  const adicionarMissao = useCallback(
    (categoria) => {
      if (!entradaMissao.trim()) return;
      setMissoes((m) => [
        {
          id: Date.now(),
          titulo: entradaMissao.trim(),
          categoria,
          concluida: false,
        },
        ...m,
      ]);
      setEntradaMissao("");
    },
    [entradaMissao]
  );

  const alternarMissaoConcluida = useCallback(
    (id) => {
      setMissoes((m) => {
        const next = m.map((mm) =>
          mm.id === id ? { ...mm, concluida: !mm.concluida } : mm
        );
        const missaoAtual = m.find((mm) => mm.id === id);
        if (missaoAtual && !missaoAtual.concluida) {
          ganharXp(50);
          setOuro((o) => o + RECOMPENSA_OURO_MISSAO);
        }
        setContagemConcluida(next.filter((n) => n.concluida).length);
        return next;
      });
    },
    [ganharXp]
  );

  const gerarEncantamento = useCallback(() => {
    const base = baseFeitico.trim();
    if (!base) return setEncantamento("Nenhum");
    const invertido = base.split("").reverse().join("");
    const extra = [...base].map((c, i) => (i % 2 ? "~" : "*")).join("");
    setEncantamento(
      `*** ${invertido}${base.length % 2 ? "!" : "?"}-${extra} ***`
    );
  }, [baseFeitico]);

  const alternarInventario = useCallback(
    () => setInventarioAberto((s) => !s),
    []
  );

  const alterarAtributo = useCallback(
    (chaveAtributo, delta) => {
      const valorAtual = atributos[chaveAtributo];
      if (delta > 0 && pontosAtributo <= 0) return;
      if (delta < 0 && valorAtual <= 1) return;

      setAtributos((prev) => ({
        ...prev,
        [chaveAtributo]: valorAtual + delta,
      }));
      setPontosAtributo((p) => p - delta);
    },
    [atributos, pontosAtributo]
  );

  const comprarItem = useCallback(
    (item) => {
      if (ouro < item.preco)
        return alert("Ouro insuficiente para comprar este item.");
      setOuro((o) => o - item.preco);
      setItens((i) => [...i, item.nome]);
      if (item.efeito) {
        item.efeito(curar, ganharXp);
      }
    },
    [ouro, curar, ganharXp]
  );

  useEffect(() => {
    if (xp >= XP_PARA_NIVEL) {
      const vezes = Math.floor(xp / XP_PARA_NIVEL);
      setNivel((n) => n + vezes);
      setXp((s) => s - vezes * XP_PARA_NIVEL);
      setPontosAtributo((p) => p + vezes * 5);
      curar(pvMax);
      restaurarMana(pmMax);
      alert(`Parabéns! Você alcançou o Nível ${nivel + vezes}!`);
    }
  }, [xp, nivel, curar, pvMax, restaurarMana, pmMax]);

  useEffect(() => {
    setGrupo((prevGrupo) =>
      prevGrupo.map((m) =>
        m.isHero ? { ...m, nome, classe: classePersonagem, nivel, xp } : m
      )
    );
  }, [nome, classePersonagem, nivel, xp]);

  const rankingGrupo = useMemo(() => {
    const heroiPrincipal = {
      id: 0,
      nome,
      classe: classePersonagem,
      nivel,
      xp,
      isHero: true,
    };
    const grupoCompleto = grupo
      .filter((m) => m.id !== 0)
      .concat(heroiPrincipal);
    return grupoCompleto.sort((a, b) =>
      b.nivel !== a.nivel ? b.nivel - a.nivel : b.xp - a.xp
    );
  }, [grupo, nome, classePersonagem, nivel, xp]);

  return (
    <div className="container">
      <h1>O Grande Herói</h1>
      <p className="gold-display">💰 Ouro: {ouro} moedas</p>

      {}
      <section className="panel hero-status">
        <h2>{nome.toUpperCase()}</h2>
        <p className="hero-info">
          {raca}· {classePersonagem} · Nível {nivel}
        </p>
        <div className="input-group">
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do seu personagem"
            maxLength={20}
          />
        </div>
        <div className="input-group select-group">
          <label>Raça: </label>
          <select value={raca} onChange={(e) => setRaca(e.target.value)}>
            {["Humano 🧑", "Elfo 🧝", "Fada 🧚"].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <label>Classe: </label>
          <select
            value={classePersonagem}
            onChange={(e) => setClassePersonagem(e.target.value)}
          >
            {["Guerreiro ⚔️", "Mago 🧙", "Arqueiro 🏹"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </section>

      {}
      <section className="panel hero-bars">
        <h3>Barras de Progresso</h3>
        <BarraProgresso
          label="Vida"
          valor={pv}
          max={pvMax}
          percentual={percentualPv}
          classeBarra={`health ${classeCorPv()}`}
          acoes={
            <>
              <button onClick={() => curar(10)}>Curar PV (+10)</button>
              <button onClick={() => sofrerDano(15)}>Sofrer Dano (-15)</button>
            </>
          }
        />
        <BarraProgresso
          label="Mana"
          valor={pm}
          max={pmMax}
          percentual={percentualPm}
          classeBarra="mana"
          acoes={
            <>
              <button onClick={() => restaurarMana(10)}>
                Restaurar PM (+10)
              </button>
              <button onClick={() => usarMana(5)} disabled={pm < 5}>
                Usar Magia (-5)
              </button>
            </>
          }
        />
        <BarraProgresso
          label="XP"
          valor={xp}
          max={XP_PARA_NIVEL}
          percentual={percentualXp}
          classeBarra="xp"
          acoes={
            <>
              <button onClick={() => ganharXp(50)}>
                Derrotar Inimigo (+50 XP)
              </button>
              <button onClick={() => ganharXp(100)}>
                Completar Missão (+100 XP)
              </button>
            </>
          }
        />
      </section>

      {}
      <section className="panel attributes-panel">
        <h3>Atributos (Pontos Restantes: {pontosAtributo})</h3>
        <p className="status-effects">
          Efeitos Ativos: {efeitosStatus.join(", ")}
        </p>
        <div className="attribute-list">
          {Object.entries({
            Força: "Afeta Dano Físico",
            Resistência: "Afeta Vida Máxima",
            Inteligência: "Afeta Mana Máxima",
            Sorte: "Afeta Chance Crítica",
          }).map(([nomeAttr, desc], index) => {
            const chave = nomeAttr
              .toLowerCase()
              .replace(/ç|ã/g, (m) => ({ ç: "c", ã: "a" }[m]))
              .replace(/ê/g, "e")
              .replace(/\s/g, "");
            return (
              <ControleAtributo
                key={index}
                nome={nomeAttr}
                valor={atributos[chave]}
                descricao={desc}
                aoAumentar={() => alterarAtributo(chave, 1)}
                aoDiminuir={() => alterarAtributo(chave, -1)}
                podeAumentar={pontosAtributo > 0}
                podeDiminuir={atributos[chave] > 1}
              />
            );
          })}
        </div>
      </section>

      {}
      <section className="panel inventory-panel">
        <h3>Inventário</h3>
        <button onClick={alternarInventario}>
          {inventarioAberto ? "Fechar Inventário 🎒" : "Abrir Inventário 🎒"}
        </button>
        {inventarioAberto && (
          <ul className="inventory-list">
            {itens.map((i, idx) => (
              <li key={idx}> {i}</li>
            ))}
          </ul>
        )}
      </section>

      {}
      <section className="panel quest-panel">
        <h3>Diário de Missões (Concluídas: {contagemConcluida})</h3>
        <div className="quest-input-group">
          <input
            value={entradaMissao}
            onChange={(e) => setEntradaMissao(e.target.value)}
            placeholder="Adicionar nova missão"
          />
          <button
            onClick={() => adicionarMissao("Principal")}
            className="quest-main-btn"
          >
            Missão Principal
          </button>
          <button
            onClick={() => adicionarMissao("Secundária")}
            className="quest-side-btn"
          >
            Missão Secundária
          </button>
        </div>
        <ul className="quest-list">
          {missoes.map((m) => (
            <li key={m.id} className={m.concluida ? "quest-done" : ""}>
              <span className="quest-title">{m.titulo}</span>
              <span className="quest-category"> ({m.categoria})</span>
              <button
                onClick={() => alternarMissaoConcluida(m.id)}
                className="mark-done-btn"
              >
                {m.concluida
                  ? `✅ Concluída (Recebido: ${RECOMPENSA_OURO_MISSAO} 💰)`
                  : "⏳ Marcar"}
              </button>
            </li>
          ))}
        </ul>
      </section>

      {}
      <section className="panel shop-panel">
        <h3>Loja do Herói</h3>
        <button onClick={() => setLojaAberta(!lojaAberta)}>
          {lojaAberta ? "Fechar Loja" : "Abrir Loja"}
        </button>
        {lojaAberta && (
          <div className="shop-items-list">
            {ITENS_LOJA.map((it) => (
              <div key={it.id} className="shop-item">
                <span className="item-details">
                  {it.nome} - {it.preco} moedas
                </span>
                <button
                  onClick={() => comprarItem(it)}
                  disabled={ouro < it.preco}
                  className="buy-btn"
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {}
      <section className="panel ranking-panel">
        <h3>Ranking dos Heróis</h3>
        <TabelaGrupo grupo={rankingGrupo} aoAlterarNivel={alterarNivelMembro} />
        <small className="ranking-info"></small>
      </section>

      {}
      <section className="panel enchantment-panel">
        <h3>Gerador de Encantamentos</h3>
        <input
          value={baseFeitico}
          onChange={(e) => setBaseFeitico(e.target.value)}
          placeholder="Digite sua palavra mágica"
        />
        <button onClick={gerarEncantamento}>Gerar Encantamento</button>
        <p className="enchantment-result">
          Encantamento Gerado: {encantamento || "Nenhum"}
        </p>
      </section>
    </div>
  );
}
