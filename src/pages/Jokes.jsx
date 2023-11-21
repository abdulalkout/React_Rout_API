import React, { useEffect, useState } from "react";

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [newJokes, setNewJokes] = useState(0);
  const url = "https://official-joke-api.appspot.com/random_ten";
  const getJokes = async (tenValue) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJokes(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getJokes();
  }, [newJokes]);

  const changeJokes = () => {
    setNewJokes(newJokes + 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Jokes</h1>
      {jokes.map((joke) => {
        return (
          <div style={{ marginLeft: "30px" }}>
            <h5>{joke.setup}</h5>
            <h6>{joke.punchline}</h6>
          </div>
        );
      })}
      <button
        style={{ marginLeft: "100px" }}
        className="weatherButton"
        onClick={changeJokes}
      >
        New Jokes
      </button>
    </div>
  );
}

export default Jokes;
