const containerClass = "mx-auto w-[90%] max-w-[1100px]";

const headerSocials = [
  {
    href: "https://linkedin.com/in/takudzwa-mukonzi-8a8235328",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn"
  },
  {
    href: "https://github.com/Takudzwa-Kevin-Mukonzi",
    icon: "fa-brands fa-github",
    label: "GitHub"
  },
  {
    href: "https://www.facebook.com/takudzwa.mukonzi.1",
    icon: "fa-brands fa-square-facebook",
    label: "Facebook"
  },
  {
    href: "https://twitter.com",
    icon: "fa-brands fa-x-twitter",
    label: "X"
  },
  {
    href: "https://www.instagram.com/takudzwamukonzi/",
    icon: "fa-brands fa-instagram",
    label: "Instagram"
  },
  {
    href: "https://api.whatsapp.com/send?phone=+263782937260",
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp"
  }
];

export default function Header() {
  return (
    <header className="pt-8">
      <div className={`${containerClass} relative text-center`}>
        <h3 className="text-lg">Hello {"\u{1F44B}"}, I'm</h3>
        <h1 className="text-[2.5rem] font-medium">Takudzwa Kevin Mukonzi</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            className="btn"
            href="/carriculum_vitae/Takudzwa_Kevin_Mukonzi_CV.pdf"
            download=""
          >
            Download CV
          </a>
          <a className="btn btn-primary" href="#contact">
            Let's Talk
          </a>
        </div>

        <div className="relative mt-6 flex flex-col items-center">
          <div className="absolute bottom-[0.4rem] left-0 flex flex-col items-center gap-3 max-[600px]:hidden before:h-8 before:w-px before:bg-primary before:content-[''] after:h-8 after:w-px after:bg-primary after:content-['']">
            {headerSocials.map((social) => (
              <a
                key={social.label}
                rel="noopener"
                href={social.href}
                target="_blank"
                title={social.label}
              >
                <i className={social.icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <img
              className="mt-16 w-[22rem] rounded-t-[12rem] bg-gradient-to-b from-primary to-transparent"
              src="/images/Takudzwa.jpg"
              alt="Takudzwa Kevin Mukonzi"
              title="Takudzwa Kevin Mukonzi"
              width="3000"
              height="4000"
            />
          </div>

          <a
            href="#footer"
            className="absolute bottom-8 right-[-2.5rem] rotate-90 text-[0.9rem] font-light max-[600px]:hidden"
          >
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
}