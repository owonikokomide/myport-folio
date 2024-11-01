import TypingEffect from "react-typing-effect";

export const Home = () => {
	return (
		<>
			<h4>hey! i am</h4>
			<h1>Owonikoko Ayomide (Hay-Why)</h1>
			<h2>
				I&rsquo;m a{" "}
				<span>
					<TypingEffect
						text={["Software Developer"]}
						speed={100}
						eraseDelay={1000}
						typingDelay={500}
						eraseSpeed={50}
					/>
				</span>
			</h2>
		</>
	);
};
