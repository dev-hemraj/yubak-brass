import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import brassBand from "../assets/images/Brass-Band.jpg";
import slider3 from "../assets/images/slider-3.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const animateSection = () => {
        /*
         * Kill only active tweens for these elements.
         * This prevents animations stacking when scrolling quickly.
         */
        gsap.killTweensOf([
          ".about-image-main",
          ".about-image-small",
          ".about-year-badge",
          ".about-eyebrow",
          ".about-title",
          ".about-description",
          ".about-description-two",
          ".about-feature",
          ".about-bottom",
        ]);

        // MAIN IMAGE
        gsap.fromTo(
          ".about-image-main",
          {
            x: -60,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // SMALL IMAGE
        gsap.fromTo(
          ".about-image-small",
          {
            y: 45,
            scale: 0.94,
            autoAlpha: 0,
          },
          {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            delay: 0.15,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // YEAR BADGE
        gsap.fromTo(
          ".about-year-badge",
          {
            x: -30,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.75,
            delay: 0.2,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // EYEBROW
        gsap.fromTo(
          ".about-eyebrow",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            delay: 0.1,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // TITLE
        gsap.fromTo(
          ".about-title",
          {
            y: 35,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            delay: 0.18,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // FIRST PARAGRAPH
        gsap.fromTo(
          ".about-description",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            delay: 0.25,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // SECOND PARAGRAPH
        gsap.fromTo(
          ".about-description-two",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            delay: 0.32,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        /*
         * FOUR FEATURE CARDS
         *
         * Important:
         * These cards now have ONE animation only.
         * They are no longer affected by a parent opacity animation.
         */
        gsap.fromTo(
          ".about-feature",
          {
            y: 30,
            autoAlpha: 0,
            scale: 0.97,
          },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.09,
            delay: 0.38,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        // BOTTOM CTA
        gsap.fromTo(
          ".about-bottom",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: 0.58,
            ease: "power3.out",
            overwrite: "auto",
          },
        );
      };

      /*
       * Main ScrollTrigger
       *
       * onEnter:
       * scrolling DOWN into section
       *
       * onEnterBack:
       * scrolling UP into section
       *
       * We intentionally do NOT reverse onLeave.
       * That prevents content/cards becoming invisible.
       */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",
        end: "bottom 28%",

        onEnter: () => {
          animateSection();
        },

        onEnterBack: () => {
          animateSection();
        },
      });

      // subtle permanent image movement
      gsap.to(".about-image-main img", {
        scale: 1.06,
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    {
      scope: sectionRef,
    },
  );

  const features = [
    "Experienced musicians",
    "Nepali & Bollywood music",
    "Traditional & modern performances",
    "Professional event service",
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-30
        dark:bg-slate-950
        border-t-1 border-white dark:border-slate-800
      "
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/60
          blur-[130px]

          dark:bg-red-950/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-slate-100
          blur-[130px]

          dark:bg-slate-900
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-16
          px-5

          sm:px-6

          lg:grid-cols-[1fr_0.95fr]
          lg:gap-20
          lg:px-8
        "
      >
        {/* ===================================================== */}
        {/* LEFT IMAGE AREA */}
        {/* ===================================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[590px]

            lg:mx-0
          "
        >
          {/* MAIN IMAGE */}

          <div
            className="
              about-image-main
              relative
              min-h-[470px]
              overflow-hidden
              rounded-[32px]

              sm:min-h-[570px]
            "
          >
            <img
              src={brassBand}
              alt="Yubak Brass Band performing at a celebration"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-top
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/5
                to-transparent
              "
            />

            {/* IMAGE TEXT */}

            <div
              className="
                absolute
                bottom-0
                left-0
                max-w-sm
                p-7

                sm:p-8
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
                Our Legacy
              </p>

              <p
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  leading-snug
                  text-white

                  sm:text-3xl
                "
              >
                Six decades of music, tradition and celebration.
              </p>
            </div>
          </div>

          {/* SECONDARY IMAGE */}

          <div
            className="
              about-image-small
              absolute
              -bottom-8
              -right-3
              hidden
              h-[200px]
              w-[245px]
              overflow-hidden
              rounded-[28px]
              border-[7px]
              border-white
              shadow-2xl

              sm:block

              lg:-right-8

              dark:border-slate-950
            "
          >
            <img
              src={slider3}
              alt="Traditional Nepali wedding music"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700

                hover:scale-105
              "
            />
          </div>

          {/* YEAR BADGE */}

          <div
            className="
              about-year-badge
              absolute
              -left-3
              top-8
              rounded-2xl
              border
              border-slate-200
              bg-white/90
              px-5
              py-4
              shadow-xl
              backdrop-blur

              sm:-left-6
              sm:px-6
              sm:py-5

              dark:border-slate-700
              dark:bg-slate-900/90
            "
          >
            <p
              className="
                text-3xl
                font-bold
                tracking-tight
                text-red-600

                sm:text-4xl
              "
            >
              1965
            </p>

            <p
              className="
                mt-1
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-slate-500

                dark:text-slate-400
              "
            >
              Where it began
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* RIGHT CONTENT */}
        {/* ===================================================== */}

        <div>
          {/* EYEBROW */}

          <div
            className="
              about-eyebrow
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
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-red-600
              "
            />
            About Yubak Brass Band
          </div>

          {/* TITLE */}

          <h2
            className="
              about-title
              mt-6
              text-4xl
              font-bold
              leading-[1.08]
              tracking-[-0.035em]
              text-slate-950

              sm:text-5xl

              dark:text-white
            "
          >
            More Than A Band.
            <span
              className="
                block
                text-red-600

                dark:text-red-500
              "
            >
              A Celebration Tradition.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              about-description
              mt-6
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-300
            "
          >
            Since 1965, Yubak Brass Band has been part of celebrations across
            Kathmandu and beyond — bringing powerful live music, energy and
            tradition to weddings, Bratabandha ceremonies, private gatherings
            and special events.
          </p>

          <p
            className="
              about-description-two
              mt-4
              text-base
              leading-7
              text-slate-600

              dark:text-slate-400
            "
          >
            From timeless Nepali rhythms to Bollywood favourites and classical
            melodies, our experienced musicians combine generations of musical
            heritage with the excitement every modern celebration deserves.
          </p>

          {/* ================================================= */}
          {/* FEATURE CARDS */}
          {/* ================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
            "
          >
            {features.map((item) => (
              <div
                key={item}
                className="
                  about-feature
                  group
                  flex
                  min-h-[76px]
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-stone-50
                  px-4
                  py-4

                  transition-[border-color,box-shadow,transform,background-color]
                  duration-300

                  hover:-translate-y-1
                  hover:border-red-200
                  hover:bg-white
                  hover:shadow-lg
                  hover:shadow-slate-900/5

                  dark:border-slate-800
                  dark:bg-slate-900/60

                  dark:hover:border-red-900/70
                  dark:hover:bg-slate-900
                  dark:hover:shadow-black/20
                "
              >
                {/* ICON */}

                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-red-100
                    text-red-600

                    transition
                    duration-300

                    group-hover:bg-red-600
                    group-hover:text-white

                    dark:bg-red-950/50
                    dark:text-red-400

                    dark:group-hover:bg-red-600
                    dark:group-hover:text-white
                  "
                >
                  <FiCheck />
                </span>

                {/* TEXT */}

                <p
                  className="
                    text-sm
                    font-semibold
                    leading-5
                    text-slate-800

                    dark:text-slate-200
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* ================================================= */}
          {/* BOTTOM */}
          {/* ================================================= */}

          <div
            className="
              about-bottom
              mt-9
              flex
              flex-col
              gap-6
              border-t
              border-slate-200
              pt-7
              sm:flex-row
              sm:items-center
              sm:justify-between
              dark:border-slate-800
            "
          >
            {/* BUTTON */}

            <a
              href="/about"
              className="
                group
                inline-flex
                w-fit
                items-center
                justify-center
                gap-2
                rounded-full
                bg-slate-950
                px-6
                py-4
                text-sm
                font-semibold
                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-red-600
                hover:shadow-xl
                hover:shadow-red-600/15

                dark:bg-white
                dark:text-slate-950

                dark:hover:bg-red-600
                dark:hover:text-white
              "
            >
              Discover Our Services
              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            {/* 60 YEARS */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <p
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-slate-950

                  dark:text-white
                "
              >
                60+
              </p>

              <p
                className="
                  max-w-[120px]
                  text-xs
                  font-semibold
                  uppercase
                  leading-5
                  tracking-[0.13em]
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Years of musical legacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
