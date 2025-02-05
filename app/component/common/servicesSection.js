import { FaShieldAlt, FaChartPie, FaCode, FaAndroid, FaSearch } from "react-icons/fa";

const services = [
	{
		icon: FaShieldAlt,
		title: "Cyber Security",
		description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.",
		link: "#",
	},
	{
		icon: FaChartPie,
		title: "Data Analytics",
		description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.",
		link: "#",
	},
	{
		icon: FaCode,
		title: "Web Development",
		description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.",
		link: "#",
	},
	{
		icon: FaAndroid,
		title: "Apps Development",
		description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.",
		link: "#",
	},
	{
		icon: FaSearch,
		title: "SEO Optimization",
		description: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed.",
		link: "#",
	},
];

const ServiceSection = () => {
	return (
		<div className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				{/* Section Title */}
				<div className="text-center mb-12 max-w-2xl mx-auto">
					<h5 className="text-xl font-bold text-primary uppercase">Our Services</h5>
					<h1 className="text-4xl font-extrabold">Custom IT Solutions for Your Successful Business</h1>
				</div>

				{/* Service Cards */}
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div key={index} className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition duration-300">
							<div className="bg-primary text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 mx-auto">
								<service.icon size={28} />
							</div>
							<h4 className="text-xl font-bold mb-3">{service.title}</h4>
							<p className="text-gray-600 mb-4">{service.description}</p>
							<a href={service.link} className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
								Learn More
							</a>
						</div>
					))}

					{/* Call to Action */}
					<div className="bg-primary text-white rounded-lg p-8 text-center flex flex-col justify-center">
						<h3 className="text-2xl font-bold mb-4">Call Us For Quote</h3>
						<p className="mb-4">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod.</p>
						<h2 className="text-3xl font-extrabold">+012 345 6789</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
