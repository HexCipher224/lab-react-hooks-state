import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

export const sampleProducts = [
  {id: 1, name: 'Orange', price: '$1.00', category: 'Fruits', inStock:true},
  {id: 2, name: 'Milk', price: '$2.99', category: 'Dairy', inStock:false}
]

const ProductList = ({products, onAddToCart}) => {
  return (
    <div>
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <productCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ) )
        )}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    inStock: PropTypes.bool
  })
  ).isRequired,
  onAddToCart: PropTypes.func
}
export default ProductList