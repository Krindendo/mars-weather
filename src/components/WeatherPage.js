import React from "react";
import "./css/Weather.css";
import Card from "./Card";

const WeatherPage = (data) => {
  return (
    <section className="weatherpage">
      <h2>Robot: InSight</h2>
      <h2>Service: Mars Weather</h2>
      <h2>Location: Elysium Planitia</h2>
      <h2>Sending data ...</h2>
      <div className="today">
        <div className="today__sol">
          <h3>Sol 500</h3>
          <h3>April 27</h3>
        </div>
        <div className="today__temperature">
          <h3>
            High: <span>-30</span>
          </h3>
          <h3>
            Low: <span>-130</span>
          </h3>
        </div>
      </div>
      <Card></Card>
    </section>
  );
};

export default WeatherPage;
