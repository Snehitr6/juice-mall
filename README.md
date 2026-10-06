# 🥤 Juice Mall – Fresh Juice E-Commerce Website

A modern, responsive **Juice Mall** frontend website built with **React.js, Vite, and Tailwind CSS**. The website provides a smooth shopping experience for fresh juices, smoothies, shakes, coolers, and special offers.

---

## 🚀 Project Overview

**Juice Mall** is a modern juice ordering website designed with a clean, colorful, and professional UI.

The application includes:

- 🏠 Home / Hero Section
- 🥤 Juice Menu
- 🔍 Search & Category Filtering
- ❤️ Wishlist
- 🛒 Shopping Cart
- 💳 Checkout & Payment UI
- 🎁 Special Offers
- ℹ️ About Section
- ⭐ Customer Testimonials
- 📩 Contact Form
- 🌙 Dark Mode
- 📱 Fully Responsive Design
- 🎬 Preloader / Intro Animation
- ✨ Smooth Scroll & Advanced Animations
- ⬆️ Scroll-to-Top Button

---

## 🛠️ Technologies Used

- **React.js**
- **Vite**
- **Tailwind CSS**
- **JavaScript ES6+**
- **HTML5**
- **CSS3**
- **React Context API**
- **Lucide React**
- **LocalStorage**

## ✨ Main Features

### 🧭 Navbar

The navigation bar includes:

- Home
- Menu
- About
- Offers
- Contact
- Search
- Wishlist
- Cart
- Dark Mode

The navbar is **fixed while scrolling** and changes appearance after scrolling.

---

### 🎬 Preloader

The website starts with an animated juice-themed preloader.

Features:

- Juice branding
- Loading animation
- Video/image background support
- Progress animation
- Smooth transition into the website

---

### 🍹 Juice Menu

Products are displayed in attractive cards containing:

- Product image
- Category
- Rating
- Product name
- Description
- Current price
- Previous price
- Wishlist button
- Add-to-cart button
- Quick Add interaction

Categories include:

- All
- Fresh Juices
- Smoothies
- Shakes
- Coolers

---

### 🛒 Shopping Cart

The cart supports:

- Add product
- Remove product
- Increase quantity
- Decrease quantity
- Clear cart
- Cart item count
- Automatic total calculation
- Checkout
- Payment UI
- Order confirmation

Cart functionality is managed using **React Context API**.

---

### ❤️ Wishlist

Users can:

- Add products to wishlist
- Remove products
- View wishlist
- Move wishlist products to cart

Wishlist state is handled globally through the Cart Context.

---

### 💳 Checkout

The checkout UI supports demo payment methods:

- UPI
- Card
- Cash on Delivery

The checkout includes customer information and basic validation.

After successful checkout, an order confirmation screen is displayed.

> **Note:** Payment is frontend/demo functionality and is not connected to a real payment gateway.

---

### 🌙 Dark Mode

The website includes a complete light/dark theme system.

Dark mode is handled using:

```text
ThemeContext.jsx
```

The selected theme is stored in:

```text
localStorage
```

so the preference can remain after refreshing the page.

---

### ✨ Animations

The project includes:

- Scroll reveal animations
- Product hover effects
- Image zoom
- Button hover animations
- Floating animations
- Glow effects
- Card animations
- Cart drawer animation
- Preloader animation
- Smooth scrolling
- Scroll-to-top animation