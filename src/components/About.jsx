import myportfolio from "../assets/myportfolio.jpg";

const About = () => {
	return (
    <>
      <div className="profile">
        <img src={myportfolio} alt="myportfolio" />
      </div>

      <div className="about-text">
        <h1>About me</h1>
        <p>
          A passionate software developer with a knack for creating intuitive
          and dynamic user interfaces. From a young age, I&rsquo;ve been
          fascinated by the intersection of technology and creativity, leading
          me to pursue a career in web development. I thrive on solving complex
          problems and continuously learning new technologies to enhance my
          skillset.
        </p>
        {/* <p>
					I am Olaniyan Damilare Ridwan, a dedicated software developer with a
					strong foundation in web development and a growing expertise in
					machine learning. My journey into technology began out of a deep
					curiosity for how things work, particularly in the digital world. Over
					the years, I have honed my skills in creating seamless and efficient
					user experiences, driven by a commitment to continuous learning and
					improvement.
				</p> */}
        <div className="details">
          <label htmlFor="name">Name:</label>
          <span>Owonikoko Ayomide Hakeem</span>
          <label htmlFor="name">Email:</label>
          <span>owonikokoayomide@gmail.com</span>
          <label htmlFor="name">phone:</label>
          <span>08155894593</span>
          <label htmlFor="location">Location:</label>
          <span>Nigeria</span>
          <label htmlFor="interests">Interests:</label>
          <span>Coding, Problem-Solving, AI and Machine Learning.</span>
          <label htmlFor="hobbies">Hobbies:</label>
          <span>Exploring new programming languages, travelling, soccer, playing chess.</span>
          <label htmlFor="learning">Learning:</label>
          <span>React Native, Svelte(svelte-kit), Next.js (using TypeScript).</span>
        </div>
      </div>
    </>
  );
};

export default About;
