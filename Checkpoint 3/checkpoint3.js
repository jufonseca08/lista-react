import { useState, useRef, useEffect, useMemo } from "react";
import "./styles.css";

const MUSICAS = [
  {
    id: 1,
    titulo: "Crazy in Love",
    artista: "Beyoncé",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    titulo: "We found love",
    artista: "Rihanna",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    titulo: "Ariana Grande",
    artista: "Into You",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const formatar = (s) =>
  isNaN(s)
    ? "00:00"
    : `${Math.floor(s / 60)
        .toString()
        .padStart(2, 0)}:${Math.floor(s % 60)
        .toString()
        .padStart(2, 0)}`;

export default function SpotifyClone() {
  const audio = useRef();

  const [busca, setBusca] = useState("");
  const [atual, setAtual] = useState(null);
  const [play, setPlay] = useState(false);
  const [tempo, setTempo] = useState(0);
  const [duracao, setDuracao] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [favoritos, setFavoritos] = useState([]);

  const [playlists, setPlaylists] = useState([]);
  const [novaPlaylist, setNovaPlaylist] = useState("");
  const [playlistSelecionada, setPlaylistSelecionada] = useState(null);

  const lista = useMemo(
    () =>
      MUSICAS.filter(
        (m) =>
          m.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          m.artista.toLowerCase().includes(busca.toLowerCase())
      ),
    [busca]
  );

  useEffect(() => {
    if (!audio.current) return;

    audio.current.volume = volume;
    audio.current.ontimeupdate = () => setTempo(audio.current.currentTime);
    audio.current.onloadedmetadata = () => setDuracao(audio.current.duration);
  }, [volume, atual]);

  const tocar = (m) => {
    if (atual?.id === m.id) {
      play ? audio.current.pause() : audio.current.play();
      setPlay(!play);
    } else {
      setAtual(m);
      setPlay(true);
      setTimeout(() => audio.current.play(), 100);
    }
  };

  const favorito = (id) =>
    setFavoritos((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id]
    );

  const criarPlaylist = () => {
    if (!novaPlaylist.trim()) return;
    setPlaylists((p) => [...p, { nome: novaPlaylist, musicas: [] }]);
    setNovaPlaylist("");
  };

  const adicionarNaPlaylist = (playlistNome, musica) => {
    setPlaylists((p) =>
      p.map((pl) =>
        pl.nome === playlistNome && !pl.musicas.find((m) => m.id === musica.id)
          ? { ...pl, musicas: [...pl.musicas, musica] }
          : pl
      )
    );
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header>
        <h1>Spotify 🎧</h1>
        <input
          placeholder="Buscar música..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </header>

      {/* CRIAR PLAYLIST */}
      <section className="nova-playlist">
        <input
          placeholder="Nome da playlist"
          value={novaPlaylist}
          onChange={(e) => setNovaPlaylist(e.target.value)}
        />
        <button onClick={criarPlaylist}>Criar</button>
      </section>

      <div className="container">
        {/* LISTA DE MÚSICAS */}
        <section className="lista">
          <h2>Músicas</h2>

          {lista.map((m) => (
            <div
              key={m.id}
              className={atual?.id === m.id ? "musica ativa" : "musica"}
            >
              <div onClick={() => tocar(m)}>
                <strong>{m.titulo}</strong>
                <small>{m.artista}</small>
              </div>

              <div>
                <button onClick={() => favorito(m.id)}>
                  {favoritos.includes(m.id) ? "❤️" : "🤍"}
                </button>

                {playlists.length > 0 && (
                  <select
                    onChange={(e) => adicionarNaPlaylist(e.target.value, m)}
                  >
                    <option>+ Playlist</option>
                    {playlists.map((pl, index) => (
                      <option key={index} value={pl.nome}>
                        {pl.nome}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* PLAYLISTS */}
        <section className="playlists">
          <h2>Minhas Playlists</h2>

          {playlists.map((pl, i) => (
            <div
              key={i}
              className="playlist"
              onClick={() => setPlaylistSelecionada(pl)}
            >
              🎵 {pl.nome} ({pl.musicas.length})
            </div>
          ))}

          {playlistSelecionada && (
            <>
              <h3>{playlistSelecionada.nome}</h3>

              {playlistSelecionada.musicas.map((m) => (
                <div key={m.id} className="musica" onClick={() => tocar(m)}>
                  <strong>{m.titulo}</strong>
                  <small>{m.artista}</small>
                </div>
              ))}
            </>
          )}
        </section>
      </div>

      {/* PLAYER */}
      <footer>
        <div>
          <h3>{atual ? atual.titulo : "Nenhuma música"}</h3>
          <p>{atual?.artista || ""}</p>
        </div>

        <button onClick={() => tocar(atual)} disabled={!atual}>
          {play ? "⏸" : "▶️"}
        </button>

        <div className="progresso">
          <span>{formatar(tempo)}</span>
          <input
            type="range"
            min="0"
            max={duracao || 0}
            value={tempo}
            onChange={(e) => (audio.current.currentTime = e.target.value)}
          />
          <span>{formatar(duracao)}</span>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />

        <audio ref={audio} src={atual?.src} />
      </footer>
    </div>
  );
}
