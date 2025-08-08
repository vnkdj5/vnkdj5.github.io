import { useEffect } from "react";
import { RESUME } from "@/content";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ExperienceSection } from "@/sections/Experience";
import { ProjectsSection } from "@/sections/Projects";
import { SkillsSection } from "@/sections/Skills";
import { EducationSection } from "@/sections/Education";
import { AchievementsSection } from "@/sections/Achievements";
import { PlaygroundSection } from "@/playground";

const Index = () => {
  // Persist and restore last section
  useEffect(() => {
    const ids = ["hero","about","experience","projects","skills","education","achievements","playground","contact"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((e) => e.isIntersecting);
      if (visible?.target?.id) localStorage.setItem("vk-last-section", visible.target.id);
    }, { threshold: 0.5 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    const saved = localStorage.getItem("vk-last-section");
    if (saved) setTimeout(() => document.getElementById(saved)?.scrollIntoView({ behavior: "smooth" }), 50);
    return () => observer.disconnect();
  }, []);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME.name,
    jobTitle: RESUME.title,
    url: "https://vnkdj5.github.io/",
    sameAs: [RESUME.links.github, RESUME.links.linkedin],
  };

  return (
    <div>
      <HeroSection name={RESUME.name} title={RESUME.title} tagline={RESUME.tagline} />
      <AboutSection name={RESUME.name} title={RESUME.title} tagline={RESUME.tagline} location={RESUME.location} />
      <ExperienceSection experience={RESUME.work_experience} />
      <ProjectsSection projects={RESUME.projects} />
      <SkillsSection skills={RESUME.skills} />
      <EducationSection education={RESUME.education} certifications={RESUME.certifications} />
      <AchievementsSection achievements={RESUME.achievements} interests={RESUME.interests} />
      <PlaygroundSection />
      <section id="contact" className="container mx-auto py-16">
        <header className="mb-4">
          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        </header>
        <p className="text-muted-foreground">Email: <a className="underline story-link" href={`mailto:${RESUME.email}`}>{RESUME.email}</a></p>
        <p className="text-muted-foreground mt-1">LinkedIn: <a className="underline" href={RESUME.links.linkedin} target="_blank" rel="noreferrer">{RESUME.links.linkedin}</a></p>
        <p className="text-muted-foreground mt-1">GitHub: <a className="underline" href={RESUME.links.github} target="_blank" rel="noreferrer">{RESUME.links.github}</a></p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </div>
  );
};

export default Index;
