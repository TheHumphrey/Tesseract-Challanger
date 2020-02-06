import React, { useState, useEffect } from "react";

import api from "../../services/api";

function Details({ devId }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function infoDevs(name) {
      const res = await api.get(`/users/${name}`);

      setInfo(res.data);
    }
    infoDevs(devId);
  }, []);

  return (
    <div>
      <strong>{info.name}</strong>
      <strong>{info.public_repos}</strong>
      <strong>{info.followers}</strong>
      <strong>{info.updated_at}</strong>
    </div>
  );
}
