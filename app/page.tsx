import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <div className="border-y border-border bg-secondary/15">
          <div className="page-container grid items-start lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <Education />
            <Certifications />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
