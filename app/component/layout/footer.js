import { contactInfo, footerData, socialIcons } from "@/app/lib/data";
import Link from "next/link"; // Import Link from next/link
import React from "react";
import Heading from "../common/heading";

const Footer = () => {
	return (
		<>
			<div className="bg-secondary">
				<div className="theme-container mx-auto">
					<div className="flex gap-x-12">
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-[-75px] bg-primary">
							<div className="w-full px-4 mb-8 md:mb-[-75px]">
								<div className="text-center p-6 rounded-lg">
									<h1 className="text-white text-2xl font-bold">
										<i className="fas fa-user-tie me-2"></i>Startup
									</h1>
									<p className="text-white mt-4">{footerData.about.text}</p>
									<form>
										<div className="flex mt-4">
											<input type="email" className="form-control p-3 border-white" placeholder={footerData.about.subscribeText} />
											<button className="btn bg-dark text-white ml-2">Sign Up</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="flex flex-wrap w-full md:1/2 lg:w-2/3 p-8 ">
							<div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
								<Heading title="Get In Touch" center={false} color="text-light" small />
								<p className="flex gap-3 items-center text-white mb-2">
									<contactInfo.address.icon />
									{contactInfo.address.text}
								</p>
								<p className="flex gap-3 items-center text-white mb-2">
									<contactInfo.email.icon />
									{contactInfo.email.text}
								</p>
								<p className="flex gap-3 items-center text-white mb-2">
									<contactInfo.phone.icon />
									{contactInfo.phone.text}
								</p>
								{/* Social Icons */}
								<ul className="flex mt-4 space-x-4">
									{Object.entries(socialIcons).map(([key, social], index) => (
										<li key={index}>
											<Link
												key={index}
												href={social.link}
												target="_blank"
												className="w-8 h-8 flex items-center justify-center bg-primary text-color hover:bg-white hover:text-dark transition"
											>
												<social.icon />
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
								<Heading title="Quick Links" center={false} color="text-light" small />
								<ul>
									{footerData.quickLinks.map((link, index) => (
										<li key={index} className="mb-2">
											<Link href={link.href} passHref className="text-white hover:text-primary flex items-center">
												<i className="bi bi-arrow-right text-primary mr-2"></i>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>

							<div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
								<Heading title="Popular Links" center={false} color="text-light" small />
								<ul>
									{footerData.popularLinks.map((link, index) => (
										<li key={index} className="mb-2">
											<Link href={link.href} passHref className="text-white hover:text-primary flex items-center">
												<i className="bi bi-arrow-right text-primary mr-2"></i>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[#061429] text-white py-3">
				<div className="theme-container text-center">
					<p>
						&copy;{" "}
						<Link href="#" passHref className="border-b text-white">
							Your Site Name
						</Link>
						. All Rights Reserved. Designed by{" "}
						<Link href="https://htmlcodex.com" passHref className="border-b text-white">
							Mazhar Iqbal
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
