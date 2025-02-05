"use client";
import { vendorLogos } from "@/app/lib/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesconsole.log("Vendor component rendered");
import "swiper/css";
import "swiper/swiper-bundle.css"; // Ensure correct path to CSS file
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Heading from "./heading";

const Vendor = () => {
	return (
		<div className="py-12">
			<div className="theme-container mx-auto px-4">
				<Heading title="Our Partners" bold/>
				<Swiper
					spaceBetween={10}
					slidesPerView={8} // Adjust the number of slides per view
					loop={true}
					autoplay={{ delay: 2500, disableOnInteraction: false }}
					breakpoints={{
						640: {
							slidesPerView: 3, // On smaller screens, display 1 logo at a time
						},
						768: {
							slidesPerView: 6, // On medium screens, display 2 logos at a time
						},
						1024: {
							slidesPerView: 8, // On larger screens, display 3 logos at a time
						},
					}}
					modules={[Autoplay, Navigation]}
					className="mySwiper cursor-pointer"
				>
					{vendorLogos.map((logo, index) => (
						<SwiperSlide key={index}>
							<div className="w-32 h-32 flex items-center justify-center rounded-lg">
								<Image src={logo} alt={`Vendor ${index + 1}`} width={300} height={150} className="w-32 h-32 object-contain" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Vendor;
