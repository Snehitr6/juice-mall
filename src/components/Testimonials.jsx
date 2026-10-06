import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Regular Customer",
      avatar: "PS",
      rating: 5,
      text: "The mango juice is absolutely amazing! It tastes fresh, natural and delicious. Juice Mall has become my favourite place for refreshing drinks.",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      role: "Happy Customer",
      avatar: "RK",
      rating: 5,
      text: "I ordered the family combo and everything was fresh and perfectly packed. Great taste, good portions and really quick service.",
    },
    {
      id: 3,
      name: "Ananya Rao",
      role: "Juice Lover",
      avatar: "AR",
      rating: 5,
      text: "The strawberry smoothie is fantastic. I love that there are so many options to choose from. Highly recommended!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-orange-50 px-4 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-6 lg:px-8"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl dark:bg-yellow-500/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm dark:border-orange-500/20 dark:bg-slate-800 dark:text-orange-400">
            <Quote size={16} />
            Customer Love
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Fresh flavours and happy customers are what make Juice Mall
            special.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-100/60 dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-orange-950/20"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-transform duration-300 group-hover:rotate-6 dark:bg-orange-500/10 dark:text-orange-400">
                <Quote size={20} />
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="min-h-[145px] text-sm leading-7 text-slate-600 dark:text-slate-300">
                “{testimonial.text}”
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100 dark:bg-slate-700" />

              {/* Customer */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 text-sm font-black text-white shadow-md">
                  {testimonial.avatar}
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm sm:grid-cols-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="border-b border-slate-100 px-6 py-6 text-center sm:border-b-0 sm:border-r dark:border-slate-700">
            <div className="text-3xl font-black text-orange-500">4.9/5</div>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Average Rating
            </p>
          </div>

          <div className="border-b border-slate-100 px-6 py-6 text-center sm:border-b-0 sm:border-r dark:border-slate-700">
            <div className="text-3xl font-black text-orange-500">10K+</div>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Happy Customers
            </p>
          </div>

          <div className="px-6 py-6 text-center">
            <div className="text-3xl font-black text-orange-500">100%</div>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              Fresh Ingredients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;