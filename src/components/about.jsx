import { Briefcase, Code, User } from "lucide-react";


export default function About() {
    return (
       <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-10">
                    <h3 className="text-2xl font-semibold">Passionate web Developer</h3>
                    <p className="text-muted-foreground">
                        I'm a front end developer, I specialize in building fast,
                        responsive, and user-friendly websites. I enjoy turning ideas into well-crafted
                        digital experiences using modern tools and technologies.
                    </p>
                    <p className="text-muted-foreground">
                        I'm passionate about creating clean designs, writing efficient code, and delivering
                        solutions that not only look great but also perform flawlessly across all devices.
                        Every project I work on is an opportunity to learn, grow, and produce something impactful.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-botton">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="#contact" className="rounded-full p-2 border border-primary text-primary hover:bg-primary/10 px6 py-2 ">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <Code />
                        </div>
                        <div className="text-left">
                        <h4 className="text-lg font-semibold">Web Development</h4>
                        <p className="text-muted-foreground">
                            Building fast, responsive, and modern websites using the latest web technologies to ensure great performance and user experience.
                        </p>
                        </div>
                    </div>
                    </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                        <User />
                        </div>
                        <div className="text-left">
                        <h4 className="text-lg font-semibold">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                            Crafting clean, intuitive, and user-friendly interface designs that enhance usability and make digital experiences enjoyable.
                        </p>
                        </div>
                    </div>
                    </div>

               <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                <Briefcase />
                </div>
                <div className="text-left">
                <h4 className="text-lg font-semibold">Project Management</h4>
                <p className="text-muted-foreground">
                    Planning, organizing, and overseeing projects from start to finish, ensuring smooth execution and timely delivery.
                </p>
                </div>
            </div>
            </div>

            </div>

            </div>
            

        </div>

       </section> 
    )
}