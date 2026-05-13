import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const ProductList = ({products, onAddToCart}) => {
  return (
    <div>
      <h2>Available Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
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