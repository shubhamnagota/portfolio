import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	// {
	// 	name: "Projects",
	// 	hash: "#projects",
	// },
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Motorola Solutions",
		location: "Bangalore, India",
		description: "Joined as a fresher",
		icon: React.createElement(CgWorkAlt),
		date: "2013 - 2017",
	},
	{
		title: "Graduation",
		organization: "Mahakal Institute of Technology",
		location: "Ujjain, India",
		description: "Completed Graduation",
		icon: React.createElement(LuGraduationCap),
		date: "2017 - 2018",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;
