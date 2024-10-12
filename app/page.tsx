import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stacks from "./components/Stacks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </main>
  );
}
