"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Intro = () => {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src={"/profile.jpg"}
							alt="profile"
							width={100}
							height={100}
							quality={95}
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋🏻
					</motion.span>
				</div>
			</div>
		</section>
	);
};

export default Intro;
