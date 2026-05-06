import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

  const App = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [cart, setCart] = useState([])
    const [category, setCategory] = useState('all')

          const addToCart = (product) => {
    if (!cart.includes(product.name)) {
      setCart([...cart, product.name])
    }
  }

  return (
    <div className = {darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {<DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
      />/* TODO: Render DarkModeToggle and implement dark mode functionality */}

      {<select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >

      </select>/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
      category={category}
      addToCart={addToCart}
      cart={cart}
      />
      3
      {<Cart cart={cart}
       />/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App;
