import React, { useState } from "react";

// Componente Padre
export const PropDrilling = () => {
  const [childData, setChildData] = useState("");
  // Función de devolución de llamada para recibir datos del componente hijo
  const handleChildData = (data) => {
    setChildData(data);
  };
  return (
    <div>
      <h2>Componente Padre</h2>
      <p>Dato del Componente Hijo: {childData}</p>
      <ChildComponent onData={handleChildData} />
    </div>
  );
};

// Componente Hijo
export const ChildComponent = ({ onData }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Invocar la función de devolución de llamada para pasar datos al componente padre
    onData(inputValue);
  };

  return (
    <div>
      <h3>Componente Hijo</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Enviar Dato al Padre</button>
    </div>
  );
};
