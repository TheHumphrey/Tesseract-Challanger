import React from "react";

//importando o estilo do componente
import "./style.css";

function Search(props) {
  return (
    <div>
      <input
        placeholder="Pesquisar"
        type="text"
        onChange={e => props.callback(e.target.value)}
      />
    </div>
  );
}

export default Search;
