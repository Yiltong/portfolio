import { useState } from "react"; 
import { skills } from "../utils/datas";


// const skill = [
//     {name: "Html", level: 95, category: "frontend"},
//     {name: "javaScript", level: 95, category: "frontend"},
//     {name: "react", level: 90, category: "frontend"},
//     {name: "typeScript", level: 95, category: "frontend"},
//     {name: "Tailwind", level: 90, category: "frontend"},
//     {name: "Next.js", level: 95, category: "frontend"},

//     {name: "Node.js", level: 90, category: "backend"},
//     {name: "Express", level: 95, category: "backend"},
//     {name: "Mongo", level: 90, category: "backend"},
//     {name: "PosgreSQL", level: 95, category: "backend"},
//     {name: "GraphQL", level: 90, category: "backend"},

//     {name: "Git/GitHub", level: 90, category: "tools"},
//     {name: "Docker", level: 95, category: "tools"},
//     {name: "Figma", level: 90, category: "tools"},
//     {name: "Vs", level: 95, category: "tools"},
    
// ];



export default function Skillsection() {

    const category = ["all", "frontend", "backend", "all"]

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkill = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                My <span className="text-primary">Skills</span> 
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {category.map((cat, key) => {
                    return(
                        <button key={key}
                            onClick={() => setActiveCategory(cat)}
                            className={"py-2 px-5 rounded-full card-hover bg-primary transition-colors duration-300 capitalize" + (activeCategory ? "bg-secondary/70 text-primary-foreground" : " text-foreground bg-primary hover:bd-secondary")}>
                                {cat}
                        </button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkill.map((skill, key) => {
                    return (
                        <div key={key} className="bg-card rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full original-left animate-[grow_1.5s_ease-out]"
                                style={{width: skill.level + "%"}} />
                        </div>
                        <div>
                            <span>
                                {skill.level}%
                            </span>
                        </div>
                    </div>
                    )
                })}
               
            </div>
        </div>
      </section>  
    )

}

