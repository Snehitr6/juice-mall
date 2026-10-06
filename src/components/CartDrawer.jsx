import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Lock,
  Minus,
  Phone,
  Plus,
  QrCode,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Trash2,
  User,
  Wallet,
  X,
} from "lucide-react";

import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const {
    cartItems,
    cartOpen,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useCart();

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState("details");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const finalTotal = Number(cartTotal || 0) + deliveryFee;

  const itemCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 1),
    0
  );

  const updateCustomer = (field, value) => {
    setCustomer((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const validateDetails = () => {
    const newErrors = {};

    if (!customer.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!customer.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(customer.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!customer.address.trim()) {
      newErrors.address = "Please enter your delivery address";
    }

    if (!customer.city.trim()) {
      newErrors.city = "Please enter your city";
    }

    if (!customer.pincode.trim()) {
      newErrors.pincode = "Please enter your pincode";
    } else if (!/^\d{6}$/.test(customer.pincode.trim())) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const openCheckout = () => {
    if (!cartItems.length) return;

    setCheckoutOpen(true);
    setPaymentStep("details");
    setOrderSuccess(false);
    setProcessing(false);
  };

  const closeCheckout = () => {
    if (processing) return;

    setCheckoutOpen(false);
    setPaymentStep("details");
    setOrderSuccess(false);
    setErrors({});
  };

  const goToPayment = () => {
    if (!validateDetails()) return;

    setPaymentStep("payment");
  };

  const goBackToDetails = () => {
    setPaymentStep("details");
  };

  const generateOrderId = () => {
    return `JM${Date.now().toString().slice(-8)}`;
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    if (paymentMethod === "upi") {
      const upiInput = event.currentTarget.querySelector(
        'input[name="upi"]'
      );

      if (!upiInput?.value.trim()) {
        setErrors({
          payment: "Please enter your UPI ID",
        });
        return;
      }

      if (!/^[\w.-]+@[\w.-]+$/.test(upiInput.value.trim())) {
        setErrors({
          payment: "Please enter a valid UPI ID",
        });
        return;
      }
    }

    if (paymentMethod === "card") {
      const cardNumber = event.currentTarget.querySelector(
        'input[name="cardNumber"]'
      );
      const expiry = event.currentTarget.querySelector(
        'input[name="expiry"]'
      );
      const cvv = event.currentTarget.querySelector(
        'input[name="cvv"]'
      );

      if (!cardNumber?.value.trim()) {
        setErrors({
          payment: "Please enter your card number",
        });
        return;
      }

      if (cardNumber.value.replace(/\s/g, "").length !== 16) {
        setErrors({
          payment: "Card number must contain 16 digits",
        });
        return;
      }

      if (!expiry?.value.trim()) {
        setErrors({
          payment: "Please enter card expiry",
        });
        return;
      }

      if (!cvv?.value.trim() || cvv.value.length !== 3) {
        setErrors({
          payment: "Please enter a valid 3-digit CVV",
        });
        return;
      }
    }

    setErrors({});
    setProcessing(true);

    // Demo payment processing
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setProcessing(false);
    setOrderSuccess(true);

    // Save demo order locally
    const order = {
      id: generateOrderId(),
      customer,
      items: cartItems,
      subtotal: Number(cartTotal || 0),
      deliveryFee,
      total: finalTotal,
      paymentMethod,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("juice-mall-last-order", JSON.stringify(order));

    clearCart();
  };

  const continueShopping = () => {
    setCheckoutOpen(false);
    setOrderSuccess(false);
    setPaymentStep("details");
    closeCart();

    setTimeout(() => {
      document.getElementById("menu")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const viewOrders = () => {
    setCheckoutOpen(false);
    setOrderSuccess(false);
    closeCart();

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <>
      {/* CART BACKDROP */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* CART DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-[110] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-500 dark:bg-slate-900 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 dark:border-slate-700">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-black text-slate-900 dark:text-white">
              <ShoppingBag size={21} className="text-orange-500" />
              Your Cart
            </h2>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>

          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-orange-100 hover:text-orange-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-orange-500/10 dark:hover:text-orange-400"
            aria-label="Close cart"
          >
            <X size={19} />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {cartItems.length === 0 ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-500/10">
                <ShoppingBag size={34} />
              </div>

              <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white">
                Your cart is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                Add some fresh juices, smoothies or shakes to get started.
              </p>

              <button
                type="button"
                onClick={continueShopping}
                className="mt-6 flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Menu
                <ArrowRight size={17} />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="line-clamp-2 text-sm font-extrabold text-slate-900 dark:text-white">
                          {item.name}
                        </h3>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/10"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="mt-1 text-sm font-black text-orange-500">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-slate-200 bg-white dark:border-slate-600 dark:bg-slate-900">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-8 w-8 items-center justify-center text-slate-600 hover:text-orange-500 dark:text-slate-300"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="w-8 text-center text-sm font-bold text-slate-900 dark:text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-8 w-8 items-center justify-center text-slate-600 hover:text-orange-500 dark:text-slate-300"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <span className="text-sm font-black text-slate-900 dark:text-white">
                          ₹
                          {(
                            Number(item.price) * Number(item.quantity || 1)
                          ).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Clear */}
              <button
                type="button"
                onClick={clearCart}
                className="flex items-center gap-2 text-sm font-bold text-red-500 transition hover:text-red-600"
              >
                <Trash2 size={15} />
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-slate-700 dark:bg-slate-900">
            <div className="space-y-3">
              <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Subtotal</span>
                <span>
                  ₹{Number(cartTotal || 0).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between border-t border-slate-100 pt-3 dark:border-slate-700">
                <span className="font-black text-slate-900 dark:text-white">
                  Total
                </span>

                <span className="text-xl font-black text-orange-500">
                  ₹{finalTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={openCheckout}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:shadow-xl"
            >
              Proceed to Checkout
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </aside>

      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-900">
            {/* Checkout Header */}
            {!orderSuccess && (
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 dark:border-slate-700 sm:px-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
                    Juice Mall Checkout
                  </p>

                  <h2 className="mt-1 text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
                    {paymentStep === "details"
                      ? "Delivery Details"
                      : "Secure Payment"}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeCheckout}
                  disabled={processing}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800 dark:text-slate-300"
                >
                  <X size={19} />
                </button>
              </div>
            )}

            {/* SUCCESS */}
            {orderSuccess ? (
              <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-12 text-center sm:px-12">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                  <Check size={48} strokeWidth={3} />
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-widest text-green-600 dark:text-green-400">
                  Payment Successful
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                  Order Confirmed!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Your payment has been successfully processed. Your fresh
                  drinks are being prepared.
                </p>

                <div className="mt-7 w-full max-w-md rounded-2xl border border-green-200 bg-green-50 p-5 text-left dark:border-green-500/20 dark:bg-green-500/5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Order Status
                    </span>

                    <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                      Confirmed
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Amount Paid
                    </span>

                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      Payment
                    </span>

                    <span className="text-sm font-bold uppercase text-orange-500">
                      {paymentMethod}
                    </span>
                  </div>
                </div>

                <div className="mt-7 grid w-full max-w-md gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={continueShopping}
                    className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-black text-white transition hover:bg-orange-600"
                  >
                    Continue Shopping
                    <ArrowRight size={17} />
                  </button>

                  <button
                    type="button"
                    onClick={viewOrders}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-black text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    View Order Info
                  </button>
                </div>
              </div>
            ) : (
              <div className="overflow-y-auto px-5 py-6 sm:px-7">
                {/* STEP 1 */}
                {paymentStep === "details" && (
                  <div>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-orange-500 px-4 py-3 text-center text-xs font-black text-white">
                        1. Details
                      </div>

                      <div className="rounded-xl bg-slate-100 px-4 py-3 text-center text-xs font-black text-slate-400 dark:bg-slate-800">
                        2. Payment
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          Full Name
                        </label>

                        <div className="relative">
                          <User
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            value={customer.name}
                            onChange={(event) =>
                              updateCustomer("name", event.target.value)
                            }
                            placeholder="Enter your full name"
                            className={`h-12 w-full rounded-xl border bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:bg-slate-800 dark:text-white ${
                              errors.name
                                ? "border-red-400"
                                : "border-slate-200 dark:border-slate-700"
                            }`}
                          />
                        </div>

                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          Phone Number
                        </label>

                        <div className="relative">
                          <Phone
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            value={customer.phone}
                            maxLength={10}
                            onChange={(event) =>
                              updateCustomer(
                                "phone",
                                event.target.value.replace(/\D/g, "")
                              )
                            }
                            placeholder="10-digit number"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          />
                        </div>

                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          Pincode
                        </label>

                        <input
                          value={customer.pincode}
                          maxLength={6}
                          onChange={(event) =>
                            updateCustomer(
                              "pincode",
                              event.target.value.replace(/\D/g, "")
                            )
                          }
                          placeholder="6-digit pincode"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />

                        {errors.pincode && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.pincode}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          Delivery Address
                        </label>

                        <textarea
                          value={customer.address}
                          onChange={(event) =>
                            updateCustomer("address", event.target.value)
                          }
                          placeholder="House number, street, area..."
                          rows={3}
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />

                        {errors.address && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.address}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          City
                        </label>

                        <input
                          value={customer.city}
                          onChange={(event) =>
                            updateCustomer("city", event.target.value)
                          }
                          placeholder="Enter your city"
                          className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />

                        {errors.city && (
                          <p className="mt-1 text-xs text-red-500">
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={goToPayment}
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
                    >
                      Continue to Payment
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {paymentStep === "payment" && (
                  <form onSubmit={handlePayment}>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={goBackToDetails}
                        className="rounded-xl bg-green-100 px-4 py-3 text-xs font-black text-green-700 dark:bg-green-500/10 dark:text-green-400"
                      >
                        ✓ Details
                      </button>

                      <div className="rounded-xl bg-orange-500 px-4 py-3 text-center text-xs font-black text-white">
                        2. Payment
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mb-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          Order Total
                        </span>

                        <span className="text-2xl font-black text-orange-500">
                          ₹{finalTotal.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <ShieldCheck size={15} className="text-green-500" />
                        Secure demo payment
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="mb-5 grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setPaymentMethod("upi");
                          setErrors({});
                        }}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-xs font-bold transition ${
                          paymentMethod === "upi"
                            ? "border-orange-500 bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                            : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400"
                        }`}
                      >
                        <QrCode size={22} />
                        UPI
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setPaymentMethod("card");
                          setErrors({});
                        }}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-xs font-bold transition ${
                          paymentMethod === "card"
                            ? "border-orange-500 bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                            : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400"
                        }`}
                      >
                        <CreditCard size={22} />
                        Card
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setPaymentMethod("cod");
                          setErrors({});
                        }}
                        className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-xs font-bold transition ${
                          paymentMethod === "cod"
                            ? "border-orange-500 bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                            : "border-slate-200 text-slate-500 dark:border-slate-700 dark:text-slate-400"
                        }`}
                      >
                        <Wallet size={22} />
                        COD
                      </button>
                    </div>

                    {/* UPI */}
                    {paymentMethod === "upi" && (
                      <div>
                        <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                          UPI ID
                        </label>

                        <div className="relative">
                          <Smartphone
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />

                          <input
                            name="upi"
                            placeholder="example@upi"
                            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          />
                        </div>
                      </div>
                    )}

                    {/* Card */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                            Card Number
                          </label>

                          <input
                            name="cardNumber"
                            maxLength={16}
                            inputMode="numeric"
                            placeholder="1234567812345678"
                            onChange={(event) => {
                              event.target.value = event.target.value
                                .replace(/\D/g, "")
                                .slice(0, 16);
                            }}
                            className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                              Expiry
                            </label>

                            <input
                              name="expiry"
                              maxLength={5}
                              placeholder="MM/YY"
                              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-bold text-slate-700 dark:text-slate-300">
                              CVV
                            </label>

                            <input
                              name="cvv"
                              maxLength={3}
                              inputMode="numeric"
                              type="password"
                              placeholder="•••"
                              onChange={(event) => {
                                event.target.value = event.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 3);
                              }}
                              className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* COD */}
                    {paymentMethod === "cod" && (
                      <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5 dark:border-orange-500/20 dark:bg-orange-500/5">
                        <div className="flex gap-3">
                          <Wallet className="shrink-0 text-orange-500" />

                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">
                              Cash on Delivery
                            </h3>

                            <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                              Pay ₹{finalTotal.toLocaleString("en-IN")} when
                              your fresh order arrives.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {errors.payment && (
                      <p className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-xs font-semibold text-red-500 dark:bg-red-500/10">
                        {errors.payment}
                      </p>
                    )}

                    <div className="mt-7 flex gap-3">
                      <button
                        type="button"
                        onClick={goBackToDetails}
                        disabled={processing}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-700 transition hover:border-orange-300 hover:text-orange-500 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300"
                      >
                        <ArrowLeft size={17} />
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={processing}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-4 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {processing ? (
                          <>
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock size={16} />
                            Pay ₹{finalTotal.toLocaleString("en-IN")}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartDrawer;