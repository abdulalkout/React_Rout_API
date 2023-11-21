import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Choose your route :</h2>

      <Link to="/weather">
        <h1>Weather</h1>
      </Link>
      <Link to="/cats">
        <h1>Cats</h1>
      </Link>
      <Link to="/jokes">
        <h1>Jokes</h1>
      </Link>
    </div>
  );
}

export default Nav;
