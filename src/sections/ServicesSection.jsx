import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiArrowUpRight,
  FiMusic,
  FiVolume2,
  FiUsers,
  FiStar,
  FiHeadphones,
  FiAward,
} from "react-icons/fi";

import bandBaja from "../assets/images/band-baja.jpg";
import pancheBaja from "../assets/images/panche-baja.jpg";
import bagpiper from "../assets/images/bagpiper.jpg";
import baggi from "../assets/images/baggi.jpg";
import orchestraBand from "../assets/images/orchestra-band.jpg";
import soundSystemDj from "../assets/images/sound-system-dj.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Panche Baja",
      description:
        "Celebrate with the authentic sound of Nepal. Traditional instruments and timeless rhythms bring cultural energy to weddings and ceremonies.",
      image: pancheBaja,
      icon: FiMusic,
      href: "/services/panche-baja",
      number: "02",
    },
    {
      title: "Bagpiper",
      description:
        "A distinctive bagpiper ensemble designed to create a bold, ceremonial entrance and an unforgettable atmosphere.",
      image: bagpiper,
      icon: FiUsers,
      href: "/services/bagpiper",
      number: "03",
    },
    {
      title: "Orchestra Band",
      description:
        "Live vocals and instruments for receptions, private parties, inaugurations and elegant celebrations.",
      image: orchestraBand,
      icon: FiHeadphones,
      href: "/services/orchestra-band",
      number: "04",
    },
    {
      title: "Chariot / Baggi",
      description:
        "Add a royal touch to your wedding with a beautifully decorated traditional chariot entrance.",
      image: baggi,
      icon: FiStar,
      href: "/services/chariot-baggi",
      number: "05",
    },
    {
      title: "Sound System & DJ",
      description:
        "Professional sound and DJ services built to keep your celebration clear, energetic and alive.",
      image: soundSystemDj,
      icon: FiVolume2,
      href: "/services/sound-system-dj",
      number: "06",
    },
  ];

  useGSAP(
    () => {
      const animateSection = () => {
        gsap.killTweensOf([
          ".services-label",
          ".services-title",
          ".services-intro",
          ".services-featured",
          ".service-card",
          ".services-footer",
        ]);

        gsap.fromTo(
          ".services-label",
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
          ".services-title",
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
          ".services-intro",
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
          ".services-featured",
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
            delay: 0.2,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".service-card",
          {
            y: 45,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            stagger: 0.09,
            delay: 0.28,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".services-footer",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: 0.55,
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
        bg-stone-50
        py-20

        sm:py-24
        lg:py-32

        dark:bg-slate-900
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-100/50
          blur-[140px]

          dark:bg-red-950/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[430px]
          w-[430px]
          rounded-full
          bg-slate-200/70
          blur-[150px]

          dark:bg-slate-800/50
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
        {/* ================================================ */}
        {/* HEADER */}
        {/* ================================================ */}

        <div
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <div
              className="
                services-label
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-red-200
                bg-white
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-red-600

                dark:border-red-900
                dark:bg-slate-950/70
                dark:text-red-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-red-600" />
              Our Services
            </div>

            <h2
              className="
                services-title
                mt-6
                max-w-3xl
                text-4xl
                font-bold
                leading-[1.08]
                tracking-[-0.035em]
                text-slate-950

                sm:text-5xl

                dark:text-white
              "
            >
              Every Celebration
              <span className="block text-red-600 dark:text-red-500">
                Deserves Its Own Sound.
              </span>
            </h2>
          </div>

          <p
            className="
              services-intro
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-300
            "
          >
            From traditional Nepali wedding music to modern live entertainment,
            we bring the musicians, atmosphere and energy that transform an
            occasion into a celebration people remember.
          </p>
        </div>

        {/* ================================================ */}
        {/* FEATURED SERVICE */}
        {/* ================================================ */}

        <div
          className="
            services-featured
            group
            relative
            mt-14
            overflow-hidden
            rounded-[32px]
            bg-slate-950

            sm:mt-16
          "
        >
          <div
            className="
              grid
              min-h-[540px]

              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                min-h-[380px]
                overflow-hidden

                lg:min-h-[540px]
              "
            >
              <img
                src={bandBaja}
                alt="Yubak Brass Band Band Baja performance"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover

                  transition-transform
                  duration-[1200ms]

                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/5
                  to-transparent

                  lg:bg-gradient-to-r
                  lg:from-transparent
                  lg:via-transparent
                  lg:to-slate-950/30
                "
              />

              {/* NUMBER */}

              <span
                className="
                  absolute
                  left-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-black/20
                  text-xs
                  font-bold
                  tracking-[0.18em]
                  text-white
                  backdrop-blur

                  sm:left-8
                  sm:top-8
                "
              >
                01
              </span>
            </div>

            {/* CONTENT */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-7

                sm:p-10
                lg:p-12
              "
            >
              <div>
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-600
                    text-xl
                    text-white
                  "
                >
                  <FiAward />
                </div>

                <p
                  className="
                    mt-8
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-red-400
                  "
                >
                  Signature Service
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    tracking-[-0.03em]
                    text-white

                    sm:text-4xl
                  "
                >
                  Band Baja
                  <span className="block text-slate-400">(Brass Band)</span>
                </h3>

                <p
                  className="
                    mt-5
                    max-w-lg
                    text-base
                    leading-7
                    text-slate-300
                  "
                >
                  The unmistakable sound of a grand celebration. Trumpet,
                  clarinet, euphonium, saxophone, dhol and percussion come
                  together in a powerful live performance tailored to your
                  wedding or special occasion.
                </p>
              </div>

              <div
                className="
                  mt-9
                  border-t
                  border-white/10
                  pt-7
                "
              >
                <a
                  href="/services/band-baja"
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Explore Band Baja
                  <FiArrowUpRight
                    className="
                      transition-transform
                      duration-300

                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================ */}
        {/* OTHER SERVICES */}
        {/* ================================================ */}

        <div
          className="
            mt-5
            grid
            gap-5

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  service-card
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-[28px]
                  bg-slate-950
                "
              >
                {/* IMAGE */}

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover

                    transition-transform
                    duration-[1000ms]

                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/55
                    to-black/5
                  "
                />

                {/* NUMBER */}

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-white/60
                  "
                >
                  {service.number}
                </span>

                {/* CONTENT */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-6

                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white/10
                      text-lg
                      text-white
                      backdrop-blur

                      transition
                      duration-300

                      group-hover:bg-red-600
                    "
                  >
                    <Icon />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/70
                    "
                  >
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="
                      group/link
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    View Service
                    <FiArrowUpRight
                      className="
                        transition-transform
                        duration-300

                        group-hover/link:translate-x-1
                        group-hover/link:-translate-y-1
                      "
                    />
                  </a>
                </div>
              </article>
            );
          })}

          {/* CTA CARD */}

          <div
            className="
              service-card
              flex
              min-h-[420px]
              flex-col
              justify-between
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-7

              sm:p-8

              dark:border-slate-800
              dark:bg-slate-950
            "
          >
            <div>
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-100
                  text-xl
                  text-red-600

                  dark:bg-red-950/50
                  dark:text-red-400
                "
              >
                <FiMusic />
              </span>

              <p
                className="
                  mt-8
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-red-600

                  dark:text-red-400
                "
              >
                Need Help Choosing?
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-[-0.03em]
                  text-slate-950

                  dark:text-white
                "
              >
                Build the perfect package for your event.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-600

                  dark:text-slate-400
                "
              >
                Tell us about your celebration and we will help you choose the
                right combination of music, performers and event services.
              </p>
            </div>

            <a
              href="/booking"
              className="
                group/link
                mt-8
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

                  group-hover/link:translate-x-1
                  group-hover/link:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* ================================================ */}
        {/* BOTTOM LINK */}
        {/* ================================================ */}

        <div
          className="
            services-footer
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-slate-200
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between

            dark:border-slate-800
          "
        >
          <p
            className="
              max-w-xl
              text-sm
              leading-6
              text-slate-500

              dark:text-slate-400
            "
          >
            Weddings, Bratabandha, receptions, corporate events and private
            celebrations — we tailor every performance around your occasion.
          </p>

          <a
            href="/services"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              text-sm
              font-bold
              text-slate-950

              dark:text-white
            "
          >
            View All Services
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-slate-950
                text-white

                transition-all
                duration-300

                group-hover:bg-red-600

                dark:bg-white
                dark:text-slate-950

                dark:group-hover:bg-red-600
                dark:group-hover:text-white
              "
            >
              <FiArrowUpRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
