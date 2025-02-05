import { socialIcons, contactInfo } from "@/app/lib/data";
import Link from "next/link";

const Topbar = () => {
	return (
		<div className="bg-secondary text-light py-2 hidden lg:block">
			<div className="theme-container mx-auto flex justify-between items-center">
				{/* Contact Info */}
				<div className="flex space-x-8 text-sm">
					<div className="flex items-center space-x-2">
						<contactInfo.address.icon />
						<span>{contactInfo.address.text}</span>
					</div>
					<div className="flex items-center space-x-2">
						<contactInfo.phone.icon />
						<span>{contactInfo.phone.text}</span>
					</div>
					<div className="flex items-center space-x-2">
						<contactInfo.email.icon />
						<span>{contactInfo.email.text}</span>
					</div>
				</div>

				{/* Social Icons */}
				<ul className="flex space-x-4">
					{Object.entries(socialIcons).map(([key, social], index) => (
						<li key={index}>
							<Link
								key={index}
								href={social.link}
								target="_blank"
								className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-dark transition"
							>
								<social.icon />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Topbar;
