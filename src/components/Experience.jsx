import PropTypes from "prop-types";
import { FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ icon, year, position, companyName, description }) => {
	return (
		<div className="resume-item">
			<div className="icon">{icon}</div>
			<div className="edu-content">
				<div className="year">{year}</div>
				<div className="position">{position}</div>
				<div className="company-name">{companyName}</div>
				<p>{description}</p>
			</div>
		</div>
	);
};

ExperienceItem.propTypes = {
	icon: PropTypes.element.isRequired,
	year: PropTypes.string.isRequired,
	position: PropTypes.string.isRequired,
	companyName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const Experience = () => {
	return (
    <>
      <ExperienceItem
        icon={<FaBriefcase size={30} color="white" />}
        year="October 2022 - till date"
        position="- Frontend Developer"
        companyName="Gigs-Tech Solutions and Consults, Ibadan"
        description="Built a community interacting website where people meets with other
people with mutual interest. Worked with both typescript and JavaScript"
      />
      <ExperienceItem
        icon={<FaBriefcase size={30} color="white" />}
        year="June 2024 - September 2024"
        position="Frontend Developer "
        companyName="Brigde Company (Cyprus)"
        description="Desiged a platform where game accounts are sold. Game accounts are fetched from another API endpoint."
      />
      <ExperienceItem
        icon={<FaBriefcase size={30} color="white" />}
        year="September 2021 – September 2023"
        position="Software Developer"
        companyName="Adeyemi Isasda Trading Company, Sagamu"
        description="Created an inventory website for storing and recording day-to-day
transactions and store keeping."
      />

    </>
  );
};

export default Experience;
