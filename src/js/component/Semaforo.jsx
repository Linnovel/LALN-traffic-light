import React from "react";

const Semaforo = ({ colors, active, handler }) => {
  return (
    <>
      <div
        className={`lights ${colors} ${colors === active ? "active" : " "}`}
        onClick={() => {
          handler(colors);
        }}
      ></div>
    </>
  );
};

export default Semaforo;
