"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0 },
};

const Skills = () => {
	return (
		<motion.section
			id="skills"
			className="mb-28 max-w-[53rem] text-center scroll-mt-28 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>My Skills</SectionHeading>

			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => {
					return (
						<motion.li
							key={index}
							className="bg-white border border-black/[0.1] rounded-xl py-3 px-5"
							variants={fadeInAnimationVariants}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
							transition={{
								delay: 0.05 * index,
							}}
						>
							{skill}
						</motion.li>
					);
				})}
			</ul>
		</motion.section>
	);
};

export default Skills;
