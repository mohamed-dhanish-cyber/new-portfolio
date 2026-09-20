import { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [mode, setMode] = useState('web'); // 'web' or 'video'

  const toggleMode = () => {
    setMode((prev) => (prev === 'web' ? 'video' : 'web'));
  };

  return (
    <PortfolioContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioMode = () => useContext(PortfolioContext);
