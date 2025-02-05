import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export const socialIcons = {
	twitter: {
		icon: FaTwitter,
		link: "/",
	},
	facebook: {
		icon: FaFacebookF,
		link: "/",
	},
	linkedin: {
		icon: FaLinkedinIn,
		link: "/",
	},
	instagram: {
		icon: FaInstagram,
		link: "/",
	},
	youtube: {
		icon: FaYoutube,
		link: "/",
	},
};

export const contactInfo = {
	address: {
		icon: FaMapMarkerAlt,
		text: "123 Street, New York, USA",
		link: "https://www.google.com/maps/place/123+Street,+New+York,+USA", // Link to address on Google Maps
	},
	phone: {
		icon: FaPhoneAlt,
		text: "+012 345 6789",
		link: "tel:+0123456789", // Telephone link
	},
	email: {
		icon: FaEnvelopeOpen,
		text: "info@example.com",
		link: "mailto:info@example.com", // Mailto link
	},
};

export const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Team Members", href: "/team" },
	{ label: "Testimonial", href: "/testimonial" },
	{ label: "Contact", href: "/contact" },
];

export const footerData = {
	about: {
		text: "Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.",
		email: "info@example.com",
		subscribeText: "Your Email",
	},
	quickLinks: [
		{ label: "Home", href: "#" },
		{ label: "About Us", href: "#" },
		{ label: "Our Services", href: "#" },
		{ label: "Meet The Team", href: "#" },
		{ label: "Latest Blog", href: "#" },
		{ label: "Contact Us", href: "#" },
	],
	popularLinks: [
		{ label: "Home", href: "#" },
		{ label: "About Us", href: "#" },
		{ label: "Our Services", href: "#" },
		{ label: "Meet The Team", href: "#" },
		{ label: "Latest Blog", href: "#" },
		{ label: "Contact Us", href: "#" },
	],
};
export const services = [
	{
		icon: "🔒",
		title: "Cyber Security",
		description: "Protect your business from cyber threats with our advanced security solutions.",
	},
	{
		icon: "📊",
		title: "Data Analytics",
		description: "Unlock insights from your data with our powerful analytics tools.",
	},
	{
		icon: "💻",
		title: "Web Development",
		description: "Build modern, responsive websites tailored to your business needs.",
	},
];

// Array of vendor logos
export const vendorLogos = [
	"/vendor-1.jpg",
	"/vendor-2.jpg",
	"/vendor-3.jpg",
	"/vendor-4.jpg",
	"/vendor-5.jpg",
	"/vendor-6.jpg",
	"/vendor-7.jpg",
	"/vendor-8.jpg",
	"/vendor-9.jpg",
];

export const blogData = [
	{
		title: "How to build a website",
		description: "Dolor et eos labore stet justo sed est sed dolor amet.",
		image: "/img/blog-1.jpg",
		author: "John Doe",
		date: "01 Jan, 2045",
		category: "Web Design",
		categoryLink: "/web-design",
		readMoreLink: "/blogs/how-to-build-a-website",
	},
	{
		title: "The Future of Tech",
		description: "Exploring innovations shaping our world today.",
		image: "/img/blog-2.jpg",
		author: "Jane Smith",
		date: "15 Feb, 2045",
		category: "Technology",
		categoryLink: "/technology",
		readMoreLink: "/blogs/future-of-tech",
	},
	{
		title: "Understanding UX Design",
		description: "Creating user-friendly interfaces with purpose.",
		image: "/img/blog-3.jpg",
		author: "Mike Lee",
		date: "10 Mar, 2045",
		category: "UX Design",
		categoryLink: "/ux-design",
		readMoreLink: "/blogs/understanding-ux-design",
	},
];

export const teamMembers = [
	{
		name: "John Doe",
		designation: "CEO & Founder",
		image: "/img/team-1.jpg",
		socials: [
			{ icon: "twitter", link: "https://twitter.com" },
			{ icon: "facebook-f", link: "https://facebook.com" },
			{ icon: "instagram", link: "https://instagram.com" },
			{ icon: "linkedin-in", link: "https://linkedin.com" },
		],
	},
	{
		name: "Jane Smith",
		designation: "Marketing Head",
		image: "/img/team-2.jpg",
		socials: [
			{ icon: "twitter", link: "https://twitter.com" },
			{ icon: "facebook-f", link: "https://facebook.com" },
			{ icon: "instagram", link: "https://instagram.com" },
			{ icon: "linkedin-in", link: "https://linkedin.com" },
		],
	},
	{
		name: "Michael Lee",
		designation: "Product Manager",
		image: "/img/team-3.jpg",
		socials: [
			{ icon: "twitter", link: "https://twitter.com" },
			{ icon: "facebook-f", link: "https://facebook.com" },
			{ icon: "instagram", link: "https://instagram.com" },
			{ icon: "linkedin-in", link: "https://linkedin.com" },
		],
	},
];
