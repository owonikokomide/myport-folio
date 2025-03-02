import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCard = ({ skill, percentage, lastWeek, lastMonth }) => {
	return (
		<div className="skillcard">
			<h3 className="skillName">{skill}</h3>
			<CircularProgressbar
				value={percentage}
				text={`${percentage}%`}
				strokeWidth={3}
				styles={buildStyles({
					pathColor: `#e55039`,
					textColor: "black",
					trailColor: "#d6d6d6",
				})}
			/>

			{/* <div className="stats">
				<div>
					<p>{lastWeek}%</p>
					<p className="statLabel">Last week</p>
				</div>
				<div>
					<p>{lastMonth}%</p>
					<p className="statLabel">Last month</p>
				</div>
			</div> */}
		</div>
	);
};

SkillCard.propTypes = {
	skill: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
	lastWeek: PropTypes.number.isRequired,
	lastMonth: PropTypes.number.isRequired,
};

const Skills = () => {
	const skillscard = [
		{ skill: "HTML", percentage: 90, lastWeek: 28, lastMonth: 60 },
		{ skill: "CSS", percentage: 80, lastWeek: 25, lastMonth: 55 },
		{ skill: "JavaScript", percentage: 85, lastWeek: 30, lastMonth: 50 },
	];
const skills = [
	{ name: "HTML", level: 90 },
	{ name: "CSS/SCSS", level: 80 },
	{ name: "JavaScript", level: 85 }, 
	{ name: "Bootstrap", level: 50 },
	{ name: "PHP", level: 65 }, 
	{ name: "React Framework", level: 80 }, 
	{ name: "API Integration", level: 80 }, 
	{ name: "MySQL Database", level: 85 },
];
	return (
		<>
			<div className="dashboard">
				{skillscard.map((skillObj, index) => (
					<SkillCard
						key={index}
						skill={skillObj.skill}
						percentage={skillObj.percentage}
						lastWeek={skillObj.lastWeek}
						lastMonth={skillObj.lastMonth}
					/>
				))}
			</div>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<div key={index} className="skill">
						<div className="skill-info">
							<span>{skill.name}</span>
							<span>{skill.level}%</span>
						</div>
						<div className="progress-bar">
							<div
								className="progress"
								style={{ width: `${skill.level}%` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Skills;
