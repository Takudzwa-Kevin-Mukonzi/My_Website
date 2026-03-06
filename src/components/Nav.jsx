const navLinks = [
  { href: "#", icon: "home", label: "Home" },
  { href: "#about", icon: "person", label: "About" },
  { href: "#experience", icon: "menu_book", label: "Experience" },
  { href: "#projects", icon: "engineering", label: "Projects" },
  { href: "#contact", icon: "contacts", label: "Contact" }
];

export default function Nav() {
  return (
    <nav
      className="fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3 rounded-full bg-black/30 px-7 py-3 backdrop-blur-[15px]"
      aria-label="Primary"
    >
      {navLinks.map((link) => (
        <a
          key={link.label}
          className="rounded-xl p-2 text-primary transition hover:bg-black/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          href={link.href}
          aria-label={link.label}
        >
          <span className="material-symbols-outlined text-[20px]">
            {link.icon}
          </span>
        </a>
      ))}
    </nav>
  );
}