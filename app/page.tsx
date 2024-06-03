import Hero from "./components/Hero";
import About from "./components/About";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stacks />
      <Projects />
    </main>
  );
}
