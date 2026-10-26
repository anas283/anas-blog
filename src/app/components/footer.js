import Image from "next/image";
import Link from "next/link";
import AnasLogo from "../../../public/anas_web_logo.png";
import { ArrowUpRight, Coffee, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "muhammadanasbinadam@gmail.com"

const explore = [
  { title: "Projects", url: "/projects" },
  { title: "Blogs", url: "/blogs" },
  { title: "Uses", url: "/uses" },
  { title: "Contact", url: "/contact" },
]

const elsewhere = [
  { title: "GitHub", url: "https://github.com/anas283" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/anas283/" },
  { title: "Email", url: `mailto:${EMAIL}` },
  { title: "Résumé", url: "/resume_anas.pdf" },
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border/70">
      <div className="container-page">
        <div className="grid gap-8 border-b border-border/70 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div>
            <p className="eyebrow">Let&apos;s work together</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              I&apos;m open to freelance work and full-time opportunities.
              Tell me what you&apos;re building and let&apos;s make it great.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex h-12 w-fit items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Say hello
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex w-fit items-center gap-2.5">
              <Image
                src={AnasLogo}
                alt="Anas"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full ring-1 ring-border"
              />
              <span className="font-display text-base font-semibold tracking-tight">Anas</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Software engineer crafting thoughtful interfaces and fast,
              reliable web products. Based in Malaysia, working worldwide.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                { href: "https://github.com/anas283", label: "GitHub", Icon: Github },
                { href: "https://www.linkedin.com/in/anas283/", label: "LinkedIn", Icon: Linkedin },
                { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {explore.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.url}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2.5">
              {elsewhere.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.url}
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/70 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Anas. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with care
            <Coffee className="h-3.5 w-3.5" />
            Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
