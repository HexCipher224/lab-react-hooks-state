import React from 'react'
import ProductCard from './ProductCard'

export const sampleProducts = [
  { id: 1,  name: 'Apple',       price: '$1.00', category: 'Fruits',     inStock: true  },
  { id: 2,  name: 'Milk',        price: '$2.50', category: 'Dairy',      inStock: false },
  { id: 3,  name: 'Banana',      price: '$0.75', category: 'Fruits',     inStock: true  },
  { id: 4,  name: 'Cheese',      price: '$3.00', category: 'Dairy',      inStock: true  },
  { id: 5,  name: 'Chicken',     price: '$5.00', category: 'Meat',       inStock: true  },
  { id: 6,  name: 'Bread',       price: '$2.00', category: 'Bakery',     inStock: true  },
  { id: 7,  name: 'Carrot',      price: '$0.50', category: 'Vegetables', inStock: false },
  { id: 8,  name: 'Ground Beef', price: '$6.00', category: 'Meat',       inStock: true  },
]

const ProductList = ({ selectedCategory, onAddToCart }) => {

  // Filter products — show all if "All" or nothing is selected
  const filteredProducts =
    selectedCategory === 'All' || !selectedCategory
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === selectedCategory)

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  )
}

export default ProductList