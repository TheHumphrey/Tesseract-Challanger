import React, { useState, useEffect } from "react";
import "./styles.css";

//Importando o serviço da API
import api from "./services/api";

//Importando os Componentes da aplicação
import DevItem from "./components/DevItem/index";

export default function App() {
  //Estados da aplicação
  const [devs, setDevs] = useState([]);

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
      <aside />
      <main>
        <div className="List">
          <ul>
            {devs.map(dev => (
              <DevItem key={dev.id} dev={dev} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
