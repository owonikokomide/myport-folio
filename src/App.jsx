import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import About from "./components/About";
import { Resume } from "./components/Resume";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Loader from "./components/Loader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}
	return (
		<>
			<Header />
			<section id="home" className="home">
				<Home />
			</section>
			<section id="about" className="about">
				<About />
			</section>
			<section id="resume">
				<Resume />
			</section>
			<section id="services" className="services">
				<Services />
			</section>
			<section id="projects" className="project">
				<Project />
			</section>
			<section id="contact" className="contact-section">
				<Contact />
			</section>
			<Footer />
		</>
	);
}

export default App;
