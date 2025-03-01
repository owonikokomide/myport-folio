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
        "A dedicated software developer who transitioned into the tech world with a passion for building intuitive and dynamic user interfaces.
         My journey began in a different field, but my fascination with technology and problem-solving led me to pivot into web development.
          I thrive on tackling complex challenges and continuously expanding my expertise by learning new technologies.
        </p>
       
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
