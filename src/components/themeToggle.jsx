import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    useEffect (() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        }

    }, [])

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return <button onClick={toggleTheme}
        className="right-5 top-2 fixed cosmic-button rounded-full "
        >
        {" "} 
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300" /> 
            
        ) : (
           <Moon className="h-6 w-6 text-blue-300" />
        )} 
      </button>

}
{/* <Sun className="h-6 w-6 text-yellow-300" /> */}
 {/* <Moon className="h-6 w-6 text-yellow-300" /> */}

{/* max:-sm:hidden transition-colors
 */}