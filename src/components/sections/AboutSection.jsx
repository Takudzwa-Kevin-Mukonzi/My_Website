const baseUrl = import.meta.env.BASE_URL;
const containerClass = "mx-auto w-[90%] max-w-[1100px]";
const sectionSpacing = "mt-12 max-[1024px]:mt-8";

const aboutCards = [
  {
    title: "Expirience",
    subtitle: "1 Year Working",
    icon: "menu_book"
  },
  {
    title: "Projects",
    subtitle: "20+ Completed",
    icon: "engineering"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className={sectionSpacing}>
      <h5 className="text-center text-light">Get To Know</h5>
      <h2 className="mb-8 text-center text-primary">About Me</h2>
      <div
        className={`${containerClass} grid grid-cols-[35%_50%] gap-[15%] max-[1024px]:grid-cols-1 max-[1024px]:gap-0`}
      >
        <div className="mx-auto grid h-[200px] w-[300px] place-items-center rounded-[2rem] bg-[linear-gradient(45deg,transparent,#4db5ff,transparent)] max-[1024px]:h-[180px] max-[1024px]:w-[270px] max-[1024px]:my-8 max-[600px]:h-[180px] max-[600px]:w-[250px] max-[600px]:my-0 max-[600px]:mb-12">
          <img
            className="h-[200px] w-[300px] rounded-[2rem] rotate-[10deg] transition duration-300 hover:rotate-0 max-[1024px]:h-[180px] max-[1024px]:w-[270px] max-[600px]:h-[180px] max-[600px]:w-[250px]"
            src={`${baseUrl}images/html_css_js_php.jpg`}
            alt="about me image"
          />
        </div>

        <div className="max-[600px]:text-center">
          <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-1">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-transparent bg-bg-variant p-8 text-center transition hover:border-primary-variant hover:bg-transparent"
              >
                <span className="material-symbols-outlined mb-4 text-[1.4rem] text-primary">
                  {card.icon}
                </span>
                <h5 className="text-[0.95rem] font-medium">{card.title}</h5>
                <small className="text-[0.7rem] text-light">
                  {card.subtitle}
                </small>
              </article>
            ))}
          </div>

          <p className="mt-8 mb-10 text-justify text-light max-[600px]:text-center">
            A detail-driven and creative problem solver with expertise in full
            stack development. With a solid grasp of programming languages,
            including PHP, JavaScript, Python and I design and develop scalable,
            efficient solutions that meet the needs of diverse industries.
          </p>

          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
