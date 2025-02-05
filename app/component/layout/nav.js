import Link from "next/link";
import Topbar from "./topbar";
import { navItems } from "@/app/lib/data";

const Nav = () => {
	return (
		<>
			<Topbar />
			<div className="relative w-full">
				<nav className="theme-container py-4 flex items-center justify-between">
					<Link href="/" className="text-xl font-bold flex items-center space-x-2">
						<i className="fas fa-user-tie"></i>
						<h1 className="text-3xl">Startup</h1>
					</Link>
					<div className="md:hidden">
						<button className="focus:outline-none">
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div className="hidden md:flex space-x-6">
						{navItems.map((item, index) =>
							item.children ? (
								<div className="relative group" key={index}>
									<button className="hover:text-blue-500 focus:outline-none">{item.label}</button>
									<div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
										{item.children.map((child, idx) => (
											<Link key={idx} href={child.href} className="block px-4 py-2 hover:bg-gray-100">
												{child.label}
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link key={index} href={item.href} className="hover:text-blue-500">
									{item.label}
								</Link>
							)
						)}
					</div>
					<div className="space-x-4 hidden md:flex">
						<button className="text-blue-500">
							<i className="fas fa-search"></i>
						</button>
						<Link href="https://htmlcodex.com/startup-company-website-template" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
							Get Quote
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Nav;
