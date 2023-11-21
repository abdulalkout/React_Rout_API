import React, { useState } from "react";

function Cats() {
  const [catNum, setCatNum] = useState(100);

  const changeCat = (e) => {
    if (e.target.value === "") {
      setCatNum(100);
    } else {
      const newCat = e.target.value;
      setCatNum(newCat);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "200px",
      }}
    >
      <h2>Cats Images API</h2>
      <input style={{ width: "200px" }} type="number" onChange={changeCat} />
      <img
        style={{ width: "200px", height: "200px", marginTop: "50px" }}
        src={`https://http.cat/${catNum}`}
      />
    </div>
  );
}

export default Cats;
