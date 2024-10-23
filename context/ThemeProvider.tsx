"use client"
import React, { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext();

export fucntion ThemeProvider({children}: {
    children: React.ReactNode }) {

    const [mode, setMode] = useState('');
   
   const handleThemeChange = () => {
    if(mode === 'dark') {
        setMode('light')
        document.documentElement.classList.add('light');
        document.documentElement.classList.add('dark');
    }
   }
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider >
    )
    }