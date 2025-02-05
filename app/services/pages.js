import { services } from "@/app/lib/data";

const Services = () => {
	return (
		<div className="bg-light py-20">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Our Services</h2>
				<p className="text-xl mb-12">We offer a wide range of IT solutions to help your business succeed.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div key={index} className="bg-white p-8 rounded-lg shadow-lg">
							<div className="text-4xl mb-4">{service.icon}</div>
							<h3 className="text-2xl font-bold mb-4">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
