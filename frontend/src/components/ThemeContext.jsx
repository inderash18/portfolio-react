import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
    { name: 'Passion Red', primary: '#ff3b3b', hover: '#ff1a1a', glow: 'rgba(255, 59, 59, 0.4)', dim: 'rgba(255, 59, 59, 0.1)' },
    { name: 'Crystal Blue', primary: '#3b82f6', hover: '#2563eb', glow: 'rgba(59, 130, 246, 0.4)', dim: 'rgba(59, 130, 246, 0.1)' },
    { name: 'Emerald Forest', primary: '#10b981', hover: '#059669', glow: 'rgba(16, 185, 129, 0.4)', dim: 'rgba(16, 185, 129, 0.1)' },
    { name: 'Cyber Purple', primary: '#a855f7', hover: '#9333ea', glow: 'rgba(168, 85, 247, 0.4)', dim: 'rgba(168, 85, 247, 0.1)' },
    { name: 'Golden Sun', primary: '#f59e0b', hover: '#d97706', glow: 'rgba(245, 158, 11, 0.4)', dim: 'rgba(245, 158, 11, 0.1)' },
];

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('site-theme');
        return saved ? JSON.parse(saved) : themes[0];
    });

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--primary', currentTheme.primary);
        root.style.setProperty('--primary-hover', currentTheme.hover);
        root.style.setProperty('--primary-glow', currentTheme.glow);
        root.style.setProperty('--primary-dim', currentTheme.dim);
        localStorage.setItem('site-theme', JSON.stringify(currentTheme));
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
