import ThemeContext from "../Context/ThemeContext"
import { useState, useEffect } from "react"

const ThemeManger = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ||"light")

    //To prevent the theme to change on refresh
    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeManger