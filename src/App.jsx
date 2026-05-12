import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // ── State ──────────────────────────────────────────────────────────────────
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])                   // stores full product objects
  const [selectedCategory, setSelectedCategory] = useState('All')

  // ── Derive unique categories from product data for the dropdown ────────────
  const categories = ['All', ...new Set(sampleProducts.map((p) => p.category))]

  // ── Handlers ───────────────────────────────────────────────────────────────

  // Toggle dark mode on/off
  function handleToggleDarkMode() {
    setIsDarkMode((prev) => !prev)
  }

  // Add product to cart — prevent duplicates by checking id
  function handleAddToCart(product) {
    const alreadyInCart = cart.some((item) => item.id === product.id)
    if (!alreadyInCart) {
      setCart((prev) => [...prev, product])
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
    </div>
  )}