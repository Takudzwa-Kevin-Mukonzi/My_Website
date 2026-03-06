const containerClass = "mx-auto w-[90%] max-w-[1100px]";
const sectionSpacing = "mt-12 max-[1024px]:mt-8";

const frontEndSkills = [
  { name: "HTML", level: "Experienced", icon: "fa-brands fa-html5" },
  { name: "CSS", level: "Experienced", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", level: "Experienced", icon: "fa-brands fa-js" },
  { name: "Bootstrap", level: "Experienced", icon: "fa-brands fa-bootstrap" },
  {
    name: "Tailwind",
    level: "Experienced",
    icon: (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        aria-hidden="true"
      >
        <path d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z" />
      </svg>
    )
  },
  { name: "React", level: "Experienced", icon: "fa-brands fa-react" }
];

const backEndSkills = [
  { name: "PHP", level: "Experienced", icon: "fa-brands fa-php" },
  { name: "MySQL", level: "Experienced", icon: "fa-solid fa-database" },
  { name: "JavaScript", level: "Experienced", icon: "fa-brands fa-js" },
  { name: "Python", level: "Experienced", icon: "fab fa-python" },
  { name: "Laravel", level: "Experienced", icon: "fab fa-laravel" },
  { name: "Node JS", level: "Experienced", icon: "fab fa-node" }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className={sectionSpacing}>
      <h5 className="text-center text-light">What Skills I Have</h5>
      <h2 className="mb-8 text-center text-primary">My Experience</h2>

      <div
        className={`${containerClass} grid grid-cols-2 gap-8 max-[1024px]:grid-cols-1`}
      >
        <div className="rounded-[2rem] border border-transparent bg-bg-variant px-8 py-8 transition hover:border-primary-variant hover:bg-transparent max-[1024px]:mx-auto max-[1024px]:w-[80%] max-[600px]:w-full max-[600px]:px-4">
          <h3 className="mb-4 text-center text-primary">
            Front End Development
          </h3>
          <div className="grid grid-cols-2 gap-x-24 gap-y-8 px-4 max-[600px]:gap-x-16">
            {frontEndSkills.map((skill) => (
              <article key={skill.name} className="mx-auto flex w-24 gap-4">
                {typeof skill.icon === "string" ? (
                  <i className={`${skill.icon} mt-1.5 text-primary`} />
                ) : (
                  <span className="mt-1.5 text-primary">{skill.icon}</span>
                )}
                <div>
                  <h4 className="text-left">{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-transparent bg-bg-variant px-8 py-8 transition hover:border-primary-variant hover:bg-transparent max-[1024px]:mx-auto max-[1024px]:w-[80%] max-[600px]:w-full max-[600px]:px-4">
          <h3 className="mb-4 text-center text-primary">
            Back End Development
          </h3>
          <div className="grid grid-cols-2 gap-x-24 gap-y-8 px-4 max-[600px]:gap-x-16">
            {backEndSkills.map((skill) => (
              <article key={skill.name} className="mx-auto flex w-24 gap-4">
                <i className={`${skill.icon} mt-1.5 text-primary`} />
                <div>
                  <h4 className="text-left">{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}