import React, { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";

import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductSection = ({ searchTerm = "", setSearchTerm = () => {} }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = [
    "All",
    "Fresh Juices",
    "Smoothies",
    "Shakes",
    "Coolers",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Search filter
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();

      result = result.filter((product) => {
        return (
          product.name?.toLowerCase().includes(search) ||
          product.category?.toLowerCase().includes(search) ||
          product.description?.toLowerCase().includes(search)
        );
      });
    }

    // Sorting
    if (sortBy === "low") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortBy === "high") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchTerm, sortBy]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section
      id="menu"
      className="scroll-mt-24 bg-white px-4 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-400">
            <Sparkles size={16} />
            Freshly Made For You
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Fresh Menu
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Discover refreshing juices, creamy smoothies, delicious shakes and
            cool drinks made with fresh ingredients.
          </p>
        </div>

        {/* Search + Sort */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search juices, smoothies..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-orange-500 dark:focus:bg-slate-900"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <SlidersHorizontal size={17} />
              Sort
            </div>

            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="default">Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-orange-500/50 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Result Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "drink" : "drinks"} available
          </p>

          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-sm font-bold text-orange-500 transition hover:text-orange-600"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/10">
              <Search size={28} />
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              No drinks found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
                setSortBy("default");
              }}
              className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Show All Drinks
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;