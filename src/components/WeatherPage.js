import React from "react";
import "./css/Weather.css";
import Card from "./Card";

const WeatherPage = (data) => {
  return (
    <section className="weatherpage">
      <div className="weatherpage__box">
        <h2 className="weatherpage__box__h2">Robot: InSight</h2>
        <h2 className="weatherpage__box__h2">
          Mission: Daily weather measurement
        </h2>
        <h2 className="weatherpage__box__h2">
          Location: Elysium Planitia, Mars
        </h2>
        <h2 className="weatherpage__box__h2">Sending data ...</h2>
        <h2 className="weatherpage__box__h2 none">Data received</h2>
        <div className="today">
          <div className="today__sol">
            <h3 className="today__sol__sol">Sol 500</h3>
            <h3 className="today__sol__day">April 27</h3>
          </div>
          <div className="today__temperature">
            <h3 className="today__temperature__h3">
              High: -30{" "}
              <span className="C active" onClick="">
                C
              </span>
              <span className="slash"> | </span>
              <span onClick="">F</span>
            </h3>
            <h3 className="today__temperature__h3">
              Low: -130{" "}
              <span className="C active" onClick="">
                C
              </span>
              <span className="slash"> | </span>
              <span onClick="">F</span>
            </h3>
          </div>
        </div>
        <div className="weatherpage__box__grid">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherPage;
