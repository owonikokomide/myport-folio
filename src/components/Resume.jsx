import { useState, useEffect } from "react";
import Resumes from "./Resumes";
import Experience from "./Experience";
import Skills from "../Skills";


export const Resume = () => {
 const [activeSection, setActiveSection] = useState("");

 useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll(".resume-content section");
			let currentSection = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (
					window.scrollY >= sectionTop - 60 &&
					window.scrollY < sectionTop + sectionHeight - 60
				) {
					currentSection = section.getAttribute("id");
				}
			});

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call on mount to set initial active section

		return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const scrollToSection = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
 };

 return (
		<div className="resume">
			<div className="resume-nav">
				<a
					href="#education"
					className={activeSection === "education" ? "active" : ""}
					onClick={() => scrollToSection("education")}
				>
					Resume
				</a>
				<a
					href="#experience"
					className={activeSection === "experience" ? "active" : ""}
					onClick={() => scrollToSection("experience")}
				>
					Experience
				</a>
				<a
					href="#skill"
					className={activeSection === "skill" ? "active" : ""}
					onClick={() => scrollToSection("skill")}
				>
					Skill
				</a>
			</div>
			<div className="resume-content">
				<section id="education">
					<h2>Resume</h2>
					<Resumes/>
				</section>
				<section id="experience">
					<h2>Experience</h2>
					<Experience/>
				</section>
				<section id="skill">
					<h2>Skill</h2>
					<Skills/>
				</section>
			</div>
		</div>
 );
};
