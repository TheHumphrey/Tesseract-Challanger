import React from "react";

import "./style.css";

function DevItem({ dev }) {
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong> {dev.login}</strong>
        </div>
      </header>
    </li>
  );
}

export default DevItem;
