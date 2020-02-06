import axios from "axios";

//Bloco abaixo esta Definindo a base de consulta da API
const api = axios.create({
  baseURL: "https://api.github.com"
});

export default api;
