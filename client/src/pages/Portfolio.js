import Project from "../components/Project";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Novel Nook",
    type: "dev",
    technologies: "MERN Stack, Tailwind CSS",
    image: "../../images/novelnook.png",
    description:
      "A small group project built on the MERN stack that leverages the Google Books API. My role was team lead, scrum master, and I focused on backend dev, React dev, and UX dev.",
    liveUrl: "https://novel-nook-33a87b58d266.herokuapp.com/",
    githubUrl: "https://github.com/jeremytboyer/novel-nook-app",
  },
  {
    title: "Rype",
    type: "dev",
    technologies: "Sequelize(MySQL ORM), Express, HandleBars, Tailwind CSS",
    image: "../../images/rype.png",
    description:
      "A small group project utilizing the Spoonacular API. My responsibilities were focused on app functionality, backend and frontend JavaScript",
    liveUrl: "https://vast-waters-05451-3dbd8c32d7c8.herokuapp.com/",
    githubUrl: "https://github.com/jeremytboyer/rype-project",
  },
  {
    title: "Event Finder",
    type: "dev",
    technologies: "jQuery, localStorage, Bulma CSS",
    image: "../../images/eventfinder.png",
    description:
      "An early small group project leveraging MapBox and TicketMaster APIs. My role encompassed comprehensive JavaScript development for the app's functionality.",
    liveUrl: "https://dancohen6.github.io/event_finder_project/",
    githubUrl: "https://github.com/dancohen6/event_finder_project",
  },
  {
    title: "JATE",
    type: "dev",
    technologies: "JavaScript, Webpack, indexedDB, localStorage",
    image: "../../images/jate.png",
    description:
      '"Just Another Text Editor" PWA embodies simplicity. Installable and offline-friendly, it offers seamless text editing, independent of internet connectivity.',
    liveUrl: "https://fierce-ravine-25733-fb3788a86339.herokuapp.com/",
    githubUrl: "https://github.com/jeremytboyer/note-taker-pwa",
  },
  {
    title: "Note Taker App",
    type: "dev",
    technologies: "JavaScript, Express.js",
    image: "../../images/note-taker-app.png",
    description:
      "A lightweight note taking app built on top of Express.js where users can save, update, and access saved notes.",
    liveUrl: "https://jerms-note-taker-app-c559a189b04b.herokuapp.com/",
    githubUrl: "https://github.com/jeremytboyer/note-taker-app",
  },
  {
    title: "Weather App",
    type: "dev",
    technologies: "JavaScript, localStorage",
    image: "../../images/weather-app.png",
    description:
      "One of my earliest projects built on the openWeatherMap API. Provides current and 5 day forecast and access to previous searches. ",
    liveUrl: "https://jeremytboyer.github.io/weather-app/",
    githubUrl: "https://github.com/jeremytboyer/weather-app",
  },
];
function Portfolio() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on screen width
    const updateScreenWidth = () => {
      setIsMobile(window.innerWidth <= 846); // Adjust the width as needed
    };

    // Initial call to set initial state
    updateScreenWidth();

    // Event listener to update state when screen width changes
    window.addEventListener("resize", updateScreenWidth);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <main className={isMobile ? "mobilePortfolio" : "portfolio"}>
      <div className="container">
        <div className="row">
          {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
