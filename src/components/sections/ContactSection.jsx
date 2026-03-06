const sectionSpacing = "mt-12 max-[1024px]:mt-8";

const contactOptions = [
  {
    title: "WhatsApp",
    subtitle: "+263 78 293 7260",
    icon: "fa-brands fa-whatsapp",
    href: "https://api.whatsapp.com/send?phone=+263782937260",
    cta: "Send a message"
  },
  {
    title: "Email",
    subtitle: "tkmukonzi@gmail.com",
    icon: "fa-regular fa-envelope",
    href: "mailto:tkmukonzi@gmail.com",
    cta: "Send a message"
  },
  {
    title: "Messenger",
    subtitle: "Takudzwa Mukonzi",
    icon: "fab fa-facebook-messenger",
    href: "https://m.me/takudzwa.mukonzi",
    cta: "Send a message"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className={sectionSpacing}>
      <h5 className="text-center text-light">Get In Touch</h5>
      <h2 className="mb-8 text-center text-primary">Contact Me</h2>

      <div className="mx-auto grid w-[75%] max-w-[1100px] grid-cols-[30%_58%] gap-[12%] max-[1024px]:grid-cols-1 max-[1024px]:gap-8 max-[600px]:w-[90%]">
        <div className="flex flex-col gap-5">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-xl border border-transparent bg-bg-variant p-5 text-center transition hover:border-primary-variant hover:bg-transparent"
            >
              <i className={`${option.icon} mb-2 text-[1.5rem] text-primary`} />
              <h4 className="text-base font-medium">{option.title}</h4>
              <h5 className="text-sm text-light">{option.subtitle}</h5>
              <a
                rel="noopener"
                href={option.href}
                target="_blank"
                className="mt-3 inline-block text-sm"
              >
                {option.cta}
              </a>
            </article>
          ))}
        </div>

        <form action="" method="POST" className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full rounded-lg border-2 border-primary-variant bg-transparent p-6 text-white outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded-lg border-2 border-primary-variant bg-transparent p-6 text-white outline-none"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="w-full resize-none rounded-lg border-2 border-primary-variant bg-transparent p-6 text-white outline-none"
          ></textarea>
          <button type="button" className="btn btn-primary self-start">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}