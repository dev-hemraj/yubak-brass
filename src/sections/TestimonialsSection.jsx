import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiStar,
} from "react-icons/fi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const testimonials = [
    {
      name: "Hem Raj Bhatt",
      location: "Kathmandu, Nepal",
      text: "Yubak Brass Band made our wedding unforgettable. The Brass Band and Panche Baja performances brought incredible energy to the celebration, and our guests were talking about the music long after the event.",
    },
    {
      name: "Bika KC",
      location: "Kathmandu, Nepal",
      text: "The performance brought so much energy and excitement to our celebration. Yubak Brass Band truly knows how to create an atmosphere people remember.",
    },
    {
      name: "Arun Karki",
      location: "Kathmandu, Nepal",
      text: "One of the best brass band experiences in town. We loved the music, the energy and the entire performance.",
    },
    {
      name: "Dimebag Anmol",
      location: "Kathmandu, Nepal",
      text: "They performed at my wedding and the experience was excellent. The band was lively, professional and made the day even more memorable.",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useGSAP(
    () => {
      const animateSection = () => {
        gsap.killTweensOf([
          ".testimonial-label",
          ".testimonial-title",
          ".testimonial-intro",
          ".testimonial-slider",
          ".testimonial-bottom",
        ]);

        gsap.fromTo(
          ".testimonial-label",
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
          ".testimonial-title",
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
          ".testimonial-intro",
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            delay: 0.15,
            ease: "power3.out",
            overwrite: "auto",
          },
        );

        gsap.fromTo(
          ".testimonial-slider",
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
          ".testimonial-bottom",
          {
            y: 25,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: 0.4,
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

  useGSAP(
    () => {
      if (!cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        {
          y: 18,
          autoAlpha: 0,
          scale: 0.985,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        },
      );
    },
    {
      dependencies: [activeIndex],
      scope: sectionRef,
    },
  );

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-stone-50
        py-20

        sm:py-24
        lg:py-28

        dark:bg-slate-900
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[380px]
          w-[380px]
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
          h-[380px]
          w-[380px]
          rounded-full
          bg-slate-200/60
          blur-[140px]

          dark:bg-slate-800/40
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
        {/* HEADER */}

        <div
          className="
            grid
            gap-7

            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <div
              className="
                testimonial-label
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
              Client Experiences
            </div>

            <h2
              className="
                testimonial-title
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
              Celebrations Remembered.
              <span className="block text-red-600 dark:text-red-500">
                Music Never Forgotten.
              </span>
            </h2>
          </div>

          <p
            className="
              testimonial-intro
              max-w-xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8

              dark:text-slate-300
            "
          >
            Real experiences from people who trusted Yubak Brass Band to bring
            energy, tradition and unforgettable music to their special moments.
          </p>
        </div>

        {/* ================================================= */}
        {/* SLIDER */}
        {/* ================================================= */}

        <div
          className="
            testimonial-slider
            mt-12

            sm:mt-14
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              bg-slate-950

              dark:bg-slate-950
            "
          >
            {/* BIG QUOTE */}

            <span
              className="
                pointer-events-none
                absolute
                -right-4
                -top-20
                font-serif
                text-[210px]
                leading-none
                text-white/[0.04]

                sm:text-[280px]
              "
            >
              “
            </span>

            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                top-0
                h-[330px]
                w-[330px]
                rounded-full
                bg-red-600/15
                blur-[110px]
              "
            />

            <div
              ref={cardRef}
              className="
                relative
                z-10
                grid
                min-h-[390px]
                gap-10
                p-7

                sm:min-h-[420px]
                sm:p-10

                lg:grid-cols-[1fr_auto]
                lg:items-end
                lg:p-12
              "
            >
              {/* CONTENT */}

              <div className="max-w-4xl">
                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-red-400
                  "
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      className="
                        fill-current
                        text-base

                        sm:text-lg
                      "
                    />
                  ))}
                </div>

                <p
                  className="
                    mt-8
                    text-2xl
                    font-medium
                    leading-[1.45]
                    tracking-[-0.025em]
                    text-white

                    sm:text-3xl
                    lg:text-[34px]
                  "
                >
                  “{activeTestimonial.text}”
                </p>

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-red-600
                      text-base
                      font-bold
                      text-white
                    "
                  >
                    {activeTestimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p
                      className="
                        text-base
                        font-bold
                        text-white
                      "
                    >
                      {activeTestimonial.name}
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-slate-400
                      "
                    >
                      {activeTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* COUNTER */}

              <div
                className="
                  hidden
                  text-right

                  lg:block
                "
              >
                <p
                  className="
                    text-5xl
                    font-bold
                    tracking-[-0.05em]
                    text-white
                  "
                >
                  0{activeIndex + 1}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500
                  "
                >
                  of 0{testimonials.length}
                </p>
              </div>
            </div>
          </div>

          {/* CONTROLS */}

          <div
            className="
              mt-5
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* DOTS */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      activeIndex === index
                        ? "w-8 bg-red-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                    }
                  `}
                />
              ))}
            </div>

            {/* ARROWS */}

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-slate-950

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-red-600
                  hover:bg-red-600
                  hover:text-white

                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white

                  dark:hover:border-red-600
                  dark:hover:bg-red-600
                "
              >
                <FiArrowLeft />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  text-slate-950

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-red-600
                  hover:bg-red-600
                  hover:text-white

                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-white

                  dark:hover:border-red-600
                  dark:hover:bg-red-600
                "
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM CTA */}
        {/* ================================================= */}

        <div
          className="
            testimonial-bottom
            mt-10
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
              Ready to create your own unforgettable celebration?
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
              Tell us about your event and let our team help bring the right
              music and energy to your day.
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
            Book Your Celebration
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

export default TestimonialsSection;
