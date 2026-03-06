import AboutSection from "./sections/AboutSection.jsx";
import CertificationsSection from "./sections/CertificationsSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";

export default function Main() {
  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}