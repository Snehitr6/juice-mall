import React, { useCallback, useState } from "react";

import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import BuildYourJuice from "./components/BuildYourJuice";
import Offers from "./components/Offers";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      {/* Preloader */}
      {loading && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

      {/* Fixed Navbar */}
      {!loading && <Navbar />}

      {/* Main Application */}
      <div
        className={`juice-app ${
          loading
            ? "juice-app-hidden"
            : "juice-app-visible"
        }`}
      >
        <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

          <main>
            {/* Hero */}
            <Hero />

            {/* Products */}
            <ProductSection />

            {/* NEW - Build Your Own Juice */}
            <BuildYourJuice />

            {/* Offers */}
            <Offers />

            {/* About */}
            <About />

            {/* Testimonials */}
            <Testimonials />

            {/* Contact */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Cart */}
          <CartDrawer />

          {/* Scroll Top */}
          <ScrollToTop />

        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;