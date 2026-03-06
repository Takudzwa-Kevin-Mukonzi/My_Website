const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const footerSocials = [
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
    icon: "fa-brands fa-facebook-f",
    label: "Facebook"
  },
  {
    href: "https://www.instagram.com/takudzwamukonzi/",
    icon: "fa-brands fa-instagram",
    label: "Instagram"
  },
  {
    href: "https://twitter.com",
    icon: "fa-brands fa-x-twitter",
    label: "X"
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="mt-28 bg-primary py-12 text-center text-sm">
      <a href="#" className="mb-8 inline-block text-2xl font-medium text-bg">
        Living, learning, & leveling up one day at a time.
      </a>

      <ul className="mb-12 flex flex-wrap justify-center gap-8 max-[600px]:flex-col max-[600px]:gap-6">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-bg">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mb-16 flex justify-center gap-4">
        {footerSocials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener"
            title={social.label}
            className="flex rounded-lg border border-transparent bg-bg p-3 text-white transition hover:border-bg hover:bg-transparent hover:text-bg"
          >
            <i className={social.icon} aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="mb-16 text-bg">
        &copy; Copyright {year}. All rights reserved.
      </div>
    </footer>
  );
}