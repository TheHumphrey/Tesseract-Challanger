import React from "react";

function Search(props) {
  return (
    <div>
      <input type="text" onChange={e => props.callback(e.target.value)} />
    </div>
  );
}

export default Search;
