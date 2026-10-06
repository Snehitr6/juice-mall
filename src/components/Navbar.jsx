import React, { useState } from "react";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    cartCount,
    openCart,
    wishlist = [],
    toggleWishlist,
    isWishlisted,
    addToCart,
  } = useCart();

  const { darkMode, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      scrollToSection("menu");
      return;
    }

    scrollToSection("menu");
  };

  const handleWishlistAdd = (product) => {
    addToCart(product, 1);
    toggleWishlist(product);
    setWishlistOpen(false);
    openCart();
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50
          w-full
          border-b
          border-slate-200/80
          bg-white/95
          backdrop-blur-xl
          dark:border-slate-800
          dark:bg-slate-950/95
        "
      >
        {/* IMPORTANT:
            Full-width container.
            No max-w-7xl / max-w-6xl.
        */}

        <div
          className="
            flex
            h-[66px]
            w-full
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-8
            xl:px-10
            2xl:px-12
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              flex
              shrink-0
              items-center
              gap-2.5
            "
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-orange-400
                to-orange-600
                text-xl
                shadow-md
                shadow-orange-500/20
              "
            >
              🥤
            </span>

            <span
              className="
                text-[17px]
                font-black
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              Juice<span className="text-orange-500"> Mall</span>
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="
              hidden
              items-center
              gap-7
              lg:flex
              xl:gap-8
            "
          >
            {[
              ["Home", "home"],
              ["Menu", "menu"],
              ["About", "about"],
              ["Offers", "offers"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-slate-600
                  transition-colors
                  duration-200
                  hover:text-orange-500
                  dark:text-slate-300
                  dark:hover:text-orange-400
                "
              >
                {label}
              </button>
            ))}
          </nav>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}

          <div
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-600
                transition-all
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-slate-300
                dark:hover:bg-orange-500/10
                dark:hover:text-orange-400
              "
            >
              <Search className="h-[19px] w-[19px]" />
            </button>

            {/* Wishlist */}

            <button
              type="button"
              aria-label="Wishlist"
              onClick={() => setWishlistOpen(true)}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-600
                transition-all
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-slate-300
                dark:hover:bg-orange-500/10
                dark:hover:text-orange-400
              "
            >
              <Heart className="h-[19px] w-[19px]" />

              {wishlist.length > 0 && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}

            <button
              type="button"
              aria-label="Shopping cart"
              onClick={openCart}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-600
                transition-all
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-slate-300
                dark:hover:bg-orange-500/10
                dark:hover:text-orange-400
              "
            >
              <ShoppingBag className="h-[19px] w-[19px]" />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Theme */}

            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-600
                transition-all
                hover:bg-orange-50
                hover:text-orange-500
                dark:text-slate-300
                dark:hover:bg-orange-500/10
                dark:hover:text-orange-400
              "
            >
              {darkMode ? (
                <Sun className="h-[19px] w-[19px]" />
              ) : (
                <Moon className="h-[19px] w-[19px]" />
              )}
            </button>
          </div>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}

          <div className="flex items-center gap-1 lg:hidden">
            {/* Cart */}

            <button
              type="button"
              onClick={openCart}
              aria-label="Shopping cart"
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-700
                dark:text-slate-200
              "
            >
              <ShoppingBag className="h-5 w-5" />

              {cartCount > 0 && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu */}

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((value) => !value)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-slate-700
                dark:text-slate-200
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ===================================================
            SEARCH BAR
        ==================================================== */}

        {searchOpen && (
          <div
            className="
              border-t
              border-slate-100
              bg-white
              px-4
              py-3
              dark:border-slate-800
              dark:bg-slate-950
              lg:px-8
            "
          >
            <form
              onSubmit={handleSearch}
              className="mx-auto flex w-full max-w-[700px] items-center"
            >
              <div
                className="
                  flex
                  h-11
                  w-full
                  items-center
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <Search className="mr-3 h-4 w-4 text-slate-400" />

                <input
                  autoFocus
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search fresh juices..."
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

                <button
                  type="submit"
                  className="
                    rounded-full
                    bg-orange-500
                    px-4
                    py-1.5
                    text-xs
                    font-bold
                    text-white
                  "
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        )}
      </header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div
          className="
            fixed
            inset-x-0
            top-[66px]
            z-40
            border-b
            border-slate-200
            bg-white
            shadow-xl
            dark:border-slate-800
            dark:bg-slate-950
            lg:hidden
          "
        >
          <div className="px-5 py-5">
            <div className="space-y-1">
              {[
                ["Home", "home"],
                ["Menu", "menu"],
                ["About", "about"],
                ["Offers", "offers"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className="
                    flex
                    w-full
                    rounded-xl
                    px-4
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-colors
                    hover:bg-orange-50
                    hover:text-orange-500
                    dark:text-slate-200
                    dark:hover:bg-orange-500/10
                    dark:hover:text-orange-400
                  "
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setWishlistOpen(true);
                  setMobileOpen(false);
                }}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-100
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                "
              >
                <Heart className="h-4 w-4" />
                Wishlist
              </button>

              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                }}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-100
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  dark:bg-slate-900
                  dark:text-slate-200
                "
              >
                {darkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}

                {darkMode ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          WISHLIST DRAWER
      ====================================================== */}

      {wishlistOpen && (
        <div className="fixed inset-0 z-[70]">
          {/* Overlay */}

          <button
            type="button"
            aria-label="Close wishlist"
            onClick={() => setWishlistOpen(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
          />

          {/* Drawer */}

          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              max-w-[430px]
              flex-col
              bg-white
              shadow-2xl
              dark:bg-slate-950
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-5
                py-5
                dark:border-slate-800
              "
            >
              <div>
                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  My Wishlist
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  {wishlist.length} saved item
                  {wishlist.length !== 1 ? "s" : ""}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setWishlistOpen(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                  text-slate-600
                  dark:bg-slate-900
                  dark:text-slate-300
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {wishlist.length === 0 ? (
                <div
                  className="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-orange-50
                      text-orange-500
                      dark:bg-orange-500/10
                    "
                  >
                    <Heart className="h-9 w-9" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    Your wishlist is empty
                  </h3>

                  <p className="mt-2 max-w-[260px] text-sm leading-6 text-slate-500">
                    Save your favorite juices here and order them whenever you
                    want.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setWishlistOpen(false);
                      scrollToSection("menu");
                    }}
                    className="
                      mt-6
                      rounded-full
                      bg-orange-500
                      px-6
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-lg
                      shadow-orange-500/20
                    "
                  >
                    Explore Juices
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlist.map((product) => (
                    <div
                      key={product.id}
                      className="
                        flex
                        gap-3
                        rounded-2xl
                        border
                        border-slate-200
                        p-3
                        dark:border-slate-800
                      "
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                          h-20
                          w-20
                          shrink-0
                          rounded-xl
                          object-cover
                        "
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm font-bold text-orange-500">
                          ₹{product.price}
                        </p>

                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleWishlistAdd(product)}
                            className="
                              rounded-full
                              bg-orange-500
                              px-3
                              py-1.5
                              text-[11px]
                              font-bold
                              text-white
                            "
                          >
                            Add to Cart
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleWishlist(product)}
                            className="
                              rounded-full
                              bg-slate-100
                              px-3
                              py-1.5
                              text-[11px]
                              font-semibold
                              text-slate-600
                              dark:bg-slate-900
                              dark:text-slate-300
                            "
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;