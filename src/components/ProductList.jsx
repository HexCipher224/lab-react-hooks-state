import React from 'react'
import ProductCard from './ProductCard'

// Sample product data — expanded with more categories for better filter testing
export const sampleProducts = [
  { id: 1,  name: 'Apple',       price: '$1.00', category: 'Fruits',     inStock: true  },
  { id: 2,  name: 'Milk',        price: '$2.50', category: 'Dairy',      inStock: false },
  { id: 3,  name: 'Banana',      price: '$0.75', category: 'Fruits',     inStock: true  },
  { id: 4,  name: 'Cheese',      price: '$3.00', category: 'Dairy',      inStock: true  },
]

const ProductList = ({ selectedCategory, onAddToCart }) => {

  // Filter products — if "All" is selected, show everything
  // otherwise only show products matching the selected category
  const filteredProducts =
    selectedCategory === 'All' || !selectedCategory
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {/* Show a message if no products match the selected category */}
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}  {/* pass handler down to each card */}
          />
        ))
      )}
    </div>
  )
}

export default ProductList