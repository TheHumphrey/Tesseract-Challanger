import React from "react";

//Importando os estilos do componente
import "./style.css";

//Importando os componentes
import Details from "../Details/index";

function DevItem({ dev, changeMostrar }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong onClick={() => changeMostrar(dev.id)}> {dev.login}</strong>
          {dev.mostrar && <Details dev={dev.login} />}
        </div>
      </header>
    </li>
  );
}

export default DevItem;
