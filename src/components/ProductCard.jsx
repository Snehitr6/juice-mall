import React from "react";
import {
  Heart,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
  } = useCart();

  const liked = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-orange-950/20">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-orange-50 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(event) => {
            event.currentTarget.src =
              "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Wishlist */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={
            liked ? "Remove from wishlist" : "Add to wishlist"
          }
          className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 ${
            liked
              ? "border-red-200 bg-red-500 text-white"
              : "border-white/70 bg-white/90 text-slate-600 hover:bg-white hover:text-red-500 dark:border-slate-600 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-red-400"
          }`}
        >
          <Heart
            size={19}
            fill={liked ? "currentColor" : "none"}
            strokeWidth={2}
          />
        </button>

        {/* Category */}
        {product.category && (
          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-orange-600 shadow-md backdrop-blur-md dark:bg-slate-900/90 dark:text-orange-400">
            {product.category}
          </div>
        )}

        {/* Quick Add */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white opacity-0 shadow-xl shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Plus size={17} />
          Quick Add
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1.5">
          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 dark:bg-yellow-500/10">
            <Star
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-400">
              {product.rating || "4.8"}
            </span>
          </div>
        </div>

        {/* Product Name */}
        <h3 className="line-clamp-1 text-lg font-extrabold text-slate-900 dark:text-white">
          {product.name}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[48px] line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {product.description ||
            "Freshly prepared with quality ingredients for a delicious and refreshing experience."}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <span className="text-xl font-black text-slate-900 dark:text-white">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="ml-2 text-sm font-medium text-slate-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-11 items-center gap-2 rounded-xl bg-slate-900 px-4 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 dark:bg-white dark:text-slate-900 dark:hover:bg-orange-500 dark:hover:text-white"
          >
            <ShoppingBag size={17} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;