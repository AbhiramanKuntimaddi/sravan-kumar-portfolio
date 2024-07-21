import Aboutme from "@/components/about-me";
import Contactme from "@/components/contact-me";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import WorkExperience from "@/components/work-experience";

export default function Home() {
	return (
		<>
			<Intro/>
			<Aboutme/>
			<WorkExperience/>
			<Projects/>
			<Contactme/>
		</>
	);
}
