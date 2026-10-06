import React from "react";
import {
  ArrowRight,
  Leaf,
  Sparkles,
  ShoppingBag,
  Star,
} from "lucide-react";

const HERO_IMAGE =
  "https://images.pexels.com/photos/11789745/pexels-photo-11789745.jpeg?auto=compress&cs=tinysrgb&w=1400";

const Hero = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById("menu");

    if (menu) {
      menu.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToOffers = () => {
    const offers = document.getElementById("offers");

    if (offers) {
      offers.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-[#fffaf3] dark:bg-slate-950"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />

      <div className="pointer-events-none absolute left-[45%] top-20 h-40 w-40 rounded-full bg-yellow-200/20 blur-3xl dark:bg-yellow-500/10" />

      {/* HERO CONTENT */}
      <div
        className="
          mx-auto
          grid
          min-h-[calc(100vh-82px)]
          w-full
          max-w-[1700px]
          grid-cols-1
          items-center
          gap-8
          px-6
          py-12
          sm:px-8
          lg:grid-cols-[0.82fr_1.18fr]
          lg:gap-2
          lg:px-10
          lg:py-8
          xl:px-12
        "
      >
        {/* =====================================
            LEFT CONTENT
        ====================================== */}
        <div className="relative z-10 max-w-2xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm backdrop-blur-sm dark:border-orange-500/20 dark:bg-slate-900/80 dark:text-orange-400">
            <Sparkles size={17} />

            <span>Fresh • Healthy • Delicious</span>
          </div>

          {/* Heading */}
          <h1
            className="
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.045em]
              text-slate-950
              sm:text-6xl
              lg:text-[68px]
              xl:text-[78px]
              2xl:text-[84px]
              dark:text-white
            "
          >
            Taste the

            <span className="block text-orange-500">
              Freshness.
            </span>

            <span className="block">
              Feel the
            </span>

            <span className="block text-emerald-500">
              Goodness.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-xl
              text-base
              font-medium
              leading-8
              text-slate-600
              sm:text-lg
              dark:text-slate-300
            "
          >
            Freshly squeezed juices, creamy smoothies and
            delicious shakes made from quality ingredients.
            Your perfect refreshing drink is just one sip
            away.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <button
              type="button"
              onClick={scrollToMenu}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-orange-500
                px-7
                py-4
                font-bold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-600
                hover:shadow-xl
              "
            >
              Explore Menu
              <ArrowRight size={19} />
            </button>

            <button
              type="button"
              onClick={scrollToOffers}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-white
                px-7
                py-4
                font-bold
                text-slate-800
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-orange-200
                hover:text-orange-500
                hover:shadow-lg
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
              "
            >
              <ShoppingBag size={18} />
              View Offers
            </button>

          </div>

          {/* Rating */}
          <div className="mt-9 flex flex-wrap items-center gap-5">

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}
            </div>

            <div className="h-5 w-px bg-slate-300 dark:bg-slate-700" />

            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Loved by 10,000+ juice lovers
            </p>

          </div>
        </div>

        {/* =====================================
            RIGHT IMAGE
        ====================================== */}
        <div
          className="
            relative
            flex
            min-h-[430px]
            w-full
            items-center
            justify-end
            lg:min-h-[600px]
          "
        >

          {/* Orange glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-[8%]
              h-[380px]
              w-[380px]
              rounded-full
              bg-orange-200/30
              blur-3xl
              dark:bg-orange-500/10
              sm:h-[500px]
              sm:w-[500px]
            "
          />

          {/* Green glow */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[3%]
              left-[10%]
              h-44
              w-44
              rounded-full
              bg-green-200/30
              blur-3xl
              dark:bg-green-500/10
            "
          />

          {/* IMAGE WRAPPER */}
          <div
            className="
              relative
              z-10
              w-full
              lg:w-[calc(100%+40px)]
              xl:w-[calc(100%+70px)]
              2xl:w-[calc(100%+90px)]
            "
          >

            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[36px]
                shadow-[0_30px_80px_rgba(15,23,42,0.18)]
                lg:rounded-[40px]
              "
            >
              <img
                src={HERO_IMAGE}
                alt="Fresh fruit smoothie surrounded by fresh fruits"
                className="
                  h-[430px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105
                  sm:h-[520px]
                  lg:h-[575px]
                  xl:h-[600px]
                "
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
            </div>

            {/* =================================
                FRESH INGREDIENTS CARD
            ================================== */}
            <div
              className="
                absolute
                right-0
                top-8
                z-20
                hidden
                rounded-2xl
                bg-white
                p-4
                shadow-2xl
                sm:flex
                sm:items-center
                sm:gap-3
                dark:bg-slate-900
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-100
                  text-emerald-500
                  dark:bg-emerald-500/10
                "
              >
                <Leaf size={25} />
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Naturally
                </p>

                <p className="font-bold text-slate-900 dark:text-white">
                  Fresh Ingredients
                </p>
              </div>
            </div>

            {/* =================================
                RATING CARD
            ================================== */}
            <div
              className="
                absolute
                bottom-7
                left-0
                z-20
                rounded-2xl
                bg-white
                px-5
                py-4
                shadow-2xl
                dark:bg-slate-900
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-100
                    text-orange-500
                    dark:bg-orange-500/10
                  "
                >
                  <Star
                    size={21}
                    fill="currentColor"
                  />
                </div>

                <div>
                  <p className="text-lg font-black text-slate-900 dark:text-white">
                    4.9/5
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Customer Rating
                  </p>
                </div>

              </div>
            </div>

            {/* Mango Badge */}
            <div
              className="
                absolute
                left-[8%]
                top-[8%]
                z-20
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border-8
                border-white
                bg-orange-100
                text-3xl
                shadow-xl
                dark:border-slate-900
              "
            >
              🥭
            </div>

            {/* Kiwi Badge */}
            <div
              className="
                absolute
                bottom-[15%]
                right-[5%]
                z-20
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border-8
                border-white
                bg-green-100
                text-3xl
                shadow-xl
                dark:border-slate-900
              "
            >
              🥝
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;