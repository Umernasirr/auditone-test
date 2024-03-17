import React, { createContext, useContext, useState } from "react";

const IdContext = createContext({
  id: "",
  setId: (value: React.SetStateAction<string>) => {},
});

export const IdProvider = ({ children }) => {
  const [id, setId] = useState("");

  const value = { id, setId };

  return <IdContext.Provider value={value}>{children}</IdContext.Provider>;
};

export const useId = () => useContext(IdContext);
