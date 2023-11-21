import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("chicago");
  const myApi = "8eba87fdb61d4832854203840232011";
  const url = `http://api.weatherapi.com/v1/current.json?key=${myApi}&q=${city}&aqi=yes`;

  const getWeather = async () => {
    try {
      const response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      // console.log(data.current.condition.text);
      setWeather(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const changeCity = (newCity) => {
    setCity(newCity);
  };

  {
    if (weather !== "") {
      return (
        <div className="weatherPage">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            <button
              className="weatherButton"
              onClick={() => {
                changeCity("chicago");
              }}
            >
              Chicago
            </button>
            <button
              className="weatherButton"
              onClick={() => {
                changeCity("new york");
              }}
            >
              New York
            </button>
            <button
              className="weatherButton"
              onClick={() => {
                changeCity("miami");
              }}
            >
              Miami
            </button>
            <button
              className="weatherButton"
              onClick={() => {
                changeCity("San Francisco");
              }}
            >
              San Francisco
            </button>
          </div>
          <div
            style={{
              marginLeft: "40%",
              border: "solid 2px black",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h3>{weather.location.name}</h3>
            <h3>{weather.location.region}</h3>
            <div style={{ display: "flex", marginLeft: "30%" }}>
              <h6>{weather.current.condition.text}</h6>
              <img src={weather.current.condition.icon} />
            </div>
          </div>
        </div>
      );
    } else {
      getWeather();
    }
  }
}

export default Weather;
