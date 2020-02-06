import React, { useState, useEffect } from "react";

//Importando o serviço da API
import api from "./services/api";

//Importando os estilos da aplicação
import "./App.css";
import "./Main.css";
import "./styles.css";

//Importando os Componentes da aplicação
import DevItem from "./components/DevItem/index";
import SearchDev from "./components/SearchDev/index";

export default function App() {
  //Estados da aplicação
  const [devs, setDevs] = useState([]);
  const [filter, setFilter] = useState([]);

  //o bloco Abaixo esta realizando a consulta na API e armazenando os dados no estado
  useEffect(() => {
    async function loadDevs() {
      const res = await api.get("/orgs/grupotesseract/public_members");

      //a função abaixo esta adicionando a informação "mostrar" como falso em todos os objetos recebido pela API
      const resposta = res.data.map(obj => ({ ...obj, mostrar: false }));

      setDevs(resposta);
    }
    loadDevs();
  }, []);

  function changeMostrar(key) {
    const index = devs.findIndex(elemento => key === elemento.id);
    const newDev = [...devs];

    newDev[index].mostrar = !newDev[index].mostrar;

    setDevs(newDev);
  }

  //O bloco abaixo esta retornando o que sera apresentado para o usuário em tela
  return (
    <div className="App">
      <aside>
        {/*O Componente abaixo esta alterando o estado do filter de acordo com o que o usuário escreve na barra de pesquisa*/}
        <SearchDev callback={setFilter} />
      </aside>
      <main>
        <div className="List">
          <ul>
            {/* a função abaixo esta filtrando os devs de acordo com o que esta no estado "filter" */}
            {devs
              .filter(dev =>
                dev.login
                  .toLowerCase()
                  .includes(filter.toString().toLowerCase())
              )
              .map(dev => (
                <DevItem key={dev.id} dev={dev} changeMostrar={changeMostrar} />
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
