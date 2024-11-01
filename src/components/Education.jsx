import { IoSchool } from "react-icons/io5";
import PropTypes from "prop-types";

const EducationItem = ({ icon, year, degree, schoolName, description }) => {
	return (
		<div className="resume-item">
			<div className="icon">{icon}</div>
			<div className="edu-content">
				<div className="year">{year}</div>
				<div className="degree">{degree}</div>
				<div className="school-name">{schoolName}</div>
				<p>{description}</p>
			</div>
		</div>
	);
};
EducationItem.propTypes = {
	icon: PropTypes.element.isRequired,
	year: PropTypes.string.isRequired,
	degree: PropTypes.string.isRequired,
	schoolName: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

const Education = () => {
	return (
    <>
      <EducationItem
        icon={<IoSchool size={30} color="white" />}
        year="2017 - 2020"
        degree="Higher National Diploma in Banking and Finance"
        schoolName="Kwara State Polytechnic, Ilorin "
        description="I attain my Higher National Diploma in Banking and Finance with a Lower Credit grade from 2017 to 2020."
      />
      <EducationItem
        icon={<IoSchool size={30} color="white" />}
        year="2012 - 2015"
        degree="National Diploma in Banking and Finance "
        schoolName="Kwara State Polytechnic, Ilorin"
        description="Secured my National Diploma in Banking and Finance with Lower Credit from 2012 to 2015"
      />
    </>
  );
};

export default Education;
