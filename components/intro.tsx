"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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

			<motion.p
				className="text-2xl mb-10 mt-4 font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span>
					<b>Hello, I&apos;m Shubham. </b>
					I&apos;m a <b>full-stack developer </b>
					with <b>8 years</b> of experience. I enjoy building <i>sites & apps. </i>
					My focus is <u>React (Next.js).</u>
				</span>
			</motion.p>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="bg-gray-900 text-white px-7 py-3 items-center flex gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all group"
				>
					Contact me here
					<BsArrowRight className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition" />
				</Link>

				<a
					href="/shubham_nagota_cv.pdf"
					download={true}
					className="bg-white flex items-center rounded-full py-3 px-7 gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer border border-black/10"
				>
					Download CV <HiDownload className="opacity-70 group-hover:opacity-100 group-hover:scale-110" />
				</a>

				<a
					className="bg-white flex items-center rounded-full p-4 gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
					href="https://www.linkedin.com/in/shubhamnagota"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className="bg-white flex items-center rounded-full p-4 gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
					href="https://github.com/shubhamnagota"
					target="_blank"
				>
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
};

export default Intro;
