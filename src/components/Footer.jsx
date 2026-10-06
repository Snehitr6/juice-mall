import React from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

/* =========================================================
   SOCIAL ICONS
   Inline SVGs are used so there are no lucide-react
   Facebook / Instagram / YouTube export problems.
========================================================= */

const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.1H8v3h2.6v8h2.9Z" />
  </svg>
);

const XIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M5 4l14 16" />
    <path d="M19 4L5 20" />
  </svg>
);

const YouTubeIcon = ({ className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

/* =========================================================
   FOOTER
========================================================= */

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNewsletter = (event) => {
    event.preventDefault();

    const email = event.currentTarget.email.value.trim();

    if (!email) return;

    event.currentTarget.reset();

    const message = document.getElementById("newsletter-success");

    if (message) {
      message.classList.remove("hidden");

      setTimeout(() => {
        message.classList.add("hidden");
      }, 3500);
    }
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-slate-200
        bg-white
        text-slate-700
        dark:border-slate-800
        dark:bg-slate-950
        dark:text-slate-300
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-orange-100/50
            blur-[100px]
            dark:bg-orange-500/5
          "
        />

        <div
          className="
            absolute
            -right-40
            top-20
            h-[350px]
            w-[350px]
            rounded-full
            bg-emerald-100/50
            blur-[100px]
            dark:bg-emerald-500/5
          "
        />
      </div>

      {/* =====================================================
          NEWSLETTER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pt-16
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-orange-200
            bg-gradient-to-br
            from-orange-50
            via-white
            to-emerald-50
            p-6
            shadow-[0_20px_60px_rgba(15,23,42,0.06)]
            sm:p-8
            lg:p-10
            dark:border-slate-800
            dark:from-slate-900
            dark:via-slate-900
            dark:to-slate-900
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Newsletter text */}

            <div className="max-w-[550px]">
              <div
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-orange-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-orange-600
                  dark:bg-orange-500/10
                  dark:text-orange-400
                "
              >
                <Mail className="h-4 w-4" />

                Fresh Updates
              </div>

              <h2
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-900
                  sm:text-3xl
                  dark:text-white
                "
              >
                Get fresh deals in your inbox
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                Subscribe for fresh juice offers, new arrivals and exclusive
                discounts.
              </p>
            </div>

            {/* Newsletter form */}

            <div className="w-full max-w-[500px]">
              <form
                onSubmit={handleNewsletter}
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <div
                  className="
                    flex
                    min-h-14
                    flex-1
                    items-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-5
                    shadow-sm
                    dark:border-slate-700
                    dark:bg-slate-950
                  "
                >
                  <Mail
                    className="
                      mr-3
                      h-5
                      w-5
                      shrink-0
                      text-slate-400
                    "
                  />

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="
                      w-full
                      bg-transparent
                      text-sm
                      text-slate-900
                      outline-none
                      placeholder:text-slate-400
                      dark:text-white
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex
                    min-h-14
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-600
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-orange-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                  "
                >
                  Subscribe

                  <Send className="h-4 w-4" />
                </button>
              </form>

              <p
                id="newsletter-success"
                className="
                  mt-3
                  hidden
                  text-sm
                  font-semibold
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                ✓ You're subscribed! Fresh updates are on the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          py-14
          sm:px-8
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1.25fr]
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                group
                flex
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
                  bg-gradient-to-br
                  from-orange-400
                  to-orange-600
                  text-2xl
                  shadow-lg
                  shadow-orange-500/20
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >
                🥤
              </span>

              <span
                className="
                  text-xl
                  font-black
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                Juice<span className="text-orange-500">Mall</span>
              </span>
            </button>

            <p
              className="
                mt-5
                max-w-[360px]
                text-sm
                leading-7
                text-slate-500
                dark:text-slate-400
              "
            >
              Freshly squeezed juices, creamy smoothies and delicious drinks
              made with quality ingredients and lots of goodness.
            </p>

            {/* Social icons */}

            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-pink-300
                  hover:bg-pink-50
                  hover:text-pink-600
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-300
                  dark:hover:border-pink-500/40
                  dark:hover:bg-pink-500/10
                  dark:hover:text-pink-400
                "
              >
                <InstagramIcon />
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:bg-blue-50
                  hover:text-blue-600
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-300
                  dark:hover:border-blue-500/40
                  dark:hover:bg-blue-500/10
                  dark:hover:text-blue-400
                "
              >
                <FacebookIcon />
              </a>

              {/* X */}

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-slate-100
                  hover:text-slate-950
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-white
                "
              >
                <XIcon />
              </a>

              {/* YouTube */}

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-red-300
                  hover:bg-red-50
                  hover:text-red-600
                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-300
                  dark:hover:border-red-500/40
                  dark:hover:bg-red-500/10
                  dark:hover:text-red-400
                "
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-wider
                text-slate-900
                dark:text-white
              "
            >
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              {[
                ["Home", "home"],
                ["Menu", "menu"],
                ["About Us", "about"],
                ["Offers", "offers"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-200
                    hover:text-orange-500
                    dark:text-slate-400
                    dark:hover:text-orange-400
                  "
                >
                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:translate-x-1
                      group-hover:opacity-100
                    "
                  />

                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-wider
                text-slate-900
                dark:text-white
              "
            >
              Our Services
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Fresh Juices",
                "Healthy Smoothies",
                "Creamy Shakes",
                "Fruit Bowls",
                "Juice Combos",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection("menu")}
                  className="
                    block
                    text-sm
                    text-slate-500
                    transition-colors
                    duration-200
                    hover:text-orange-500
                    dark:text-slate-400
                    dark:hover:text-orange-400
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-wider
                text-slate-900
                dark:text-white
              "
            >
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                    text-orange-600
                    dark:bg-orange-500/10
                    dark:text-orange-400
                  "
                >
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs text-slate-400">
                    Visit us
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-100
                    text-emerald-600
                    dark:bg-emerald-500/10
                    dark:text-emerald-400
                  "
                >
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs text-slate-400">
                    Call us
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-slate-600
                      hover:text-orange-500
                      dark:text-slate-300
                      dark:hover:text-orange-400
                    "
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-yellow-100
                    text-yellow-600
                    dark:bg-yellow-500/10
                    dark:text-yellow-400
                  "
                >
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs text-slate-400">
                    Email us
                  </p>

                  <a
                    href="mailto:hello@juicemall.com"
                    className="
                      mt-1
                      block
                      text-sm
                      font-medium
                      text-slate-600
                      hover:text-orange-500
                      dark:text-slate-300
                      dark:hover:text-orange-400
                    "
                  >
                    hello@juicemall.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div
        className="
          relative
          border-t
          border-slate-200
          dark:border-slate-800
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            flex-col
            gap-4
            px-5
            py-6
            text-center
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-10
            lg:text-left
            xl:px-12
          "
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} JuiceMall. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                text-sm
                text-slate-500
                transition-colors
                hover:text-orange-500
                dark:text-slate-400
                dark:hover:text-orange-400
              "
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                text-sm
                text-slate-500
                transition-colors
                hover:text-orange-500
                dark:text-slate-400
                dark:hover:text-orange-400
              "
            >
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;