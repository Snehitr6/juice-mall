import React, { useMemo, useState } from "react";
import {
  Check,
  ChevronRight,
  GlassWater,
  Leaf,
  Plus,
  RotateCcw,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const BASES = [
  {
    id: "orange",
    name: "Orange",
    emoji: "🍊",
    price: 99,
    color: "from-orange-400 to-amber-300",
  },
  {
    id: "mango",
    name: "Mango",
    emoji: "🥭",
    price: 119,
    color: "from-yellow-400 to-orange-300",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    emoji: "🍍",
    price: 109,
    color: "from-yellow-300 to-lime-300",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    emoji: "🍉",
    price: 109,
    color: "from-pink-400 to-red-300",
  },
];

const FRUITS = [
  { id: "strawberry", name: "Strawberry", emoji: "🍓", price: 20 },
  { id: "kiwi", name: "Kiwi", emoji: "🥝", price: 20 },
  { id: "banana", name: "Banana", emoji: "🍌", price: 15 },
  { id: "blueberry", name: "Blueberry", emoji: "🫐", price: 25 },
  { id: "apple", name: "Apple", emoji: "🍎", price: 15 },
  { id: "lemon", name: "Lemon", emoji: "🍋", price: 10 },
];

const BOOSTERS = [
  { id: "chia", name: "Chia Seeds", emoji: "🌱", price: 15 },
  { id: "ginger", name: "Ginger", emoji: "🫚", price: 10 },
  { id: "mint", name: "Fresh Mint", emoji: "🌿", price: 10 },
  { id: "honey", name: "Honey", emoji: "🍯", price: 15 },
];

const SIZES = [
  { id: "regular", name: "Regular", subtitle: "350 ml", price: 0 },
  { id: "large", name: "Large", subtitle: "500 ml", price: 30 },
];

const BuildYourJuice = () => {
  const { addToCart } = useCart();

  const [base, setBase] = useState(BASES[0]);
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedBoosters, setSelectedBoosters] = useState([]);
  const [size, setSize] = useState(SIZES[0]);
  const [quantity, setQuantity] = useState(1);

  const toggleFruit = (fruit) => {
    setSelectedFruits((previous) => {
      const exists = previous.some((item) => item.id === fruit.id);

      if (exists) {
        return previous.filter((item) => item.id !== fruit.id);
      }

      if (previous.length >= 3) {
        return previous;
      }

      return [...previous, fruit];
    });
  };

  const toggleBooster = (booster) => {
    setSelectedBoosters((previous) => {
      const exists = previous.some((item) => item.id === booster.id);

      if (exists) {
        return previous.filter((item) => item.id !== booster.id);
      }

      return [...previous, booster];
    });
  };

  const totalPrice = useMemo(() => {
    const fruitTotal = selectedFruits.reduce(
      (total, item) => total + item.price,
      0
    );

    const boosterTotal = selectedBoosters.reduce(
      (total, item) => total + item.price,
      0
    );

    return base.price + fruitTotal + boosterTotal + size.price;
  }, [base, selectedFruits, selectedBoosters, size]);

  const resetBuilder = () => {
    setBase(BASES[0]);
    setSelectedFruits([]);
    setSelectedBoosters([]);
    setSize(SIZES[0]);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    const customJuice = {
      id: `custom-juice-${base.id}-${size.id}-${Date.now()}`,
      name: `${base.name} Custom Juice`,
      category: "Custom Juice",
      price: totalPrice,
      image: "/images/hero-juice.jpg",
      description: `Custom ${base.name.toLowerCase()} juice with ${selectedFruits
        .map((fruit) => fruit.name.toLowerCase())
        .join(", ") || "fresh ingredients"}.`,
      rating: 5,
      quantity: 1,
      customization: {
        base: base.name,
        size: size.name,
        fruits: selectedFruits.map((fruit) => fruit.name),
        boosters: selectedBoosters.map((booster) => booster.name),
      },
    };

    addToCart(customJuice, quantity);
  };

  return (
    <section
      id="build-juice"
      className="relative overflow-hidden bg-[#fffaf3] py-20 dark:bg-slate-950"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10" />

      <div className="relative mx-auto w-[94%] max-w-[1450px]">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-500 shadow-sm dark:border-orange-500/20 dark:bg-slate-900">
            <Sparkles size={16} />
            Create Something Fresh
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            Build Your
            <span className="text-orange-500"> Perfect Juice</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            Pick your favorite base, add fresh fruits and finish it
            with your favorite boosters.
          </p>
        </div>

        {/* Main Builder */}
        <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)] lg:grid-cols-[1.25fr_0.75fr] dark:border-slate-800 dark:bg-slate-900">

          {/* LEFT */}
          <div className="p-6 sm:p-8 lg:p-10">

            {/* Step 1 */}
            <div className="mb-10">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                    Step 01
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                    Choose Your Base
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/10">
                  <GlassWater size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {BASES.map((item) => {
                  const active = base.id === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBase(item)}
                      className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/10 dark:border-orange-400 dark:bg-orange-500/10"
                          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                      }`}
                    >
                      {active && (
                        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white">
                          <Check size={14} />
                        </span>
                      )}

                      <div
                        className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl`}
                      >
                        {item.emoji}
                      </div>

                      <p className="font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-orange-500">
                        ₹{item.price}
                      </p>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">

              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                    Step 02
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                    Add Fresh Fruits
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  {selectedFruits.length}/3 selected
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                {FRUITS.map((item) => {
                  const active = selectedFruits.some(
                    (fruit) => fruit.id === item.id
                  );

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleFruit(item)}
                      className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ${
                        active
                          ? "border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-500/10"
                          : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-slate-700 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-2xl dark:bg-slate-800">
                        {item.emoji}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">
                          {item.name}
                        </span>

                        <span className="text-xs font-semibold text-slate-400">
                          +₹{item.price}
                        </span>
                      </span>

                      {active ? (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                          <Check size={13} />
                        </span>
                      ) : (
                        <Plus
                          size={18}
                          className="shrink-0 text-slate-400"
                        />
                      )}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-10">

              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-purple-500">
                  Step 03
                </p>

                <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                  Boost Your Juice
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {BOOSTERS.map((item) => {
                  const active = selectedBoosters.some(
                    (booster) => booster.id === item.id
                  );

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleBooster(item)}
                      className={`relative rounded-2xl border p-4 text-center transition-all duration-300 ${
                        active
                          ? "border-purple-500 bg-purple-50 dark:border-purple-400 dark:bg-purple-500/10"
                          : "border-slate-200 hover:-translate-y-1 hover:border-purple-300 dark:border-slate-700"
                      }`}
                    >
                      {active && (
                        <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-white">
                          <Check size={12} />
                        </span>
                      )}

                      <span className="text-3xl">
                        {item.emoji}
                      </span>

                      <span className="mt-2 block text-xs font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </span>

                      <span className="mt-1 block text-xs font-semibold text-slate-400">
                        +₹{item.price}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Step 4 */}
            <div>

              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">
                  Step 04
                </p>

                <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
                  Pick Your Size
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">

                {SIZES.map((item) => {
                  const active = size.id === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSize(item)}
                      className={`flex items-center justify-between rounded-2xl border p-4 transition-all ${
                        active
                          ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10"
                          : "border-slate-200 hover:border-blue-300 dark:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-500 dark:bg-blue-500/10">
                          <GlassWater size={20} />
                        </div>

                        <div className="text-left">
                          <p className="font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            {item.subtitle}
                          </p>
                        </div>

                      </div>

                      <div>
                        {item.price > 0 ? (
                          <span className="font-bold text-blue-500">
                            +₹{item.price}
                          </span>
                        ) : (
                          <span className="font-bold text-emerald-500">
                            Included
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}

              </div>
            </div>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="relative bg-slate-950 p-6 text-white sm:p-8 lg:p-10">

            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative">

              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">
                  <ShoppingCart size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Your creation
                  </p>

                  <h3 className="text-2xl font-black">
                    {base.name} Juice
                  </h3>
                </div>
              </div>

              {/* Preview */}
              <div className="mb-7 flex min-h-[220px] items-center justify-center rounded-[28px] bg-gradient-to-br from-orange-400/20 via-yellow-300/10 to-emerald-400/10">

                <div className="relative">

                  <div className="flex h-40 w-28 items-center justify-center rounded-b-[40px] rounded-t-2xl border-4 border-white/30 bg-gradient-to-b from-orange-300/80 to-orange-500/80 text-6xl shadow-2xl backdrop-blur-sm">
                    {base.emoji}
                  </div>

                  <div className="absolute -right-5 -top-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-2xl shadow-lg">
                    🥝
                  </div>

                  <div className="absolute -left-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-pink-400 text-xl shadow-lg">
                    🍓
                  </div>

                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">
                    Base
                  </span>

                  <span className="font-bold">
                    {base.name}
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">
                    Fruits
                  </span>

                  <span className="max-w-[180px] text-right text-sm font-semibold">
                    {selectedFruits.length > 0
                      ? selectedFruits.map((fruit) => fruit.name).join(", ")
                      : "No extra fruits"}
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">
                    Boosters
                  </span>

                  <span className="max-w-[180px] text-right text-sm font-semibold">
                    {selectedBoosters.length > 0
                      ? selectedBoosters
                          .map((booster) => booster.name)
                          .join(", ")
                      : "No boosters"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-slate-400">
                    Size
                  </span>

                  <span className="font-bold">
                    {size.name}
                  </span>
                </div>

              </div>

              {/* Quantity */}
              <div className="mt-6 flex items-center justify-between">

                <span className="font-semibold text-slate-300">
                  Quantity
                </span>

                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((previous) =>
                        Math.max(1, previous - 1)
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20"
                  >
                    −
                  </button>

                  <span className="w-6 text-center font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((previous) =>
                        Math.min(10, previous + 1)
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-lg transition hover:bg-white/20"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Total */}
              <div className="mt-7 rounded-2xl bg-white/5 p-5">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-sm text-slate-400">
                      Total
                    </p>

                    <p className="mt-1 text-4xl font-black">
                      ₹{totalPrice * quantity}
                    </p>
                  </div>

                  <p className="text-sm text-slate-400">
                    ₹{totalPrice} each
                  </p>

                </div>

              </div>

              {/* Add Cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 font-black text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
              >
                <ShoppingCart size={20} />
                Add Custom Juice to Cart
                <ChevronRight size={19} />
              </button>

              {/* Reset */}
              <button
                type="button"
                onClick={resetBuilder}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                <RotateCcw size={16} />
                Start Again
              </button>

              {/* Bottom Trust */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
                <Leaf size={15} className="text-emerald-400" />
                Made fresh with quality ingredients
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourJuice;