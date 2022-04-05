import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      const renderTotalCost = () => {
        let cost = 0
        const calculateTotalCost = item => {
          const {quantity, price} = item

          cost += quantity * price
        }
        cartList.forEach(item => calculateTotalCost(item))
        return cost
      }

      return (
        <div className="cart-summary-container">
          <h1 className="total-cost">
            Order Total:
            <span className="total-cost-text"> Rs {renderTotalCost()}/- </span>
          </h1>
          <p className="total-cart-items-text">
            {' '}
            {cartListLength} Items in cart
          </p>
          <button type="button" className="checkout-button">
            {' '}
            Checkout{' '}
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
