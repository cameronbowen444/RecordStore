// src/lib/scrollToSection.ts

export function scrollToSection(href: string) {
  const navbarOffset = 110;

  if (href === "/" || href === "#home") {
    window.history.replaceState(null, "", "/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  const id = href.replace("#", "");
  const section = document.getElementById(id);

  if (!section) return;

  const y = section.getBoundingClientRect().top + window.scrollY - navbarOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });

  window.history.replaceState(null, "", `#${id}`);
}