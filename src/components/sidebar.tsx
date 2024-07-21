"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip } from "@nextui-org/react";

interface LinkType {
	href: string;
	icon: React.ReactNode;
	label: String;
}

interface SidebarProps {
	links: LinkType[];
}

export default function Sidebar({ links }: SidebarProps) {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const sections = links.map(
				(link) => document.querySelector(link.href) as HTMLElement | null
			);
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			let currentSection = null;
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					currentSection = links[i].href;
				}
			}

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [links]);

	return (
		<motion.div
			initial={{ x: -300 }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 60 }}>
			<nav className="flex flex-col space-y-6 fixed top-1/2 left-3 transform -translate-y-1/2 w-16 rounded-3xl z-50 items-center py-4 backdrop-blur-3xl bg-accent shadow-2xl">
				{links.map(({ href, icon, label }) => (
					<Tooltip
						showArrow
						placement="right"
						content={label}
						key={href}
						offset={10}
                        closeDelay={50}
						classNames={{
							content: [
								"py-2 px-4 shadow-3xl",
								"text-text bg-black/80 rounded-3xl backdrop-blur-3xl",
							],
						}}>
						<Link key={href} href={href}>
							<div
								className={`flex items-center justify-center w-12 h-12 rounded-full text-xl transition-colors duration-300 ${
									activeSection === href
										? "scale-150 text-secondary"
										: "scale-90 hover:text-black text-white/80"
								}`}>
								{icon}
							</div>
						</Link>
					</Tooltip>
				))}
			</nav>
		</motion.div>
	);
}
