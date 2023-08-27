import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

function About() {
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
    <main className={isMobile ? "portfolio" : undefined}>
      <div className="d-flex flex-wrap justify-content-center">
        <img src="../images/jerm.enhanced.jpg" width="400px" />
        <div>
          <div className="about mt-4">
            <h2>Hi, I'm Jeremy</h2>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I'm a doer",
                1000,
                "I'm a dreamer",
                1000,
                "I'm a developer",
                2500, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.6em", display: "inline-block" }}
              repeat={Infinity}
            />

            <p>
              Embarking on the journey of learning to code has been both
              challenging and immensely rewarding. The process has taught me to
              embrace persistence and problem-solving, shaping me into a
              versatile web developer ready to take on new horizons. As I
              continue to expand my skill set and delve into innovative
              technologies, I'm excited to turn my passion into impactful
              digital experiences.
            </p>

            <a
              href="https://docs.google.com/document/d/e/2PACX-1vQbbmHrOtS80H_DSORZZFPU1B1W6T79e0INpYothnld7Sk-agg9a5aXkn9CABnPQjF3qK5owTIHtwz8/pub"
              className="btn btn-dark mb-4"
              target="_blank"
            >
              Click to view my resume
            </a>

            <h5>Let's build something together!</h5>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
