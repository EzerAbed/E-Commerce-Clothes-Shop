import ThemeContext from "../Context/ThemeContext"
import { useState } from "react"

const ThemeManger = ({ children }) => {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeManger