import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [avatar, setAvatar] = useState({
    cabelo: "",
    olhos: "",
    acessorios: "",
  });


  const handleCabeloChange = (e) => {
    setAvatar({ ...avatar, cabelo: e.target.value });
  };


  const handeOlhosChange = (e) => {
    setAvatar({ ...avatar, olhos: e.target.value });
  };


  const handleAcessoriosChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAvatar({ ...avatar, acessorios: [...avatar.acessorios, value] });
    } else {
      setAvatar({
        ...avatar,
        acessorios: avatar.acessorios.filter((item) => item !== value),
      });
    }
  };


  return (
    <div>
      <h2>Avatar</h2>
      <form>
        <div>
          <label>Escolha a cor do cabelo:</label>
          <select
            name="cabelo"
            value={avatar.cabelo}
            onChange={handleCabeloChange}
          >
            <option value="Preto">Preto</option>
            <option value="Castanho">Castanho</option>
            <option value="Loiro">Loiro</option>
            <option value="Ruivo">Ruivo</option>
          </select>
        </div>
        <div>
          <fieldset>
            <label>Cor dos olhos: </label>
            <p>
              <input
                type="radio"
                name="olhos"
                value="Azul"
                onChange={handeOlhosChange}
              />
              <label>Azul</label>
            </p>
            <p>
              <input
                type="radio"
                name="olhos"
                value="Verde"
                onChange={handeOlhosChange}
              />
              <label>Verde</label>
            </p>
            <input
              type="radio"
              name="olhos"
              value="Preto"
              onChange={handeOlhosChange}
            />
            <label>Preto</label>
            <p>
              <input
                type="radio"
                name="olhos"
                value="Âmbar"
                onChange={handeOlhosChange}
              />
              <label>Âmbar</label>
            </p>
          </fieldset>
        </div>
        <div>
          <label>Escolha seu(s) acessório(s):</label>
          <p>
            <label>Colar</label>
            <input
              type="checkbox"
              name="acessorios"
              value={"Colar"}
              onChange={handleAcessoriosChange}
            />
          </p>
          <p>
            <label>Chapéu</label>
            <input
              type="checkbox"
              name="acessorios"
              value={"Chapéu"}
              onChange={handleAcessoriosChange}
            />
          </p>
          <p>
            <label>Labubu</label>
            <input
              type="checkbox"
              name="acessorios"
              value={"Labubu"}
              onChange={handleAcessoriosChange}
            />
          </p>
          <p>
            <label>Brinco de Beyblade</label>
            <input
              type="checkbox"
              name="acessorios"
              value={"Brinco de Beyblade"}
              onChange={handleAcessoriosChange}
            />
          </p>
        </div>
      </form>


      <h2>A cor do seu cabelo é: {avatar.cabelo}</h2>
      <h2>A cor dos seus olhos é: {avatar.olhos}</h2>
      <h2>
        Seus acessórios são:{" "}
        {avatar.acessorios.length > 0
          ? avatar.acessorios.map((element, index) =>
              index == 0
                ? avatar.acessorios[0]
                : ", " + avatar.acessorios[index]
            )
          : "Nenhum"}
      </h2>
    </div>
  );
}


export default App;


