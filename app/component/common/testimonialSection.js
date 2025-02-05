import React from "react";

const TestimonialSection = () => {
	return (
		<div className="container mx-auto py-16">
			<div className="text-center mb-12">
				<h5 className="text-primary text-uppercase font-semibold">Testimonial</h5>
				<h1 className="text-3xl font-extrabold">What Our Clients Say About Our Digital Services</h1>
			</div>
			<div className="owl-carousel testimonial-carousel">
				{["testimonial-1", "testimonial-2", "testimonial-3", "testimonial-4"].map((testimonial, index) => (
					<div key={index} className="bg-light my-4 p-6 rounded-lg shadow-lg">
						<div className="flex items-center border-b pb-4 mb-4">
							<img className="rounded-full w-16 h-16" src={`/img/${testimonial}.jpg`} alt={`Client ${index + 1}`} />
							<div className="ml-4">
								<h4 className="text-primary font-semibold">Client Name</h4>
								<small className="text-xs text-gray-500">Profession</small>
							</div>
						</div>
						<p className="text-gray-700">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonialSection;
