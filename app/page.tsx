import Intro from "@/components/intro";
import About from "@/components/about";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center pt-28 px-4">
			<Intro />
      <SectionDivider />
      <About />
      <Skills />
		</main>
	);
}
