import {
	FaCode,
	FaMobileAlt,
	FaPaintBrush,
	FaServer,
	FaCogs,
	FaTachometerAlt,
	FaEdit,
	FaSitemap,
	FaGlobe,
	FaBug,
	FaChartLine,
} from "react-icons/fa";

const services = [
	{
		icon: <FaCode />,
		title: "Front-End Web Development",
		description:
			"Creating responsive, mobile-friendly websites using HTML, CSS, and JavaScript.",
	},
	{
		icon: <FaMobileAlt />,
		title: "Single-Page Applications (SPAs)",
		description: "Building dynamic, fast, and interactive SPAs using React.",
	},
	{
		icon: <FaPaintBrush />,
		title: "UI/UX Design Implementation",
		description:
			"Transforming UI/UX designs into fully functioning web interfaces.",
	},
	{
		icon: <FaServer />,
		title: "API Integration",
		description:
			"Integrating third-party APIs to fetch and display dynamic data (REST APIs, GraphQL).",
	},
	{
		icon: <FaCogs />,
		title: "Custom Component Development",
		description:
			"Creating reusable and optimized React components tailored to your clients' needs.",
	},
	{
		icon: <FaTachometerAlt />,
		title: "Performance Optimization",
		description:
			"Speeding up website load times and improving performance metrics.",
	},
	{
		icon: <FaEdit />,
		title: "Code Refactoring & Optimization",
		description:
			"Enhancing and cleaning up existing codebases to improve maintainability and performance.",
	},
	{
		icon: <FaSitemap />,
		title: "State Management",
		description:
			"Handling complex state in larger applications using Redux or Context API.",
	},
	{
		icon: <FaGlobe />,
		title: "SEO-Friendly Development",
		description:
			"Developing websites optimized for search engine visibility (SEO).",
	},
	{
		icon: <FaBug />,
		title: "Testing and Debugging",
		description:
			"Writing unit tests and debugging web applications to fix issues.",
	},
	{
		icon: <FaChartLine />,
		title: "Web Animations",
		description:
			"Adding subtle animations and transitions using CSS and JavaScript.",
	},
];

const Services = () => {
	return (
		<>
			<h2>My Services</h2>
			<p className="s-text">Your Vision, Coded to Perfection</p>
			<div className="services-list">
				{services.map((service, index) => (
					<div className="service" key={index}>
						<div className="service-icon">{service.icon}</div>
						<h3>{service.title}</h3>
                        <hr />
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Services;
