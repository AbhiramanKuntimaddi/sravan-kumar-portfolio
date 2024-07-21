import React from "react";
import { CiHome, CiUser, CiDesktop, CiViewList, CiAt } from "react-icons/ci";

export const links = [
	{
		href: "#intro",
		label: "Intro",
		icon: React.createElement(CiHome),
		tooltip: "Home",
	},
	{
		href: "#aboutme",
		label: "About Me",
		icon: React.createElement(CiUser),
		tooltip: "About Me",
	},
	{
		href: "#workexperience",
		label: "Work Experience",
		icon: React.createElement(CiDesktop),
		tooltip: "Work Experience",
	},
	{
		href: "#projects",
		label: "Projects",
		icon: React.createElement(CiViewList),
		tooltip: "Projects",
	},
	{
		href: "#contactme",
		label: "Contact Me",
		icon: React.createElement(CiAt),
		tooltip: "Contact Me",
	},
];
