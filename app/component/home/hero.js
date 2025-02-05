const Hero = () => {
	return (
		<div className="bg-gradient-to-r from-dark to-primary text-white py-20">
			<div className="container mx-auto text-center">
				<h1 className="text-5xl font-bold mb-4">Creative & Innovative Digital Solutions</h1>
				<p className="text-xl mb-8">We provide the best IT solutions for your business growth.</p>
				<div className="space-x-4">
					<button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark">Get Started</button>
					<button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-dark">Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
