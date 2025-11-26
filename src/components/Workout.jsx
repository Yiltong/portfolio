import { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState([])
  const [medeors, setMedeors] = useState([])

  useEffect (() => {
    generateStars();
    generateMedeors();
  }, [])

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = []

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      })
    }
    setStars(newStars)
  }
  
  const generateMedeors = () => {
    const numberOfMedeors = 4

    const newMedeors = []

    for (let i = 0; i < numberOfMedeors; i++) {
      newMedeors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 +3,
      })
    }
    setMedeors(newMedeors)
  }
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => {
        <div key={star.id} className="star animate-pulse-subtle" style={{
          width: star.size + "px",
          height: star.size + "px",
          left: star.x + "%",
          top: star.y + "%",
          opacity: star.opacity,
          animationDuration: star.animationDuration + "s",
        }}/>
      })}

      {medeors.map((medeor) => {
        <div key={medeor.id} className="medeor animate-medeor" style={{
          width: medeor.size * 50 + "px",
          height: medeor.size * 3 + "px",
          left: medeor.x + "%",
          top: medeor.y + "%",
          animationDelay: medeor.delay,
          animationDuration: medeor.animationDuration + "s",
        }}/>
      })}
    </div>
  )
}
