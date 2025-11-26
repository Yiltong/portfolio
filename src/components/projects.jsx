import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "../utils/datas"

// const projects = [
//     {
//        id: 1,
//        title: "Flower",
//        des: "Flower website",
//        image: "/projects/site.PNG",
//        tags: ["React", "Tailwind", "Django"],
//        demoUrl: "#",
//        githubUrl: "#",      
//     },
//     {
//        id: 2,
//        title: "Flowers",
//        des: "Flower website",
//        image: "/projects/cssp.PNG",
//        tags: ["React", "Tailwind", "Django"],
//        demoUrl: "#",
//        githubUrl: "#",      
//     },
//     {
//        id: 3,
//        title: "Certificate",
//        des: "Simplilearn Certificate",
//        image: "/projects/Certificate.jpg",
//        tags: ["React", "Tailwind", "Node.js"],
//        demoUrl: "#",
//        githubUrl: "#",      
//     },
// ]

export default function Project() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cent"> Featured Project</h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my recent projects
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap">
                    {projects.map((project, key) => {
                        return (
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full transition-transform duration-500 group-hover:scale-10"/>
                            </div>

                            <div className="p-6">
                                {project.tags.map((tag) => {
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary">{tag}</span>
                                })}
                            </div>
                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.des}</p>
                            <div className="flex justify-beteen items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>

                                </div>

                            </div>
                        </div>
                        )
                        
                    })}
                </div>
                <div className="text-center mt-12">
                    <a href="" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}