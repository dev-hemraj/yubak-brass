import {
  FiArrowUpRight,
  FiClock,
  FiFacebook,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import esewaLogo from "../assets/images/esewa-logo.png";
import cash from "../assets/images/cash.png";
import bankTransfer from "../assets/images/bank-transfer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      name: "Band Baja",
      href: "/services/band-baja",
    },
    {
      name: "Panche Baja",
      href: "/services/panche-baja",
    },
    {
      name: "Bagpiper",
      href: "/services/bagpiper",
    },
    {
      name: "Orchestra Band",
      href: "/services/orchestra-band",
    },
    {
      name: "Chariot / Baggi",
      href: "/services/chariot-baggi",
    },
    {
      name: "Sound System & DJ",
      href: "/services/sound-system-dj",
    },
  ];

  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Videos",
      href: "/video",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const paymentMethods = [
    {
      name: "eSewa",
      image: esewaLogo,
    },
    {
      name: "Cash",
      image: cash,
    },
    {
      name: "Bank Transfer",
      image: bankTransfer,
    },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-slate-950
        text-white
      "
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-red-600/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-slate-700/20
          blur-[150px]
        "
      />

      {/* ================================================= */}
      {/* LARGE CTA */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          pt-16

          sm:px-6
          sm:pt-20

          lg:px-8
          lg:pt-24
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-red-600
            px-7
            py-9

            sm:px-10
            sm:py-11

            lg:px-12
            lg:py-12
          "
        >
          {/* CTA DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-28
              h-[330px]
              w-[330px]
              rounded-full
              border-[60px]
              border-white/[0.06]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              right-[20%]
              h-[280px]
              w-[280px]
              rounded-full
              bg-black/10
              blur-[60px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                Your celebration starts here
              </p>

              <h2
                className="
                  mt-3
                  max-w-3xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-[-0.035em]
                  text-white

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Ready to make your event
                <span className="block">sound unforgettable?</span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/80

                  sm:text-base
                  sm:leading-7
                "
              >
                Tell us about your wedding, ceremony or celebration and our team
                will help you choose the perfect musical experience.
              </p>
            </div>

            <a
              href="/booking"
              className="
                group
                inline-flex
                w-fit
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-full
                bg-white
                px-7
                py-4
                text-sm
                font-bold
                text-slate-950

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-black/20
              "
            >
              Book Your Event
              <FiArrowUpRight
                className="
                  text-lg
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* MAIN FOOTER */}
        {/* ================================================= */}

        <div
          className="
            grid
            gap-12
            py-16

            md:grid-cols-2

            lg:grid-cols-[1.25fr_0.65fr_0.75fr_1.1fr]
            lg:gap-10
            lg:py-20
          "
        >
          {/* ============================================= */}
          {/* BRAND */}
          {/* ============================================= */}

          <div>
            <a
              href="/"
              className="
                inline-flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-600
                  text-lg
                  font-bold
                  text-white
                "
              >
                YB
              </span>

              <div>
                <p
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
                  Yubak Brass Band
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-red-400
                  "
                >
                  Since 1965
                </p>
              </div>
            </a>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              Bringing tradition, energy and unforgettable live music to
              weddings and celebrations across Kathmandu and beyond for more
              than six decades.
            </p>

            {/* SOCIAL */}

            <div className="mt-7">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                "
              >
                Follow Our Performances
              </p>

              <a
                href="https://www.facebook.com/yubakbandbaja"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  mt-4
                  inline-flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-800
                    bg-slate-900
                    text-lg
                    text-white

                    transition-all
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:border-red-600
                    group-hover:bg-red-600
                  "
                >
                  <FiFacebook />
                </span>

                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Facebook
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-slate-500
                    "
                  >
                    Yubak Band Baja
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* ============================================= */}
          {/* QUICK LINKS */}
          {/* ============================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Explore
            </h3>

            <ul
              className="
                mt-6
                space-y-3
              "
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-400

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-red-500

                        transition-all
                        duration-300

                        group-hover:w-3
                      "
                    />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================= */}
          {/* SERVICES */}
          {/* ============================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Services
            </h3>

            <ul
              className="
                mt-6
                space-y-3
              "
            >
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-400

                      transition-colors
                      duration-300

                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-red-500

                        transition-all
                        duration-300

                        group-hover:w-3
                      "
                    />

                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================= */}
          {/* CONTACT */}
          {/* ============================================= */}

          <div>
            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.16em]
                text-white
              "
            >
              Get In Touch
            </h3>

            <div
              className="
                mt-6
                space-y-5
              "
            >
              {/* PHONE */}

              <a
                href="tel:+9779851127729"
                className="
                  group
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900
                    text-red-400

                    transition-all
                    duration-300

                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <FiPhone />
                </span>

                <div>
                  <p
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    Call for booking
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    +977 985-1127729
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    +977 980-3037729
                  </p>
                </div>
              </a>

              {/* EMAIL */}

              <a
                href="mailto:info@yubakbrassband.com"
                className="
                  group
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900
                    text-red-400

                    transition-all
                    duration-300

                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <FiMail />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Email us</p>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    info@yubakbrassband.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}

              <a
                href="https://www.google.com/maps/search/?api=1&query=Chabahil%2C+Kathmandu%2C+Nepal"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900
                    text-red-400

                    transition-all
                    duration-300

                    group-hover:bg-red-600
                    group-hover:text-white
                  "
                >
                  <FiMapPin />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Visit us</p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      leading-6
                      text-white
                    "
                  >
                    Chabahil,
                    <br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </a>

              {/* HOURS */}

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-900
                    text-red-400
                  "
                >
                  <FiClock />
                </span>

                <div>
                  <p className="text-xs text-slate-500">Opening hours</p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Sunday – Friday
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* PAYMENT METHODS */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-6
            border-t
            border-slate-800
            py-8

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-slate-500
              "
            >
              Payment Methods
            </p>

            <p
              className="
                mt-1
                text-sm
                text-slate-400
              "
            >
              Simple and convenient payment options.
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="
                  flex
                  h-14
                  min-w-[92px]
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-800
                  bg-white
                  px-4

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-slate-700
                "
                title={method.name}
              >
                <img
                  src={method.image}
                  alt={`${method.name} payment`}
                  className="
                    max-h-8
                    max-w-[85px]
                    object-contain
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* VERY BOTTOM */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-slate-800
            py-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-xs
              leading-5
              text-slate-500
            "
          >
            © {currentYear} Yubak Brass Band. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
            "
          >
            <a
              href="/privacy-policy"
              className="
                text-xs
                text-slate-500

                transition-colors

                hover:text-white
              "
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="
                text-xs
                text-slate-500

                transition-colors

                hover:text-white
              "
            >
              Terms
            </a>

            <a
              href="#top"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-slate-400

                transition-colors

                hover:text-white
              "
            >
              Back to top
              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
