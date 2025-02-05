import Image from "next/image";
import { FaCubes, FaAward, FaUsersCog, FaPhoneAlt } from "react-icons/fa";

const FeaturesSection = () => {
	const featuresLeft = [
		{ icon: FaCubes, title: "Best In Industry", description: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor." },
		{ icon: FaAward, title: "Award Winning", description: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor." },
	];

	const featuresRight = [
		{ icon: FaUsersCog, title: "Professional Staff", description: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor." },
		{ icon: FaPhoneAlt, title: "24/7 Support", description: "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor." },
	];

	return (
		<div className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h5 className="text-xl font-bold text-primary uppercase">Why Choose Us</h5>
					<h1 className="text-4xl font-extrabold">We Are Here to Grow Your Business Exponentially</h1>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Left Features */}
					<div>
						{featuresLeft.map((feature, index) => (
							<div key={index} className="mb-8">
								<div className="flex items-center mb-4">
									<div className="bg-primary text-white flex items-center justify-center w-16 h-16 rounded-full">
										<feature.icon size={28} />
									</div>
									<h4 className="ml-4 text-xl font-bold">{feature.title}</h4>
								</div>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>

					{/* Image */}
					<div className="relative h-96">
						<Image src="/img/feature.jpg" alt="Feature Image" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
					</div>

					{/* Right Features */}
					<div>
						{featuresRight.map((feature, index) => (
							<div key={index} className="mb-8">
								<div className="flex items-center mb-4">
									<div className="bg-primary text-white flex items-center justify-center w-16 h-16 rounded-full">
										<feature.icon size={28} />
									</div>
									<h4 className="ml-4 text-xl font-bold">{feature.title}</h4>
								</div>
								<p className="text-gray-600">{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
