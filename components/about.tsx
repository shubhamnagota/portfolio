"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

const About = () => {
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About Me</SectionHeading>

			<p className="mb-3">
				I am a MERN stack developer with 5+ years of experience currently acting as a key team member in designing the
				post-sales user experience at BYJUs. My most notable achievement was designing and implementing a microservices
				architecture for a monolithic application, which led to a remarkable 70% reduction in application downtime and a
				40% increase in performance.
			</p>
			<p>
				Further, I have created a real-time event processing system using Kafka, which significantly reduced processing
				time by 60% and enabled the application to handle 3x more concurrent orders
			</p>
		</motion.section>
	);
};

export default About;
