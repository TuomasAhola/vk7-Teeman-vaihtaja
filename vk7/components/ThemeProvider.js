import React, { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeProvider({children}) {
    const [isDarkMode, setIsDarkmode] = useState(false)
    
    const toggleDarkMode = () => {
        setIsDarkmode(prevDarkMode => !prevDarkMode)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}