import React from "react";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Fresh",
      text: "Fresh fruits and premium ingredients in every glass.",
    },
    {
      icon: Heart,
      title: "Made With Love",
      text: "Every drink is carefully prepared for the best taste.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      text: "We never compromise on quality, freshness or hygiene.",
    },
    {
      icon: Users,
      title: "Happy Customers",
      text: "Thousands of juice lovers choose Juice Mall every day.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
            About Juice Mall
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Freshness You Can{" "}
            <span className="text-orange-500">Taste</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            We believe healthy drinks should be delicious, refreshing and
            exciting. That is why every Juice Mall drink is prepared using
            carefully selected ingredients and fresh fruits.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-orange-400/20 via-yellow-300/20 to-green-400/20 blur-2xl transition duration-500 group-hover:blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=85"
                alt="Fresh orange juice"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-md">
                  <p className="text-sm font-medium text-white/80">
                    Freshly prepared
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    Every single day 🍊
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
              More than just a juice shop.
            </h3>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              From classic fruit juices to smoothies, shakes and refreshing
              coolers, Juice Mall brings together a delicious range of drinks
              for every mood.
            </p>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Our goal is simple — serve fresh, tasty and high-quality drinks
              while creating an experience that keeps you coming back.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-orange-50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-orange-500/30 dark:hover:bg-slate-900"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition duration-300 group-hover:scale-110 dark:bg-orange-500/10">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Our Menu
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;