import { teamMembers } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
	return (
		<div className="container mx-auto py-16 px-5">
			<div className="text-center max-w-2xl mx-auto mb-12">
				<h5 className="text-xl font-bold text-blue-600 uppercase">Team Members</h5>
				<h1 className="text-4xl font-extrabold mb-2">Professional Staff Ready to Help Your Business</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{teamMembers.map((member, index) => (
					<div key={index} className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
						<div className="relative group">
							<Image
								className="w-full h-60 object-cover transform group-hover:scale-105 transition-all"
								src={member.image}
								alt={member.name}
								width={500}
								height={300}
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
								<div className="space-x-4">
									{member.socials.map((social, idx) => (
										<Link key={idx} href={social.link}>
											<a className="text-white text-2xl bg-blue-600 hover:bg-blue-800 p-3 rounded-full" target="_blank" rel="noopener noreferrer">
												<i className={`fab fa-${social.icon}`}></i>
											</a>
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className="text-center py-6">
							<h4 className="text-2xl font-semibold text-blue-600">{member.name}</h4>
							<p className="uppercase text-gray-500">{member.designation}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TeamSection;
