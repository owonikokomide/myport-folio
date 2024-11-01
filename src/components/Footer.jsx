import {
	FaInstagram,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaHome,
	FaUser,
	FaPhone,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";

const Footer = () => {
	return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About</h3>
          <p>
            I’m Owonikoko Ayomide Hakeem, a dedicated software developer with a
            solid foundation in web development and growing expertise in machine
            learning. My passion for technology stems from a deep curiosity
            about the digital world, driving me to create seamless user
            experiences and continuously improving my skills.
          </p>
          <div className="footer-social">
            <a
              href="https://x.com/donaykoko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.instagram.com/haywhy10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#home">
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <FaUser /> About
              </a>
            </li>
            <li>
              <a href="#services">
                <MdMiscellaneousServices /> Services
              </a>
            </li>
            <li>
              <a href="#projects">
                <IoMdCodeWorking /> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <FaPhone /> Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Have a Question?</h3>
          <p>
            <FaMapMarkerAlt /> Lagos state, Nigeria
          </p>
          <p>
            <a href="tel:+2348155894593">
              <FaPhoneAlt />
              +234815 589 4593
            </a>
          </p>
          <p>
            <a href="mailto:owonikokoayomide@gmail.com">
              <FaEnvelope />
              owonikokoayomide@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
