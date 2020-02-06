import React, { useState, useEffect } from "react";

import api from "../../services/api";

function Details({ dev }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function infoDevs(dev) {
      const res = await api.get(`/users/${dev}`);

      setInfo(res.data);
    }
    infoDevs(dev);
  }, []);

  return (
    <div>
      <strong>{dev}</strong>
    </div>
  );
}
