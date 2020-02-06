import React, { useState, useEffect } from "react";
import "./styles.css";

//Importando o serviço da API
import api from "./services/api";

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

  return <div className="App" />;
}
