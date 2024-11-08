// SettingsContext.js
import React, { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');
  const [fontColor, setFontColor] = useState('#000000');

  return (
    <SettingsContext.Provider value={{ theme, setTheme, fontSize, setFontSize, fontColor, setFontColor }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);