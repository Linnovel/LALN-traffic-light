import React, { useState } from "react";
import Semaforo from "./Semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [active, setActive] = useState("red");

  const newColors = ["red", "yellow", "green"];

  const btnChanger = () => {
    let currentColorIndex = newColors.indexOf(active);
    let nextColorIndex = currentColorIndex + 1;
    setActive(newColors[nextColorIndex]);
  };

  const lightChange = (colors) => {
    setActive(colors);
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="bg-dark  m-auto contenedor rounded d-flex flex-column align-items-center 
		justify-content-between py-5 "
        >
          {newColors.map((light, index) => {
            return (
              <Semaforo
                colors={light}
                active={active}
                handler={lightChange}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div
        className="bg-dark  m-auto contenedor2  d-flex flex-column align-items-center 
		justify-content-between "
      ></div>
      <button className="btn btn-danger fixed-bottom" onClick={btnChanger}>
        CLICKEAME AQUI!
      </button>
    </>
  );
};

export default Home;
