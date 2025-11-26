import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { href } from "react-router";
import ThemeToggle from "./themeToggle";

const navItems = [
    {name:"Home", href: "#home"},
    {name:"About", href: "#about"},
    {name:"Skills", href: "#skills"},
    {name:"Projects", href: "#projects"},
    {name:"Contact", href: "#contact"},
]

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setisMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={"w-full duration-300 z-40 fixed  transition-all" + (isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")} >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow p-2 text-foreground">YILTONGTECH</span> Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a href={item.href} key={key} className="text-foreground hover:text-primary transition-colors duration-300">
                            {item.name} 
                        </a>
                    ))}

                </div>

                <ThemeToggle />

                <button onClick={() => setisMenuOpen((prev) => !prev)} > {" "}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* <div className={"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col item-center justify-center transition-all" + (isMenuOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0")}> */}
                    <div className="hidden md:flex space-x-8">
                        {isMenuOpen && <>{navItems.map((item, key) => (
                            <a href={item.href} key={key} className="text-foreground hover:text-primary transition-colors duration-300">
                                {item.name} 
                            </a>
                        ))}
                        </>}

                    </div>

                {/* </div> */}

            </div>
        </div>
    )
}