import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FiArrowUpRight, FiPhone, FiPlay } from "react-icons/fi";

import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-2.jpg";
import slider3 from "../assets/images/slider-3.jpg";
import slider4 from "../assets/images/slider-4.jpg";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".hero-copy > *", {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      tl.from(
        ".hero-main-image",
        {
          scale: 1.1,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.7",
      );

      tl.from(
        ".hero-small-image",
        {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.8",
      );

      gsap.to(".hero-main-image img", {
        scale: 1.06,
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-stone-50
        pt-[115px]

        dark:bg-slate-950

        lg:pt-[120px]
      "
    >
      {/* background decoration */}
      <div
        className="
          absolute
          left-[-120px]
          top-[150px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-red-200/40
          blur-[120px]

          dark:bg-red-950/30
        "
      />

      <div
        className="
          absolute
          right-[-100px]
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-slate-200/50
          blur-[130px]

          dark:bg-slate-800/40
        "
      />

      <div
        className="
          relative z-10
          mx-auto
          grid min-h-[calc(100vh-115px)]
          max-w-7xl
          items-center
          gap-12
          px-5
          py-12

          sm:px-6

          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          lg:px-8
          lg:py-10
        "
      >
        {/* LEFT CONTENT */}
        <div className="hero-copy max-w-xl">
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-200
              bg-white/80
              px-4 py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-red-600
              backdrop-blur

              dark:border-red-900
              dark:bg-slate-900/70
              dark:text-red-400
            "
          >
            <span className="h-2 w-2 rounded-full bg-red-600" />
            Kathmandu • Since 1965
          </div>

          <h1
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-slate-950

              sm:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            We Don’t Just
            <span className="block text-red-600 dark:text-red-500">
              Play Music.
            </span>
            We Lead The Celebration.
          </h1>

          <p
            className="
              mt-6
              max-w-lg
              text-base
              leading-7
              text-slate-600

              sm:text-lg

              dark:text-slate-300
            "
          >
            Traditional Band Baja, Panche Baja, Bagpiper, Orchestra, Chariot, DJ
            and sound services for weddings and celebrations across Nepal.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:flex-row
            "
          >
            <a
              href="/booking"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-red-600
                px-6 py-4
                text-sm
                font-semibold
                text-white
                shadow-xl
                shadow-red-600/20

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-red-700
              "
            >
              Book Your Event
              <FiArrowUpRight
                className="
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>

            <a
              href="/video"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-slate-300
                bg-white/70
                px-6 py-4
                text-sm
                font-semibold
                text-slate-900
                backdrop-blur

                transition

                hover:border-slate-400
                hover:bg-white

                dark:border-slate-700
                dark:bg-slate-900/60
                dark:text-white
              "
            >
              <span
                className="
                  flex h-7 w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-950
                  text-white

                  dark:bg-white
                  dark:text-slate-950
                "
              >
                <FiPlay className="ml-[2px] text-xs" />
              </span>
              Watch Performances
            </a>
          </div>

          {/* trust row */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-6
              border-t
              border-slate-200
              pt-6

              dark:border-slate-800
            "
          >
            <div>
              <p
                className="
                  text-2xl
                  font-bold
                  text-slate-950

                  dark:text-white
                "
              >
                1965
              </p>

              <p
                className="
                  mt-1
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Established
              </p>
            </div>

            <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />

            <a
              href="tel:+9779851127729"
              className="
                group
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex h-10 w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                  text-red-600

                  dark:bg-red-950/40
                  dark:text-red-400
                "
              >
                <FiPhone />
              </span>

              <div>
                <p
                  className="
                    text-xs
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Call for booking
                </p>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-slate-900

                    dark:text-white
                  "
                >
                  +977 985-1127729
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-[650px]

            lg:mx-0
          "
        >
          <div
            className="
              grid
              grid-cols-[1.2fr_0.8fr]
              gap-3

              sm:gap-4
            "
          >
            {/* MAIN IMAGE */}
            <div
              className="
                hero-main-image
                relative
                row-span-2
                min-h-[520px]
                overflow-hidden
                rounded-[32px]

                sm:min-h-[610px]
              "
            >
              <img
                src={slider1}
                alt="Yubak Brass Band wedding performance"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  p-6
                  text-white
                "
              >
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/70
                  "
                >
                  Yubak Brass Band
                </p>

                <p
                  className="
                    mt-2
                    text-xl
                    font-semibold
                  "
                >
                  A tradition passed
                  <br />
                  through generations.
                </p>
              </div>
            </div>

            {/* IMAGE 2 */}
            <div
              className="
                hero-small-image
                relative
                min-h-[250px]
                overflow-hidden
                rounded-[26px]

                sm:min-h-[295px]
              "
            >
              <img
                src={slider2}
                alt="Wedding band performance"
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

            {/* IMAGE 3 */}
            <div
              className="
                hero-small-image
                relative
                min-h-[250px]
                overflow-hidden
                rounded-[26px]

                sm:min-h-[295px]
              "
            >
              <img
                src={slider3}
                alt="Traditional wedding music"
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
          </div>

          {/* floating image */}
          <div
            className="
              hero-small-image
              absolute
              -bottom-8
              left-[30%]
              hidden
              h-36
              w-48
              overflow-hidden
              rounded-3xl
              border-[6px]
              border-stone-50
              shadow-2xl

              sm:block

              dark:border-slate-950
            "
          >
            <img
              src={slider4}
              alt="Yubak Brass Band celebration"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* legacy badge */}
          <div
            className="
              absolute
              -left-5
              top-8
              hidden
              rounded-2xl
              border
              border-slate-200
              bg-white/90
              px-5 py-4
              shadow-xl
              backdrop-blur

              sm:block

              dark:border-slate-700
              dark:bg-slate-900/90
            "
          >
            <p
              className="
                text-3xl
                font-bold
                text-red-600
              "
            >
              60+
            </p>

            <p
              className="
                mt-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-slate-500

                dark:text-slate-400
              "
            >
              Years of legacy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
