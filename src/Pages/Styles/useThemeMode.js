import { useState, useEffect } from 'react';

export const useThemeMode = () => {
  const [colorTheme, setColorTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setColorTheme(mode);
  };

  const toggleTheme = () => {
    colorTheme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setColorTheme(localTheme) : setMode('dark');
  }, []);

  return [colorTheme, toggleTheme];
};
