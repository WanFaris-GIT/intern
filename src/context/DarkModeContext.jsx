import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const DarkModeContext = createContext();

let initialDarkMode = false;
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('darkMode');
    initialDarkMode = saved !== null ? JSON.parse(saved) : false;
  } catch {
    initialDarkMode = false;
  }
}

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  const value = useMemo(() => ({
    darkMode,
    toggleDarkMode
  }), [darkMode, toggleDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
}

