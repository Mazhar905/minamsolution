import React from "react";

const Heading = ({
	title,
	color = "text-dark",
	size = "text-3xl",
	center = true,
	bold = false, // changed to boolean for better clarity
    small = false, // changed to boolean for better clarity
}) => {
	return (
		<div className={`section-title relative ${small && "section-title-sm"} ${color} ${center ? "text-center" : ""} pb-1 mb-3`}>
			<h2 className={`${size} ${bold ? "font-bold" : ""} mb-2`}>{title}</h2>
		</div>
	);
};

export default Heading;
