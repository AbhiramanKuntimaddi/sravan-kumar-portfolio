// pages/index.tsx
import Aboutme from "@/components/about-me";
import Contactme from "@/components/contact-me";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";
import Sidebar from "@/components/sidebar";
import { links } from "@/lib/data";

export default function Home() {
	return (
		<>
			<Sidebar links={links} />
			<section id="intro">
				<Intro />
			</section>
			<section id="aboutme">
				<Aboutme />
			</section>
			<section id="workexperience">
				<WorkExperience />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contactme">
				<Contactme />
			</section>
		</>
	);
}
