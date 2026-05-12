import React from 'react'
import PropTypes from 'prop-types'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes/array/isRequired,
}

export default Cart