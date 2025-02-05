import { FaCheck, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const pricingPlans = [
	{
		title: "Basic Plan",
		description: "For Small Size Business",
		price: 49,
		features: [
			{ feature: "HTML5 & CSS3", included: true },
			{ feature: "Bootstrap v5", included: true },
			{ feature: "Responsive Layout", included: false },
			{ feature: "Cross-browser Support", included: false },
		],
	},
	{
		title: "Standard Plan",
		description: "For Medium Size Business",
		price: 99,
		features: [
			{ feature: "HTML5 & CSS3", included: true },
			{ feature: "Bootstrap v5", included: true },
			{ feature: "Responsive Layout", included: true },
			{ feature: "Cross-browser Support", included: false },
		],
	},
	{
		title: "Advanced Plan",
		description: "For Large Size Business",
		price: 149,
		features: [
			{ feature: "HTML5 & CSS3", included: true },
			{ feature: "Bootstrap v5", included: true },
			{ feature: "Responsive Layout", included: true },
			{ feature: "Cross-browser Support", included: true },
		],
	},
];

export default function PricingPlans() {
	return (
		<div className="container py-12">
			<div className="text-center mb-10 max-w-xl mx-auto">
				<h5 className="text-primary text-lg font-bold uppercase">Pricing Plans</h5>
				<h1 className="text-3xl font-extrabold">We are Offering Competitive Prices for Our Clients</h1>
			</div>
			<div className="grid md:grid-cols-3 gap-6">
				{pricingPlans.map((plan, index) => (
					<div key={index} className={`bg-${index === 1 ? "white shadow-lg" : "gray-100"} rounded-lg p-6`}>
						<div className="border-b pb-4 mb-4">
							<h4 className="text-primary text-2xl font-bold">{plan.title}</h4>
							<small className="text-gray-600 uppercase">{plan.description}</small>
						</div>
						<div className="text-center mb-8">
							<h1 className="text-5xl font-bold">
								<small className="text-xl align-top">$</small>
								{plan.price}
								<small className="text-lg align-bottom">/ Month</small>
							</h1>
						</div>
						<div className="space-y-3">
							{plan.features.map((feature, idx) => (
								<div key={idx} className="flex justify-between">
									<span>{feature.feature}</span>
									{feature.included ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
								</div>
							))}
						</div>
						<div className="text-center mt-6">
							<Button className="w-full bg-primary hover:bg-primary-dark">Order Now</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
