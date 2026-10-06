import React from "react";
import { ArrowRight, Check, Gift, Sparkles, Tag } from "lucide-react";

const Offers = () => {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const offers = [
    {
      id: 1,
      title: "Buy 2 Get 1 Free",
      subtitle: "Freshness for everyone",
      description:
        "Pick any two regular juices and get your third juice absolutely free.",
      discount: "BUY 2 + GET 1",
      icon: Gift,
      image:
        "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",
      button: "Shop Now",
    },
    {
      id: 2,
      title: "Summer Refresh",
      subtitle: "Cool. Fresh. Delicious.",
      description:
        "Enjoy refreshing fruit juices and smoothies starting from just ₹99.",
      discount: "FROM ₹99",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=85",
      button: "Explore Menu",
    },
    {
      id: 3,
      title: "Family Combo",
      subtitle: "More juice, more happiness",
      description:
        "A delicious family combo with four refreshing drinks at a special price.",
      discount: "SAVE 25%",
      icon: Tag,
      image:
        "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
      button: "Get Combo",
    },
  ];

  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-yellow-50 px-4 py-20 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl dark:bg-yellow-500/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm dark:border-orange-500/20 dark:bg-slate-800 dark:text-orange-400">
            <Sparkles size={16} />
            Fresh Deals Just For You
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Refreshing{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Grab our exclusive juice deals and enjoy more freshness for less.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => {
            const Icon = offer.icon;

            return (
              <article
                key={offer.id}
                className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-lg shadow-orange-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-200/50 dark:border-slate-700 dark:bg-slate-800 dark:shadow-none"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Discount badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-black tracking-wide text-white shadow-lg">
                    <Icon size={15} />
                    {offer.discount}
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-sm font-semibold text-white/90">
                      {offer.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {offer.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {offer.description}
                  </p>

                  <div className="my-5 h-px bg-slate-100 dark:bg-slate-700" />

                  {/* Features */}
                  <div className="mb-5 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      Fresh ingredients
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      Made fresh to order
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={index === 2 ? scrollToContact : scrollToMenu}
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/25 dark:bg-white dark:text-slate-900 dark:hover:bg-orange-500 dark:hover:text-white"
                  >
                    {offer.button}
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-8 shadow-xl shadow-orange-200/40 sm:p-10 dark:shadow-orange-900/20">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <Gift size={22} className="text-white" />
                <span className="font-bold text-white">
                  Limited Time Offer
                </span>
              </div>

              <h3 className="text-2xl font-black text-white sm:text-3xl">
                Fresh juices. Better prices. More happiness.
              </h3>

              <p className="mt-2 text-sm text-white/85 sm:text-base">
                Don't miss our latest deals and refreshing combos.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToMenu}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-orange-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:text-white"
            >
              View All Juices
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;