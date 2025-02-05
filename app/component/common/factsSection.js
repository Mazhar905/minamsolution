import { FaUsers, FaCheck, FaAward } from "react-icons/fa";

const FactsSection = () => {
	const facts = [
		{
			title: "Happy Clients",
			count: "12345",
			icon: <FaUsers className="text-primary text-3xl" />,
			bgColor: "bg-primary text-white",
		},
		{
			title: "Projects Done",
			count: "12345",
			icon: <FaCheck className="text-white text-3xl" />,
			bgColor: "bg-gray-100 text-primary",
		},
		{
			title: "Win Awards",
			count: "12345",
			icon: <FaAward className="text-primary text-3xl" />,
			bgColor: "bg-primary text-white",
		},
	];

	return (
		<div className="container mx-auto py-16">
			<div className="grid md:grid-cols-3 gap-8">
				{facts.map((fact, index) => (
					<div key={index} className={`shadow-lg rounded-lg flex items-center justify-center p-8 h-40 ${fact.bgColor}`}>
						<div className="flex items-center justify-center bg-white w-16 h-16 rounded-full">{fact.icon}</div>
						<div className="ml-6">
							<h5 className="text-lg font-semibold">{fact.title}</h5>
							<h1 className="text-4xl font-bold">{fact.count}</h1>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FactsSection;
