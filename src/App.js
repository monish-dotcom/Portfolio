import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function App() {
  // Section refs
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll handlers for Navbar
  const scrollToAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToSkill = () =>
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProject = () =>
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });

  // Scroll handler for About section's button
  const handleScrollToContact = scrollToContact;

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="#" type="video/mp4" />
        {/* Optionally add a webm source for better browser support */}
        <source
          src="https://static.videezy.com/system/resources/previews/000/034/485/original/4k-abstract-3d-complex-matrix-like-binary-digits-falling-bg-loop.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Overlay for readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-5 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          onAboutClick={scrollToAbout}
          onSkillClick={scrollToSkill}
          onProjectClick={scrollToProject}
          onContactClick={scrollToContact}
        />
        <div ref={aboutRef}>
          <About onGetInTouch={handleScrollToContact} />
        </div>
        <div ref={skillRef}>
          <Skill />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <Contact ref={contactRef} />
        <Footer
          onAboutClick={scrollToAbout}
          onProjectClick={scrollToProject}
          onContactClick={scrollToContact}
        />
      </div>
    </div>
  );
}
