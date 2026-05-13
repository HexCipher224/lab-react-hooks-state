import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

export const sampleProducts = [
  {id: 1,
  name: 'Apple', 
  price: '$1.00', 
  category: 'Fruits', 
  inStock:true,
},
  {id: 2, 
    name: 'Milk', 
    price: '$2.50', 
    category: 'Dairy', 
    inStock:false}
]
const App = () => {
  // ── State ──────────────────────────────────────────────────────────────────
  const [darkMode, setDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

const filteredProducts = 
  selectedCategory === "all"
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory)

const addToCart = (product) => {
      setCartItems(prev => [...prev, product])
}

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      <DarkModeToggle
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />

      <Cart cart = {cartItems} />

      <label>Filter by category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
    <ProductList
      products={filteredProducts}
      onAddToCart={addToCart}
    />
    </div>
  )}

  export default App;