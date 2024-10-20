import React, { createContext, useContext, useState } from 'react';

const ValorContext = createContext<any>(null);

export const ValorProvider = ({ children }: { children: React.ReactNode }) => {
  const [valor, setValor] = useState<string | null>(null);

  return (
    <ValorContext.Provider value={{ valor, setValor }}>
      {children}
    </ValorContext.Provider>
  );
};

export const useValor = () => useContext(ValorContext);