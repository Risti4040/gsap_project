import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("nav", {
      backdropFilter: "blur(3px)",
      backgroundColor: "rgba(0,0,0,0.3)",
      duration: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top+=10 top",
        end: "top top",
        scrub: true,
      },
    });
  });

  return (
    <nav>
      <div>
        <a href="#hero" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
