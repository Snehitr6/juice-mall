import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleMenuClick = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-20 dark:bg-slate-900"
    >
      {/* Decorative backgrounds */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl dark:bg-green-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
            Get In Touch
          </span>

          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let's Talk About{" "}
            <span className="text-orange-500">Juice</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Have a question, suggestion or want to know more about our fresh
            drinks? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact information */}
          <div className="rounded-3xl bg-slate-900 p-7 text-white shadow-xl sm:p-9 dark:bg-slate-950">
            <h3 className="text-2xl font-bold">
              Contact Juice Mall
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Visit us, call us or send us a message. Our team is always ready
              to help.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold">Our Location</p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    123 Fresh Street,
                    <br />
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href="mailto:hello@juicemall.com"
                    className="mt-1 block text-sm text-slate-400 transition hover:text-orange-400"
                  >
                    hello@juicemall.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Opening Hours</p>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-400">
                  Monday - Sunday
                </span>

                <span className="font-semibold text-orange-400">
                  9:00 AM - 10:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-9 dark:border-slate-800 dark:bg-slate-950">
            {submitted ? (
              <div className="flex min-h-[470px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                  <CheckCircle2 size={42} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Message Sent!
                </h3>

                <p className="mt-3 max-w-md leading-7 text-slate-600 dark:text-slate-400">
                  Thank you for contacting Juice Mall. We have received your
                  message and will get back to you soon.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send us a message
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Fill out the form and we'll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Name
                      </label>

                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                      >
                        Email
                      </label>

                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Phone
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      rows={5}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-7 text-center text-white shadow-xl sm:p-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Ready for something fresh?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-orange-50 sm:text-base">
            Explore our menu and discover your new favourite drink.
          </p>

          <button
            type="button"
            onClick={handleMenuClick}
            className="mt-6 rounded-full bg-white px-7 py-3 font-bold text-orange-600 transition hover:-translate-y-1 hover:bg-orange-50"
          >
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;