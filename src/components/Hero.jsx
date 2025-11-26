
import ThemeToggle from "./themeToggle";
import StarBackground from "./Workout";
import Navbar from "./navBar";
import HeroSection from "./heroSection";
import About from "./about";
import Project from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import Skillsection from "./skills";

export default function Home() {
   
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
      
      
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Skillsection /> 
        <Project />
        <Contact />
      </main> 
      
      <Footer />
      
    </div>
  )
   
}