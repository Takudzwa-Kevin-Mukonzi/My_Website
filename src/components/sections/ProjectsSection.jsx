const containerClass = "mx-auto w-[90%] max-w-[1100px]";
const sectionSpacing = "mt-12 max-[1024px]:mt-8";

const projects = [
  {
    title: "Encore Business Solutions (WordPress Imitation Website)",
    image: "/images/EBS_Website_imitation.png",
    alt: "Laragigs Web App",
    github: "",
    live: "https://takudzwakevinmkonzi.wordpress.com",
    liveLabel: "Link"
  },
  {
    title: "Laragigs (Web App)",
    image: "/images/laragigs.png",
    alt: "Laragigs Web App",
    github: "https://github",
    live: "https://github",
    liveLabel: "Live Demo"
  },
  {
    title: "Notes (Web App)",
    image: "/images/notes.png",
    alt: "Notes Web App",
    github: "https://github",
    live: "https://github",
    liveLabel: "Live Demo"
  },
  {
    title: "Smart Zimsec (Web App)",
    image: "/images/smart_zimsec.png",
    alt: "Smart Zimsec Web App",
    github: "https://github",
    live: "https://github",
    liveLabel: "Live Demo"
  },
  {
    title: "FrontEnd Challenge Product list with cart",
    image: "/images/Product_list_with_cart.png",
    alt: "Product_list_with_cart",
    github:
      "https://github.com/Takudzwa-Kevin-Mukonzi/Product-list-with-cart-main",
    live:
      "https://takudzwa-kevin-mukonzi.github.io/Product-list-with-cart-main/",
    liveLabel: "Live Demo"
  },
  {
    title: "FrontEnd Challenge Newsletter Template Design",
    image: "/images/FrontEndChallengeTemplates.png",
    alt: "Newsletter Template",
    github: "https://github",
    live: "https://github",
    liveLabel: "Live Demo"
  },
  {
    title: "FrontEnd Challenge Gradie_Sign_Up Template Design",
    image: "/images/Gradie_Sign_Up_Template.png",
    alt: "Gradie_Login_Template",
    github:
      "https://github.com/Takudzwa-Kevin-Mukonzi/Gradie_Sign_Up_Template",
    live:
      "https://takudzwa-kevin-mukonzi.github.io/Gradie_Sign_Up_Template",
    liveLabel: "Live Demo"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className={sectionSpacing}>
      <h5 className="text-center text-light">My Recent Work</h5>
      <h2 className="mb-8 text-center text-primary">Projects</h2>

      <div
        className={`${containerClass} grid grid-cols-3 gap-10 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1`}
      >
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[2rem] border border-transparent bg-bg-variant p-5 transition hover:border-primary-variant hover:bg-transparent"
          >
            <div className="overflow-hidden rounded-xl">
              <img src={project.image} alt={project.alt} />
            </div>
            <h3 className="my-5 text-lg">{project.title}</h3>
            <div className="mb-4 flex flex-wrap gap-4">
              <a
                href={project.github}
                rel="noopener"
                target="_blank"
                className="btn"
              >
                Github
              </a>
              <a
                href={project.live}
                rel="noopener"
                target="_blank"
                className="btn btn-primary"
              >
                {project.liveLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}