import React, { useState } from "react";

// Componente Padre
export const PropDrilling = () => {
  const [childData, setChildData] = useState(""); // This state variable belongs to the parent but we will use it in our children to change the value of the state

  // Función de devolución de llamada para recibir datos del componente hijo
  const handleChildData = (data: string) => {
    setChildData(data);
  };
  return (
    <div>
      <h2>Componente Padre</h2>
      <p>Dato del Componente Hijo: {childData}</p>
      {/* Send a callbackfuntion via props to child. This fc will change into our children and update the state of our parent component */}
      <ChildComponent onData={handleChildData} />{" "}
    </div>
  );
};

type TProps = {
  onData: (data: string) => void;
};
// Componente Hijo
export const ChildComponent = ({ onData }: TProps) => {
  // TProps says me that onData is a function
  const [inputValue, setInputValue] = useState(""); // This state variable belongs to the children

  // This function will be called when the user types in the input. It fc belongs to the children
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    // Invoke the callback function passed via props. It will change the state of our parent component variable
    console.log("changing state of your father component variable", inputValue);
    onData(inputValue);
  };

  return (
    <div>
      <h3>Componente Hijo</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Send data to father component</button>
    </div>
  );
};
