import React, { createContext, useContext } from "react";

// Definir el contexto con TypeScript
interface MyContextData {
  // Definir la forma de los datos del contexto
  message: string;
  author: string;
  age: number;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

// Componente Padre
export const ProviderAvoidPropDrilling: React.FC = () => {
  const data: MyContextData = {
    message: "Hello from context!", // Datos que quieres pasar
    author: "Dan Chanivet",
    age: 35,
  };

  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

// Componente Hijo
const ChildComponent: React.FC = () => {
  const contextData = useContext(MyContext); // We access to contextdata
  if (!contextData) {
    return <div>Error: No context data available!</div>;
  }

  return (
    <div>
      <h2>Componente Hijo Trabajando con Context </h2>
      <p>nombre author: {contextData.author}</p>
      <p>edad: {contextData.age}</p>
      <p>message: {contextData.message}</p>
    </div>
  );
};
