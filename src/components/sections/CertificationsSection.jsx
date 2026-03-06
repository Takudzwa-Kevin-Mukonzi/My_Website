import { useState } from "react";

const certifications = [
  {
    image: "/images/Certifications/MSU_IS_Certificate.jpg",
    alt: "MSU_IS_Certificate",
    title: "MSU_IS_Certificate (MSU)"
  },
  {
    image: "/images/Certifications/Responsive_Web_Design.png",
    alt: "Responsive Web Design Certificate",
    title: "Responsive Web Design (FreeCodeCamp)"
  },
  {
    image:
      "/images/Certifications/JavaScript_Algorithms_and_Data_Structures.png",
    alt: "JavaScript Algorithms & Data Structures Certificate",
    title: "JavaScript Algorithms & Data Structures (FreeCodeCamp)"
  },
  {
    image:
      "/images/Certifications/UML and Object-Oriented Design Foundations.jpg",
    alt: "UML and Object-Oriented Design Foundations Certificate",
    title: "UML and Object-Oriented Design Foundations (Udemy)"
  }
];

export default function CertificationsSection() {
  const [certIndex, setCertIndex] = useState(0);
  const totalCerts = certifications.length;

  const goPrevCert = () =>
    setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
  const goNextCert = () => setCertIndex((prev) => (prev + 1) % totalCerts);

  return (
    <section id="certifications" className="mt-10">
      <div className="mx-auto w-[90%] max-w-[900px] px-5">
        <h5 className="text-center text-light">My Education</h5>
        <h2 className="mb-8 text-center text-primary">Certifications</h2>

        <div className="relative overflow-hidden rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <div
            className="flex transition-transform duration-[420ms] ease-[cubic-bezier(0.22,0.9,0.3,1)]"
            style={{ transform: `translateX(-${certIndex * 100}%)` }}
          >
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="min-w-full rounded-[2rem] border border-transparent bg-bg-variant p-5 text-center transition hover:border-primary-variant hover:bg-transparent"
              >
                <div className="overflow-hidden rounded-xl">
                  <img src={cert.image} alt={cert.alt} />
                </div>
                <h3 className="my-5 text-lg">{cert.title}</h3>
              </article>
            ))}
          </div>

          <button
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[rgba(0,0,0,0.35)] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white max-[600px]:h-9 max-[600px]:w-9"
            aria-label="Previous certification"
            onClick={goPrevCert}
            type="button"
          >
            &#x25C0;
          </button>
          <button
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[rgba(0,0,0,0.35)] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white max-[600px]:h-9 max-[600px]:w-9"
            aria-label="Next certification"
            onClick={goNextCert}
            type="button"
          >
            &#x25B6;
          </button>

          <div
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
            role="tablist"
            aria-label="Certification indicators"
          >
            {certifications.map((cert, index) => (
              <button
                key={cert.title}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === certIndex ? "bg-white scale-110" : "bg-white/60"
                }`}
                aria-current={index === certIndex}
                aria-label={`Go to certification ${index + 1}`}
                onClick={() => setCertIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}