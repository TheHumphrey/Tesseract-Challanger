import React, { useState, useEffect } from "react";
import "./styles.css";

//Importando o serviço da API
import api from "./services/api";

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

      setDevs(res.data);
    }
    loadDevs();
  }, []);

  //O bloco abaixo esta retornando o que sera apresentado para o usuário em tela
  return (
    <div className="App">
      <aside>
        <SearchDev callback={setFilter} />
      </aside>
      <main>
        <div className="List">
          <ul>
            {devs
              .filter(dev =>
                dev.login
                  .toLowerCase()
                  .includes(filter.toString().toLowerCase())
              )
              .map(dev => (
                <DevItem key={dev.id} dev={dev} />
              ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
