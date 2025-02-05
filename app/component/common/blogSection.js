import Link from "next/link";
import Image from "next/image";
import React from "react";

const BlogSection = ({ blogData }) => {
	return (
		<div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
			<div className="theme-container py-5">
				<div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
					<h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
					<h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
				</div>

				<div className="row g-5">
					{blogData.map((blog, index) => (
						<div className="col-lg-4 wow slideInUp" key={index} data-wow-delay={`${0.3 + index * 0.3}s`}>
							<div className="blog-item bg-light rounded overflow-hidden">
								<div className="blog-img position-relative overflow-hidden">
									<Image className="img-fluid" src={blog.image} alt={blog.title} width={500} height={300} />
									<Link href={blog.categoryLink} passHref>
										<a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4">{blog.category}</a>
									</Link>
								</div>
								<div className="p-4">
									<div className="d-flex mb-3">
										<small className="me-3">
											<i className="far fa-user text-primary me-2"></i>
											{blog.author}
										</small>
										<small>
											<i className="far fa-calendar-alt text-primary me-2"></i>
											{blog.date}
										</small>
									</div>
									<h4 className="mb-3">{blog.title}</h4>
									<p>{blog.description}</p>
									<Link href={blog.readMoreLink} passHref>
										<a className="text-uppercase">
											Read More <i className="bi bi-arrow-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogSection;
