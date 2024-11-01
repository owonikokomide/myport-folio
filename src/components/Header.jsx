import { useState, useRef, useEffect } from "react";

export const Header = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState(null);
	const navRef = useRef(null);
	const menuIconRef = useRef(null);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	const handleClickOutside = (event) => {
		if (
			navRef.current &&
			!navRef.current.contains(event.target) &&
			!menuIconRef.current.contains(event.target)
		) {
			setMobileMenuOpen(false);
		}
	};

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	useEffect(() => {
		if (navRef.current) {
			navRef.current.classList.toggle("open", isMobileMenuOpen);
		}
	}, [isMobileMenuOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			let current = "";

			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				if (pageYOffset >= sectionTop - 60) {
					current = section.getAttribute("id");
				}
			});

			setActiveLink(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	return (
		<header>
			<div className="myname">
				<div>
					<span>O</span>wonikoko
					<div className="circle"></div>
				</div>
				<div
					className="mobile-menu-icon"
					onClick={toggleMobileMenu}
					ref={menuIconRef}
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
			</div>

			<nav ref={navRef}>
				<a
					href="#home"
					className={activeLink === "home" ? "active" : ""}
					onClick={() => scrollToSection("home")}
				>
					Home
				</a>
				<a
					href="#about"
					className={activeLink === "about" ? "active" : ""}
					onClick={() => scrollToSection("about")}
				>
					About
				</a>
				<a
					href="#resume"
					className={activeLink === "resume" ? "active" : ""}
					onClick={() => scrollToSection("resume")}
				>
					Resume
				</a>
				<a
					href="#services"
					className={activeLink === "services" ? "active" : ""}
					onClick={() => scrollToSection("services")}
				>
					Services
				</a>
				<a
					href="#projects"
					className={activeLink === "projects" ? "active" : ""}
					onClick={() => scrollToSection("projects")}
				>
					Projects
				</a>
				<a
					href="#contact"
					className={activeLink === "contact" ? "active" : ""}
					onClick={() => scrollToSection("contact")}
				>
					Contact
				</a>
			</nav>
		</header>
	);
};
