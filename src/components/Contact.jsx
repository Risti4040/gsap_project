import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { openingHours, socials } from "../../constants";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.04,
        duration: 1,
        ease: "expo.out",
      })
      .from(
        "#contact h3 , #contact p",
        {
          opacity: 0,
          yPercent: 100,
          stagger: 0.02,
        },
        "-=0.5"
      )
      .from("#f-left-leaf", {
        y: 50,
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#f-right-leaf",
        {
          y: -50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        "#f-drinks",
        {
          y: 25,
          x: 25,
          duration: 1,
          ease: "power1.inOut",
        },
        "<+=0.25"
      );
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img src="/images/footer-drinks.png" alt="drinks" id="f-drinks" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>contact@velvet.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day} : {time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener norefett"
                aria-label={name}
              >
                <img src={icon} alt={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
