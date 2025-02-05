import Image from "next/image";
import { FaPhoneAlt, FaCheck } from "react-icons/fa";

const AboutSection = () => {
	return (
		<div className="bg-gray-50 py-16">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					{/* Left Content Section */}
					<div>
						<div className="mb-8">
							<h5 className="text-xl font-bold text-primary uppercase">About Us</h5>
							<h1 className="text-4xl font-extrabold mb-4">The Best IT Solution With 10 Years of Experience</h1>
							<p className="text-gray-700">
								Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
								stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.
							</p>
						</div>

						{/* Features */}
						<div className="grid md:grid-cols-2 gap-4 mb-8">
							<div>
								<h5 className="flex items-center mb-3">
									<FaCheck className="text-primary mr-2" />
									Award Winning
								</h5>
								<h5 className="flex items-center mb-3">
									<FaCheck className="text-primary mr-2" />
									Professional Staff
								</h5>
							</div>
							<div>
								<h5 className="flex items-center mb-3">
									<FaCheck className="text-primary mr-2" />
									24/7 Support
								</h5>
								<h5 className="flex items-center mb-3">
									<FaCheck className="text-primary mr-2" />
									Fair Prices
								</h5>
							</div>
						</div>

						{/* Contact Info */}
						<div className="flex items-center mb-6">
							<div className="bg-primary text-white flex items-center justify-center w-16 h-16 rounded-full">
								<FaPhoneAlt size={24} />
							</div>
							<div className="ml-4">
								<h5 className="text-lg font-semibold">Call to ask any question</h5>
								<h4 className="text-primary text-2xl font-bold">+012 345 6789</h4>
							</div>
						</div>

						{/* Button */}
						<a href="/quote" className="btn btn-primary py-3 px-6 bg-primary text-white rounded-md shadow-lg hover:bg-primary-dark transition">
							Request A Quote
						</a>
					</div>

					{/* Right Image Section */}
					<div className="relative h-96">
						<Image src="/img/about.jpg" alt="About Us" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
