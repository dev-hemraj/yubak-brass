import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  FiPhone,
  FiMail,
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

import logo from "../assets/images/logo.png";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const mobileContentRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Video", path: "/video" },
    { name: "Contact", path: "/contact" },
  ];

  // =========================
  // DARK / LIGHT MODE
  // =========================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      document.documentElement.classList.toggle("dark", systemDark);
      setDarkMode(systemDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);

    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  // =========================
  // SCROLL STATE
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // LOCK BODY ON MOBILE MENU
  // =========================
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // =========================
  // MOBILE MENU OPEN ANIMATION
  // =========================
  useGSAP(
    () => {
      if (!menuOpen) return;

      const tl = gsap.timeline();

      tl.fromTo(
        mobileMenuRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.25,
          ease: "power2.out",
        },
      );

      tl.fromTo(
        mobileContentRef.current,
        {
          xPercent: 100,
        },
        {
          xPercent: 0,
          duration: 0.55,
          ease: "power4.out",
        },
        "<",
      );

      tl.fromTo(
        ".mobile-nav-item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.4,
          ease: "power3.out",
        },
        "-=0.25",
      );
    },
    {
      dependencies: [menuOpen],
    },
  );

  const closeMobileMenu = () => {
    if (!menuOpen) return;

    const tl = gsap.timeline({
      onComplete: () => setMenuOpen(false),
    });

    tl.to(".mobile-nav-item", {
      y: 15,
      opacity: 0,
      stagger: 0.025,
      duration: 0.18,
    });

    tl.to(
      mobileContentRef.current,
      {
        xPercent: 100,
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.1",
    );

    tl.to(
      mobileMenuRef.current,
      {
        autoAlpha: 0,
        duration: 0.2,
      },
      "-=0.15",
    );
  };

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-300
        
        `}
      >
        {/* =========================================
            TOP BAR
        ========================================== */}
        <div
          className="
            hidden md:block
            border-b border-slate-200/70
            bg-white/95
            dark:border-white/5
            dark:bg-slate-950/95
            transition-colors duration-300
          "
        >
          <div
            className="
              mx-auto flex h-9 max-w-7xl
              items-center justify-between
              px-6 lg:px-8
            "
          >
            {/* Contact */}
            <div className="flex items-center gap-6">
              <a
                href="tel:+9779851127729"
                className="
                  group flex items-center gap-2
                  text-[11px] font-medium
                  tracking-wide
                  text-slate-500
                  transition-colors

                  hover:text-red-600

                  dark:text-slate-400
                  dark:hover:text-red-400
                "
              >
                <FiPhone
                  className="
                    text-red-600
                    transition-transform
                    group-hover:-rotate-6
                    dark:text-red-500
                  "
                />
                +977 985-1127729
              </a>

              <span
                className="
                  h-3 w-px
                  bg-slate-300
                  dark:bg-slate-700
                "
              />

              <a
                href="mailto:info@yubakbrassband.com"
                className="
                  group flex items-center gap-2
                  text-[11px] font-medium
                  tracking-wide
                  text-slate-500
                  transition-colors

                  hover:text-red-600

                  dark:text-slate-400
                  dark:hover:text-red-400
                "
              >
                <FiMail className="text-red-600 dark:text-red-500" />
                info@yubakbrassband.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <span
                className="
                  hidden
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-slate-400

                  lg:block
                  dark:text-slate-500
                "
              >
                Follow our celebrations
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    text-xs
                    text-slate-500
                    transition-all

                    hover:-translate-y-0.5
                    hover:text-red-600

                    dark:text-slate-400
                    dark:hover:text-red-400
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    text-sm
                    text-slate-500
                    transition-all

                    hover:-translate-y-0.5
                    hover:text-red-600

                    dark:text-slate-400
                    dark:hover:text-red-400
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  aria-label="TikTok"
                  className="
                    text-sm
                    text-slate-500
                    transition-all

                    hover:-translate-y-0.5
                    hover:text-red-600

                    dark:text-slate-400
                    dark:hover:text-red-400
                  "
                >
                  <FaTiktok />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    text-sm
                    text-slate-500
                    transition-all

                    hover:-translate-y-0.5
                    hover:text-red-600

                    dark:text-slate-400
                    dark:hover:text-red-400
                  "
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            MAIN NAVBAR AREA
        ========================================== */}
        <div
          className="
            bg-white/70
            px-4 py-3
            backdrop-blur-xl

            dark:bg-slate-950/75

            transition-colors duration-300
          "
        >
          <div
            className="
              mx-auto
              flex h-[76px]
              max-w-7xl
              items-center
              justify-between

              rounded-[24px]

              border border-slate-200/80
              bg-white/90
              px-4

              shadow-[0_12px_40px_rgba(15,23,42,0.08)]

              backdrop-blur-2xl

              dark:border-white/10
              dark:bg-slate-900/80
              dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]

              lg:px-5

              transition-all duration-300
            "
          >
            {/* Logo */}
            <a
              href="/"
              className="
                group
                flex shrink-0
                items-center

                rounded-[18px]

                bg-white

                px-3 py-2

                ring-1 ring-slate-200

                shadow-sm

                transition-all duration-300

                hover:-translate-y-0.5
                hover:shadow-md

                dark:ring-white/10
              "
            >
              <img
                src={logo}
                alt="Yubak Brass Band Baja"
                className="
                  h-10 w-auto
                  object-contain

                  lg:h-11
                "
              />
            </a>

            {/* =====================================
                DESKTOP NAV
            ====================================== */}
            <nav
              className="
                hidden
                items-center

                rounded-full

                bg-slate-100/80
                p-1.5

                dark:bg-slate-950/70

                lg:flex
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="
                    group relative
                    rounded-full

                    px-4 py-2.5

                    text-[13px]
                    font-semibold

                    text-slate-600

                    transition-all duration-300

                    hover:bg-white
                    hover:text-slate-950
                    hover:shadow-sm

                    dark:text-slate-300

                    dark:hover:bg-slate-800
                    dark:hover:text-white
                  "
                >
                  {link.name}

                  <span
                    className="
                      absolute
                      -bottom-[2px]
                      left-1/2

                      h-1
                      w-1

                      -translate-x-1/2
                      scale-0

                      rounded-full
                      bg-red-600

                      transition-transform duration-300

                      group-hover:scale-100

                      dark:bg-red-500
                    "
                  />
                </a>
              ))}
            </nav>

            {/* =====================================
                DESKTOP ACTIONS
            ====================================== */}
            <div className="hidden items-center gap-2 lg:flex">
              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="
                  group
                  flex h-11 w-11
                  items-center justify-center

                  rounded-full

                  border border-slate-200
                  bg-white

                  text-lg
                  text-slate-700

                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-red-200
                  hover:text-red-600
                  hover:shadow-md

                  dark:border-white/10
                  dark:bg-slate-950
                  dark:text-yellow-400

                  dark:hover:border-red-500/30
                  dark:hover:text-yellow-300
                "
              >
                <span
                  className="
                    transition-transform duration-500
                    group-hover:rotate-12
                  "
                >
                  {darkMode ? <FiSun /> : <FiMoon />}
                </span>
              </button>

              {/* Book CTA */}
              <a
                href="/booking"
                className="
                  group relative
                  ml-1
                  inline-flex
                  items-center gap-2
                  overflow-hidden

                  rounded-full

                  bg-red-600

                  px-5 py-3

                  text-sm
                  font-bold
                  text-white

                  shadow-lg
                  shadow-red-600/20

                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:bg-red-700
                  hover:shadow-xl
                  hover:shadow-red-600/30

                  dark:bg-red-600
                  dark:hover:bg-red-500
                "
              >
                <span className="relative z-10">Book Now</span>

                <span
                  className="
                    relative z-10

                    flex h-6 w-6
                    items-center justify-center

                    rounded-full

                    bg-white/15

                    transition-transform duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                >
                  <FiArrowUpRight className="text-xs" />
                </span>
              </a>
            </div>

            {/* =====================================
                MOBILE CONTROLS
            ====================================== */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                type="button"
                aria-label="Toggle theme"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full

                  border border-slate-200
                  bg-slate-100
                  text-slate-700

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-yellow-400

                  transition-colors duration-300
                "
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  text-xl

                  bg-slate-950
                  text-white

                  dark:bg-red-600

                  transition-colors duration-300
                "
              >
                <FiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE MENU
      ========================================== */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="
            fixed inset-0
            z-[100]

            bg-slate-950/60

            backdrop-blur-md

            lg:hidden
          "
        >
          {/* Background click */}
          <button
            type="button"
            onClick={closeMobileMenu}
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close menu"
          />

          {/* Drawer */}
          <div
            ref={mobileContentRef}
            className="
              absolute
              right-0 top-0

              flex h-full
              w-[90%]
              max-w-[420px]

              flex-col

              overflow-y-auto

              bg-white
              px-6
              pb-8
              pt-5

              text-slate-900

              shadow-2xl

              dark:bg-slate-950
              dark:text-white

              transition-colors duration-300
            "
          >
            {/* Mobile top */}
            <div
              className="
                flex items-center justify-between

                border-b border-slate-200
                pb-5

                dark:border-slate-800
              "
            >
              <div
                className="
                  rounded-xl
                  bg-white

                  px-2 py-1.5

                  ring-1 ring-slate-200

                  dark:ring-slate-700
                "
              >
                <img
                  src={logo}
                  alt="Yubak Brass Band Baja"
                  className="h-10 w-auto"
                />
              </div>

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close navigation"
                className="
                  flex h-11 w-11
                  items-center justify-center

                  rounded-full

                  bg-slate-100
                  text-xl
                  text-slate-900

                  transition

                  hover:bg-red-600
                  hover:text-white

                  dark:bg-slate-800
                  dark:text-white

                  dark:hover:bg-red-600
                "
              >
                <FiX />
              </button>
            </div>

            {/* Navigation label */}
            <p
              className="
                mobile-nav-item

                mt-10

                text-xs
                font-bold
                uppercase
                tracking-[0.25em]

                text-red-600

                dark:text-red-500
              "
            >
              Navigation
            </p>

            {/* Mobile links */}
            <nav className="mt-5">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={closeMobileMenu}
                  className="
                    mobile-nav-item

                    group

                    flex items-center
                    justify-between

                    border-b
                    border-slate-200

                    py-4

                    dark:border-slate-800
                  "
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        text-xs
                        font-semibold

                        text-slate-400

                        dark:text-slate-600
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-xl
                        font-semibold

                        text-slate-900

                        transition-colors

                        group-hover:text-red-600

                        dark:text-white
                        dark:group-hover:text-red-400
                      "
                    >
                      {link.name}
                    </span>
                  </div>

                  <FiArrowUpRight
                    className="
                      text-lg
                      text-slate-400

                      transition-all

                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-red-600

                      dark:group-hover:text-red-400
                    "
                  />
                </a>
              ))}
            </nav>

            {/* Mobile booking */}
            <a
              href="/booking"
              onClick={closeMobileMenu}
              className="
                mobile-nav-item

                mt-8

                flex w-full
                items-center
                justify-center
                gap-2

                rounded-full

                bg-red-600

                px-6 py-4

                font-semibold
                text-white

                shadow-lg
                shadow-red-600/20

                transition-colors

                hover:bg-red-700

                dark:hover:bg-red-500
              "
            >
              Book Your Event
              <FiArrowUpRight />
            </a>

            {/* Mobile contact */}
            <div className="mobile-nav-item mt-auto pt-10">
              <p
                className="
                  mb-4

                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]

                  text-slate-400

                  dark:text-slate-500
                "
              >
                Get in touch
              </p>

              <a
                href="tel:+9779851127729"
                className="
                  flex items-center gap-3

                  py-2

                  text-sm
                  font-medium

                  text-slate-700

                  dark:text-slate-300
                "
              >
                <FiPhone className="text-red-600 dark:text-red-500" />
                +977 985-1127729
              </a>

              <a
                href="mailto:info@yubakbrassband.com"
                className="
                  flex items-center gap-3

                  py-2

                  text-sm
                  font-medium

                  text-slate-700

                  dark:text-slate-300
                "
              >
                <FiMail className="text-red-600 dark:text-red-500" />
                info@yubakbrassband.com
              </a>

              {/* Social */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex h-10 w-10
                    items-center justify-center

                    rounded-full

                    bg-slate-100
                    text-slate-700

                    transition

                    hover:bg-red-600
                    hover:text-white

                    dark:bg-slate-800
                    dark:text-slate-300
                  "
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-10 w-10
                    items-center justify-center

                    rounded-full

                    bg-slate-100
                    text-slate-700

                    transition

                    hover:bg-red-600
                    hover:text-white

                    dark:bg-slate-800
                    dark:text-slate-300
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  aria-label="TikTok"
                  className="
                    flex h-10 w-10
                    items-center justify-center

                    rounded-full

                    bg-slate-100
                    text-slate-700

                    transition

                    hover:bg-red-600
                    hover:text-white

                    dark:bg-slate-800
                    dark:text-slate-300
                  "
                >
                  <FaTiktok />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    flex h-10 w-10
                    items-center justify-center

                    rounded-full

                    bg-slate-100
                    text-slate-700

                    transition

                    hover:bg-red-600
                    hover:text-white

                    dark:bg-slate-800
                    dark:text-slate-300
                  "
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
