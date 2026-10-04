import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiAward,
  FiCheckCircle,
  FiHeart,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";

import whyBrassImg from "../assets/images/why-use-brassimg.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  const reasons = [
    {
      icon: FiAward,
      number: "01",
      title: "Built On Experience",
      description:
        "Since 1965, generations of musicians have carried forward a tradition shaped by discipline, performance and experience.",
    },
    {
      icon: FiShield,
      number: "02",
      title: "Professional & Reliable",
      description:
        "From timing to presentation, our team approaches every celebration with care, preparation and professionalism.",
    },
    {
      icon: FiHeart,
      number: "03",
      title: "Your Occasion Matters",
      description:
        "Every event has its own story. We shape the music and performance around the atmosphere your celebration deserves.",
    },
    {
      icon: FiCheckCircle,
      number: "04",
      title: "Quality At Every Detail",
      description:
        "Musicians, instruments, coordination and presentation all come together to create a polished event experience.",
    },
  ];

  useGSAP(
    () => {
      const animateSection = () => {
        gsap.killTweensOf([
          ".why-eyebrow",
          ".why-heading",
          ".why-copy",
          ".why-panel",
          ".why-floating-image",
          ".why-reason",
          ".why-cta",
        ]);

        gsap.fromTo(
          ".why-eyebrow",
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-heading",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            delay: 0.08,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-copy",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            delay: 0.16,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-panel",
          {
            y: 45,
            autoAlpha: 0,
            scale: 0.98,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            delay: 0.18,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-floating-image",
          {
            x: 60,
            y: -30,
            rotate: 5,
            autoAlpha: 0,
          },
          {
            x: 0,
            y: 0,
            rotate: 0,
            autoAlpha: 1,
            duration: 1,
            delay: 0.25,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-reason",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.09,
            delay: 0.28,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".why-cta",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: 0.5,
            ease: "power3.out",
            overwrite: "auto",
          },
        );
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        end: "bottom 28%",
        onEnter: animateSection,
        onEnterBack: animateSection,
      });

      gsap.to(".why-floating-image", {
        y: 14,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20

        sm:py-24
        lg:py-32

        dark:bg-slate-950
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/60
          blur-[150px]

          dark:bg-red-950/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-slate-100
          blur-[150px]

          dark:bg-slate-900
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5

          sm:px-6
          lg:px-8
        "
      >
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-20
          "
        >
          <div>
            <div
              className="
                why-eyebrow
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-red-200
                bg-red-50
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-red-600

                dark:border-red-900
                dark:bg-red-950/30
                dark:text-red-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Why Yubak
            </div>

            <h2
              className="
                why-heading
                mt-6
                max-w-xl
                text-4xl
                font-bold
                leading-[1.06]
                tracking-[-0.04em]
                text-slate-950

                sm:text-5xl

                dark:text-white
              "
            >
              Experience You Can
              <span className="block text-red-600 dark:text-red-500">
                Hear. Trust You Can Feel.
              </span>
            </h2>
          </div>

          <p
            className="
              why-copy
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-300
            "
          >
            Music creates the atmosphere, but professionalism, preparation and
            understanding the importance of the occasion are what turn a good
            performance into a memorable celebration.
          </p>
        </div>

        {/* ================================================= */}
        {/* MAIN FEATURE PANEL */}
        {/* ================================================= */}

        <div
          className="
            why-panel
            relative
            mt-14
            overflow-hidden
            rounded-[34px]
            bg-slate-950
            px-7
            py-10

            sm:mt-16
            sm:px-10
            sm:py-12

            lg:min-h-[430px]
            lg:px-12
            lg:py-14

            dark:bg-slate-900
          "
        >
          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              -top-20
              h-[330px]
              w-[330px]
              rounded-full
              bg-red-600/20
              blur-[100px]
            "
          />

          {/* DECORATIVE IMAGE */}

          <img
            src={whyBrassImg}
            alt=""
            aria-hidden="true"
            className="
              why-floating-image
              pointer-events-none
              absolute
              right-[-35px]
              top-[-20px]
              hidden
              w-[330px]
              select-none
              object-contain

              md:block

              lg:right-[10px]
              lg:top-[-35px]
              lg:w-[390px]

              xl:right-[30px]
              xl:w-[430px]
            "
          />

          {/* PANEL CONTENT */}

          <div
            className="
              relative
              z-10
              max-w-2xl
            "
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-red-400
              "
            >
              More Than Six Decades
            </p>

            <div
              className="
                mt-5
                flex
                items-end
                gap-4
              "
            >
              <p
                className="
                  text-7xl
                  font-bold
                  tracking-[-0.07em]
                  text-white

                  sm:text-8xl
                "
              >
                60+
              </p>

              <p
                className="
                  mb-3
                  max-w-[140px]
                  text-xs
                  font-semibold
                  uppercase
                  leading-5
                  tracking-[0.14em]
                  text-slate-400
                "
              >
                Years of musical tradition
              </p>
            </div>

            <p
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-slate-300
              "
            >
              Since 1965, Yubak Brass Band has performed through generations of
              weddings, ceremonies and celebrations — preserving tradition while
              continuing to evolve with every new audience.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {["Since 1965", "Experienced Team", "Traditional & Modern"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-slate-300
                    backdrop-blur
                  "
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* REASONS */}
        {/* ================================================= */}

        <div
          className="
            mt-5
            grid
            gap-5

            md:grid-cols-2
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="
                  why-reason
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-200
                  bg-stone-50
                  p-6

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-red-200
                  hover:bg-white
                  hover:shadow-xl
                  hover:shadow-slate-900/5

                  sm:p-7

                  dark:border-slate-800
                  dark:bg-slate-900/60

                  dark:hover:border-red-900/70
                  dark:hover:bg-slate-900
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-5
                  "
                >
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-red-100
                      text-xl
                      text-red-600

                      transition-all
                      duration-300

                      group-hover:bg-red-600
                      group-hover:text-white

                      dark:bg-red-950/50
                      dark:text-red-400

                      dark:group-hover:bg-red-600
                      dark:group-hover:text-white
                    "
                  >
                    <Icon />
                  </span>

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-slate-300

                      dark:text-slate-700
                    "
                  >
                    {reason.number}
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    tracking-tight
                    text-slate-950

                    dark:text-white
                  "
                >
                  {reason.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-xl
                    text-sm
                    leading-6
                    text-slate-600

                    dark:text-slate-400
                  "
                >
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <div
          className="
            why-cta
            mt-12
            flex
            flex-col
            gap-6
            border-t
            border-slate-200
            pt-8

            sm:flex-row
            sm:items-center
            sm:justify-between

            dark:border-slate-800
          "
        >
          <div>
            <p
              className="
                text-lg
                font-bold
                text-slate-950

                dark:text-white
              "
            >
              Your event deserves the right atmosphere.
            </p>

            <p
              className="
                mt-1
                max-w-xl
                text-sm
                leading-6
                text-slate-500

                dark:text-slate-400
              "
            >
              Tell us what you are planning and we will help you choose the
              right performance for your celebration.
            </p>
          </div>

          <a
            href="/booking"
            className="
              group
              inline-flex
              w-fit
              items-center
              justify-center
              gap-2
              rounded-full
              bg-red-600
              px-6
              py-4
              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-red-700
              hover:shadow-xl
              hover:shadow-red-600/20
            "
          >
            Plan Your Event
            <FiArrowUpRight
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
